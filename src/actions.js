import { firebaseApp } from './firebase'
import * as firebase from 'firebase'

const db = firebase.firestore(firebaseApp)

//consultar todas las tareas
export const getCollection = async(collection)=>{
    const result = { statusResponse : false, data: null, error: null }
    try {
        const data = await db.collection(collection).get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        result.statusResponse=true
        result.data= arrayData
        //console.log(arrayData)
    } catch (error) {
        result.error=error
    }
    return result
}


// agregar una tarea
export const addDocument = async(collection, data)=>{
    const result = { statusResponse : false, data: null, error: null }
    try {
        const response = await db.collection(collection).add(data)
        result.data = { id: response.id }
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
}

//consultar una sola tarea
export const getDocunent = async(collection, id) => {
    const result = { statusResponse : false, data: null, error: null }
    try {
        const response = await db.collection(collection).doc(id).get()
        result.data = { id: response.id, ...response.data() }
        result.statusResponse = true
    } catch (error) {
        result.error=error
    }
    return result
}

//editar una tarea
export const updateDocunent = async(collection, id, data) => {
    const result = { statusResponse : false, error: null }
    try {
        await db.collection(collection).doc(id).update(data)
        result.statusResponse = true
    } catch (error) {
        result.error=error
    }
    return result
}

//eliminar una tarea
export const deleteDocumento = async(collection, id) => {
    const result = { statusResponse : false, error: null }
    try {
        await db.collection(collection).doc(id).delete()
        result.statusResponse = true
    } catch (error) {
        result.error=error
    }
    return result
}