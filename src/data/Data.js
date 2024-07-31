const productos =[
    {
        id: "capazu01",
        nombre: "Gorra Azul",
        descripcion: "Gorra azul Visera plana",
        precio: "2990",
        color: "Azul",
        categoria: "caps",
        stock: "2",
        imagen:"/img/caps/capazu01.jpg",
    },
    {
        id: "capbla01",
        nombre: "Gorra Blanca",
        descripcion: "Gorra Blanca visera plana",
        precio: "2700",
        color: "Blanco",
        categoria: "caps",
        stock: "2",
        imagen:"/img/caps/capbla01.jpg",
    },
    {
        id: "capneg001",
        nombre: "Gorra Negra",
        descripcion: "Gorra negra visera plana",
        precio: "2800",
        color: "",
        categoria: "caps",
        stock: "2",
        imagen:"/img/caps/capneg01.jpg",
    },
    {
        id: "griodi01",
        nombre: "Grip Odi SLX irish",
        descripcion: "",
        precio: "2500",
        color: "Irishner",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi01.jpg",
    },
    {
        id: "griodi02",
        nombre: "Grip Odi SLX light blue",
        descripcion: "",
        precio: "2500",
        color: "Celeste",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi02.jpg",
    },
    {
        id: "griodi03",
        nombre: "Grip Odi SLX traffic grey",
        descripcion: "",
        precio: "2500",
        color: "Gris",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi03.jpg",
    },
    {
        id: "griodi04",
        nombre: "Grip Odi SLX blood red",
        descripcion: "",
        color: "Rojo",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi04.jpg",
    },
    {
        id: "griodi05",
        nombre: "Grip Odi SLX black out",
        descripcion: "",
        precio: "2500",
        color: "Negro",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi05.jpg",
    },
    
    
] 


const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(productos)
    });
};

export default obtenerProductos