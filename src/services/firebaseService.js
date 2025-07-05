import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig"

const productsCollection = collection(db, "Productos")

export const getProducts = () => {
    return getDocs(productsCollection)
}

export const getProduct = (id) => {
    return getDoc(doc(db, "Productos", id))
}