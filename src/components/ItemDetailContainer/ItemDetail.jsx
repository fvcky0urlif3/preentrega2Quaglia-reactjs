import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const { agregarProducto } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      const productoRef = doc(db, "productos", idProducto);
      const productoDoc = await getDoc(productoRef);
      if (productoDoc.exists()) {
        setProducto({ ...productoDoc.data(), id: idProducto });
      }
    };
    getProduct();
  }, [idProducto]);

  if (!producto) return <div>Loading...</div>;

  const handleAgregar = (cantidad) => {
    agregarProducto({ 
      ...producto, 
      cantidad, 
      categoria: producto.categoria 
    });
  };

  return (
      <div className="item-detail">
        <div className="image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detail">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="price">Precio: ${producto.precio}</p>
          <ItemCount agregarAlCarrito={handleAgregar} stock={producto.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
