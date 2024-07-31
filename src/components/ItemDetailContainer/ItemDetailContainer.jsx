import { useEffect, useState } from "react"
import obtenerProductos from "../../data/Data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState ({})
    const {idProducto} = useParams()

  useEffect ( () =>
            
    obtenerProductos()
    .then((data)=> {
      const productoEncontrado = data.find ((productoData) => productoData.id === idProducto )
      setProducto(productoEncontrado)
    })
         
  
  )
  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer
