import { addDoc, collection } from "firebase/firestore";
import db from "../db/db.js";


const productos =[
    //caps
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
        color: "negro",
        categoria: "caps",
        stock: "2",
        imagen:"/img/caps/capneg01.jpg",
    },

    //grips
    {
        id: "griodi01",
        nombre: "Grip Odi SLX irish",
        descripcion: "Puños Odi slx, los mas buscados del mercado, el color Irishner cambia con el reflejo de la luz solar!",
        precio: "2500",
        color: "Irishner",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi01.jpg",
    },
    {
        id: "griodi02",
        nombre: "Grip Odi SLX light blue",
        descripcion: "Puños Odi slx, los mas buscados del mercado, del color del cielo a donde apuntamos llegar andando!",
        precio: "2500",
        color: "Celeste",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi02.jpg",
    },
    {
        id: "griodi03",
        nombre: "Grip Odi SLX traffic grey",
        descripcion: "Puños Odi slx, los mas buscados del mercado, para estar comodo hasta atascado en el trafico!",
        precio: "2500",
        color: "Gris",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi03.jpg",
    },
    {
        id: "griodi04",
        nombre: "Grip Odi SLX blood red",
        descripcion: "Puños Odi slx, los mas buscados del mercado, del color de las batallas, y de muchas frutillas",
        precio: "2500",
        color: "Rojo",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi04.jpg",
    },
    {
        id: "griodi05",
        nombre: "Grip Odi SLX black out",
        descripcion: "Puños Odi slx, los mas buscados del mercado, en color negro, solidos, clasicos... nunca falla!",
        precio: "2500",
        color: "Negro",
        categoria: "grips",
        stock: "2",
        imagen:"/img/grips/griodi05.jpg",
    },

//hoodies
    {   id: "buzneg01",
        nombre: "Buzo Sweet Leaf Father of forest",
        descripcion: "Buzo frizado ideal para los sweet winters",
        precio: "8990",
        color: "Negro",
        categoria: "hoodies",
        stock: "2",
        imagen: "/img/hoodies/buzneg01.jpg",
    },
    {   id: "buzneg02",
        nombre: "Buzo Sweet Leaf Flower Power",
        descripcion: "Buzo tela rustica, ideal para andar en bike",
        precio: "8990",
        color: "Negro",
        categoria: "hoodies",
        stock: "2",
        imagen: "/img/hoodies/buzneg02.jpg",
    },


    //pedales
    {   id: "pedpri01",
        nombre: "Pedal Primo JJ x SLC colorway" ,
        descripcion: "Pedal signature de 'JJ' Palmere, en un colorway especial en colabo con nuestra crew SWEET LEAF CREW",
        precio: "15000" ,
        color: "Oil slick" ,
        categoria: "pedal" ,
        stock: "2" ,
        imagen: "/img/pedal/pedpri01.jpg" , 
    },

    //remes
    {   id: "rembla01",
        nombre: "Remera Blanca Flower power",
        descripcion: "Remera blanca de algodon super liviano",
        precio:"5400",
        color:"Blanco",
        categoria: "remes",
        stock:"2",
        imagen:"/img/remes/rembla01.jpg",
    },
    {
        id: "remneg01",
        nombre: "Be The Man T-shirt",
        descripcion: "Remera negra clasica, para completar cualquier fit",
        precio:"5400",
        color:"Negro",
        categoria: "remes",
        stock:"2",
        imagen:"/img/remes/remneg01.jpg",
    },
    {
        id: "remroj01",
        nombre: "Blood thoughts T-shirt",
        descripcion: "Remera del color de los pensamientos que tenemos los que atendemos la publico",
        precio:"5400",
        color:"Rojo",
        categoria: "remes",
        stock:"2",
        imagen:"/img/remes/remroj01.jpg",
    },
];
    
const seedProducts = () => {
    productos.map(({ id, ...rest }) => {
      const productosRef = collection(db, "productos")
      addDoc(productosRef, rest)
    })
  
    console.log("productos subidos correctamente")
  }
  
  seedProducts()