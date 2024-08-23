import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import db from '../../db/db.js';
import validateForm from '../../utils/validacionFormulario.js';
import './Checkout.css';

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    emailConfirm: '', // Agregado para confirmación de email
  });
  const [idOrden, setIdOrden] = useState(null);
  const [errores, setErrores] = useState({}); // Estado para manejar errores
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    // Validación del formulario
    let valid = true;
    let erroresTemp = {};

    if (datosForm.email !== datosForm.emailConfirm) {
      erroresTemp.emailConfirm = 'Los correos electrónicos no coinciden';
      valid = false;
    }

    // Validación adicional según sea necesario
    const response = await validateForm(datosForm);
    if (response.status === 'error') {
      valid = false;
      erroresTemp = { ...erroresTemp, ...response.errors };
    }

    if (valid) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal(),
      };
      await sendOrder(orden);
      vaciarCarrito();
    } else {
      setErrores(erroresTemp);
    }
  };

  const sendOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, 'ordenes');
      const ordenDb = await addDoc(ordenesRef, orden);
      setIdOrden(ordenDb.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      {idOrden ? (
        <div className="order-completed">
          <h2>¡Orden completada correctamente! 😁</h2>
          <p>Guarde el ID de su orden generada: <strong>{idOrden}</strong></p>
          <a href="/" className="button-return">Volver a la tienda</a>
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
          errores={errores} // Pasar errores a FormularioCheckout
        />
      )}
    </div>
  );
};

export default Checkout;