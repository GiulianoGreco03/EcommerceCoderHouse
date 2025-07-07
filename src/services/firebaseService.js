import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig"

const productsCollection = collection(db, "Productos")

export const getProducts = () => {
    return getDocs(productsCollection)
}

export const getProduct = (id) => {
    return getDoc(doc(db, "Productos", id))
}

export const uploadProduct = (product) => {
    addDoc(productsCollection, product)
}

export const uploadProductArray = (products)=>{
    products.forEach(element => {
        uploadProduct(element)
    });
}