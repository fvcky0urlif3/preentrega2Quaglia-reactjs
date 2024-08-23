import { useEffect, useState, useContext } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import ItemList from './ItemList';
import './itemListContainer.css';
import { useParams, useLocation } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext'; // Importa el contexto

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(true);
  const { idCategoria } = useParams(); // Obtener la categoría desde los parámetros de la URL
  const location = useLocation();
  const { setCategory } = useContext(CategoryContext); // Obtén la función para actualizar la categoría

  useEffect(() => {
    const getProducts = async () => {
      try {
        let productosRef = collection(db, 'productos');
        
        if (idCategoria && idCategoria !== '') { // Verificar si hay una categoría definida
          productosRef = query(productosRef, where("categoria", "==", idCategoria));
          setCategory(idCategoria); // Actualiza la categoría previa
        }

        const dataDb = await getDocs(productosRef);
        const data = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });

        setProductos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setEstaCargando(false);
      }
    };

    getProducts();
  }, [idCategoria, location, setCategory]); // Añade dependencias relevantes

  return (
    <div className="item-list-container">
      {!idCategoria ? (
        <>
          <h3>{saludo}</h3>
          <p>
            Navegando vas a enterarte de nuevos proyectos videográficos, JAMS,
            nuevos lanzamientos de productos y colaboraciones.
          </p>
          <p>
            También puedes encontrar toda nuestra Merch y productos exclusivos como
            los Odi grips SLX y los 'JJ' pedals Sweet Oil colorway!
          </p>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/km6o5nBDFk0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="instagram-legend">
            <p>
              Puedes seguirnos en nuestro Instagram, subimos videos y fotos de cada evento y juntada, además de clips de nuestros riders!!
            </p>
          </div>

          <div className="instagram-container">
            <iframe
              src="https://www.instagram.com/sweetleafcrew/embed"
              width="400"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>

          <div className="riders-legend">
            <p>Conoce a nuestros riders</p>
          </div>

          <div className="riders-links">
            <iframe
              src="https://www.instagram.com/fvcky0urlif3/embed"
              title="Rider 1"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
            <iframe
              src="https://www.instagram.com/petroch1ll_bmx/embed"
              title="Rider 2"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
            <iframe
              src="https://www.instagram.com/telmobernaldez/embed"
              title="Rider 3"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
            <iframe
              src="https://www.instagram.com/mvrcosdeolivera/embed"
              title="Rider 4"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </div>

          <div className="navigation-legend">
            <p>
              Debajo chequea todos los productos de nuestra Merch o navega por el menú y llena tu carrito!!
            </p>
          </div>
        </>
      ) : null}

      {estaCargando ? (
        <p>Cargando...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;