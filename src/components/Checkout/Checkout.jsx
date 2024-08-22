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
  });
  const [idOrden, setIdOrden] = useState(null);
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const orden = {
      comprador: { ...datosForm },
      productos: [...carrito],
      fecha: Timestamp.fromDate(new Date()),
      total: precioTotal(),
    };

    const response = await validateForm(datosForm);
    if (response.status === 'success') {
      await sendOrder(orden);
      vaciarCarrito(); // Vaciar el carrito después de enviar la orden
    } else {
      alert(response.message); // Cambié el toast.warning por un alert para consistencia
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
          <a href="/" className="button-return">Volver a la tienda</a> {/* Botón para regresar a la tienda */}
        </div>
      ) : (
        <FormularioCheckout
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;