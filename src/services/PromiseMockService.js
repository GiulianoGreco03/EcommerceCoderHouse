const products = [
    {
        id: "1",
        title : "Cactus",
        text: "Los cactus son originarios de América. Podemos encontrar cactus silvestres desde Canadá hasta la Tierra del Fuego (Argentina).",
        price: 20,
        img: "/assets/cactus.png",
        stock: 5,
        category: "cactus_y_crasas"
    }, 
     {
        id: "2",
        title : "Crasa",
        text: "Las plantas suculentas o crasas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación. Estos órganos de reserva tienen una alta proporción de tejido parenquimático.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officia necessitatibus, cum culpa consectetur nulla neque architecto molestias vitae dolorem omnis nam possimus dolores quaerat ipsam id accusantium beatae voluptatibus.",
        price: 10,
        img: "/assets/crasas.png",
        stock: 55,
        category: "cactus_y_crasas"
    }, 
     {
        id: "3",
        title : "Pothus",
        text: "Comúnmente conocido como potus, pothos o poto es una especie de la familia Araceae nativa del sudeste asiático y Nueva Guinea. En ocasiones es confundida con philodendron en las floristerías.",
        price: 25,
        img: "/assets/photus.png",
        stock: 15,
        category: "plantas_de_interior"
    },
    {
        id: "4",
        title : "Crasa 2",
        text: "Las plantas suculentas o crasas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación. Estos órganos de reserva tienen una alta proporción de tejido parenquimático.",
        price: 10,
        img: "/assets/crasas.png",
        stock: 55,
        category: "cactus_y_crasas"
    }, 
    {
        id: "5",
        title : "Pothus 2",
        text: "Comúnmente conocido como potus, pothos o poto es una especie de la familia Araceae nativa del sudeste asiático y Nueva Guinea. En ocasiones es confundida con philodendron en las floristerías.",
        price: 25,
        img: "/assets/photus.png",
        stock: 15,
        category: "plantas_de_interior"
    }
]

function getProducts(){
    return new Promise( (resolve) => {
      setTimeout(()=> resolve(products), 3000)
    })
}

export default getProducts;