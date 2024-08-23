
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db/db.js';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { idProducto } = useParams();

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
    </div>
  );
};

export default ItemDetailContainer;
