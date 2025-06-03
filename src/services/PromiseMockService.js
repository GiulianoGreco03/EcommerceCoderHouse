const products = [
    {
        id: "1",
        title : "Cactus",
        text: "Los cactus son originarios de América. Podemos encontrar cactus silvestres desde Canadá hasta la Tierra del Fuego (Argentina).",
        price: 20,
        img: "src/assets/cactus.png",
        stock: 5,
        category: "Cactus y crasas"
    }, 
     {
        id: "2",
        title : "Crasa",
        text: "Las plantas suculentas o crasas son aquellas en las que algún órgano está especializado en el almacenamiento de agua en cantidades mayores que las plantas sin esta adaptación. Estos órganos de reserva tienen una alta proporción de tejido parenquimático.",
        price: 10,
        img: "src/assets/crasas.png",
        stock: 55,
        category: "Cactus y crasas"
    }, 
     {
        id: "3",
        title : "Pothus",
        text: "Comúnmente conocido como potus, pothos o poto es una especie de la familia Araceae nativa del sudeste asiático y Nueva Guinea. En ocasiones es confundida con philodendron en las floristerías.",
        price: 25,
        img: "src/assets/photus.png",
        stock: 15,
        category: "Plantas de interior"
    }
]

function getProducts(){
    return new Promise( (resolve, reject) => {
      setTimeout(()=> resolve(products), 3000)
    })
}

export default getProducts;