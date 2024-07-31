import { useState, useEffect } from "react"; 
import obtenerProductos from "../../data/Data.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({saludo}) => {
  const [productos, setProductos]  = useState ([])
  const { idCategoria } = useParams();

   useEffect ( ()=> {
    obtenerProductos()
    .then((respuesta)=> {
      if (idCategoria) {
        // fitrito
        const productosFiltrados = respuesta.filter( (producto)=> producto.categoria === idCategoria)
        setProductos(productosFiltrados)
      } else {
          //guarda producto
          setProductos(respuesta);
      } 
    })
    .catch((error) => {
    console.log(error)
    })
    .finally(() => {
        console.log("finalizo la promesa");
    });
}, [idCategoria]);


    return (
      <div>
        <p>{saludo}</p>
        <ItemList productos = {productos} />
       
      </div>
    );
};
export default ItemListContainer;