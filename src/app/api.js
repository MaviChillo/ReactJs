import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createProducto = async(obj) => {
    const colRef = collection(db, 'productos');
    const data = await addDoc(colRef, obj);
    return data.id;
}

export const createItem = async (obj) => {
    const colRef = collection(db, 'pedido');
    const data = await addDoc(colRef, obj);
    return data.id;
}

export const getPedido = async ()  => {
    const colRef = collection(db, 'pedido');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}


export const createPedido = async(obj) => {
    const colRef = collection(db, 'productos');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateProducto = async (id, obj) => {
    const colRef = collection(db, 'productos');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getProductos = async ()  => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta

export const getProductosByCondition = async (value) => {
    const colRef = collection(db, 'productos');
    let result;
    if(value) result = await getDocs(query(colRef, where('categoria', '==', Number(value))));
    else result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getProductoById = async (id) => {
    const colRef = collection(db, 'productos');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

export const getOrdenById = async (id) => {
    const colRef = collection(db, 'pedido');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}


// DELETE
export const deleteProducto = async (id) => {
    const colRef = collection(db, 'productos');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}