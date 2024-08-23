// src/context/CartContext.jsx
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (productoNuevo) => {
    const existeEnCarrito = carrito.some(
      (productoCarrito) =>
        productoCarrito.id === productoNuevo.id &&
        productoCarrito.categoria === productoNuevo.categoria
    );

    if (existeEnCarrito) {
      const nuevoCarrito = carrito.map((productoCarrito) => {
        if (
          productoCarrito.id === productoNuevo.id &&
          productoCarrito.categoria === productoNuevo.categoria
        ) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + productoNuevo.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoNuevo]);
    }
  };

  const aumentarCantidad = (idProducto, idCategoria) => {
    const nuevoCarrito = carrito.map((productoCarrito) => {
      if (
        productoCarrito.id === idProducto &&
        productoCarrito.categoria === idCategoria
      ) {
        return {
          ...productoCarrito,
          cantidad: productoCarrito.cantidad + 1,
        };
      }
      return productoCarrito;
    });
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (idProducto, idCategoria) => {
    const nuevoCarrito = carrito.map((productoCarrito) => {
      if (
        productoCarrito.id === idProducto &&
        productoCarrito.categoria === idCategoria &&
        productoCarrito.cantidad > 1
      ) {
        return {
          ...productoCarrito,
          cantidad: productoCarrito.cantidad - 1,
        };
      }
      return productoCarrito;
    });
    setCarrito(nuevoCarrito);
  };

  const borrarProducto = (idProducto, idCategoria) => {
    const productosFiltrados = carrito.filter(
      (productoCarrito) =>
        productoCarrito.id !== idProducto ||
        productoCarrito.categoria !== idCategoria
    );
    setCarrito(productosFiltrados);
  };

  const cantidadTotal = () => {
    return carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce(
      (total, productoCarrito) => total + productoCarrito.cantidad * productoCarrito.precio,
      0
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        aumentarCantidad,
        disminuirCantidad,
        cantidadTotal,
        precioTotal,
        borrarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };