import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesDeseados } from "../types/types"

//Listar
export const listLiked = () => {
    return async (dispatch) => {
        const datos = []
        const Deseados = await getDocs(collection(db, "Deseados"))
        Deseados.forEach(obj => {
            datos.push(
                {
                    ...obj.data()
                }
            )
        })
        console.log(Deseados)
        console.log(datos)
        dispatch(listSync(datos))
    }
}

export const listSync = (datos) => {
    return {
        type: typesDeseados.list,
        payload: datos
    }
}

//Agregar
export const addLiked = (value) => {
    return (dispatch) => {
        addDoc(collection(db, "Deseados"), value)
            .then(resp => {
                dispatch(addSync(value))
                dispatch(listLiked())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesDeseados.add,
        payload: value
    }
}

//Eliminar
export const deleteLiked = (id) => {
    return async (dispatch) => {
        const Deseados = collection(db, "Deseados")
        const q = query(Deseados, where("id", "==", id))
        const datos = await getDocs(q)

        datos.forEach(obj => {
            deleteDoc(doc(db, "Deseados", obj.id))
        })
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    return {
        type: typesDeseados.delete,
        payload: id
    }
}