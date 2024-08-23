import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'; // Asegúrate de importar el CSS
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { idProducto } = useParams();
  const navigate = useNavigate(); // Agrega esta línea para usar navigate

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, 'productos', idProducto);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error fetching product: ", error);
      } finally {
        setCargando(false);
      }
    };

    getProduct();
  }, [idProducto]);

  if (cargando) return <p>Loading...</p>;

  return (
    <div className="item-detail-container">
      {producto && <ItemDetail producto={producto} />}
      {/* Botón para seguir navegando */}
      <button
        className="ver-mas-productos-btn"
        onClick={() => navigate(`/categoria/${producto.categoria}`)}
      >
        Ver más productos
      </button>
    </div>
  );
};

export default ItemDetailContainer;