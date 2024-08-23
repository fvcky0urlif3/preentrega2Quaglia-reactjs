import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import db from '../../db/db.js';
import ItemList from './ItemList';
import './itemListContainer.css';

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productosRef = collection(db, 'productos');
        const dataDb = await getDocs(productosRef);
        const data = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() };
        });
        setProductos(data);
        setEstaCargando(false);
      } catch (error) {
        console.log(error);
        setEstaCargando(false);
      }
    };
    setEstaCargando(true);
    getProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h3>Bienvenido a la SWEET LEAF WEB</h3>
      <p>
        Navegando vas a enterarte de nuevos proyectos videográficos, JAMS,
        nuevos lanzamientos de productos y colaboraciones.
      </p>
      <p>
        También puedes encontrar toda nuestra Merch y productos exclusivos como
        los Odi grips SLX y los 'JJ' pedals Sweet Oil colorway!
      </p>

      {/* Video de YouTube embebido */}
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

      {/* Leyenda de Instagram */}
      <div className="instagram-legend">
        <p>
          Puedes seguirnos en nuestro Instagram, subimos videos y fotos de cada evento y juntada, además de clips de nuestros riders!!
        </p>
      </div>

      {/* Perfil de Instagram embebido */}
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

      {/* Leyenda de riders */}
      <div className="riders-legend">
        <p>Conoce a nuestros riders</p>
      </div>

      {/* Perfiles de Instagram de los riders */}
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

      {/* Leyenda de navegación */}
      <div className="navigation-legend">
        <p>
          Debajo chequea todos los productos de nuestra Merch o navega por el menú y llena tu carrito!!
        </p>
      </div>

      {estaCargando ? (
        <p>Cargando...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;