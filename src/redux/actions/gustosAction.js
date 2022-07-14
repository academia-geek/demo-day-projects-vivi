import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesGustos } from "./types"

//Listar
export const listAsync = () => {
    return async (dispatch) => {
        const datos = []
        const Gustos = await getDocs(collection(db, "Gustos"))
        Gustos.forEach(obj => {
            datos.push(
                {
                    ...obj.data()
                }
            )
        })
        dispatch(listSync(datos))
    }
}

export const listSync = (lista) => {
    return {
        type: typesGustos.list,
        payload: lista
    }
}

//Agregar
export const addAsync = (value) => {
    return (dispatch) => {
        addDoc(collection(db, "Gustos"), value)
            .then(resp => {
                dispatch(addSync(value))
                dispatch(listAsync())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesGustos.add,
        payload: value
    }
}

//Eliminar
export const deleteAsync = (id) => {
    return async (dispatch) => {
        const Gustos = collection(db, "Gustos")
        const q = query(Gustos, where("id", "==", id))
        const datos = await getDocs(q)

        datos.forEach(obj => {
            deleteDoc(doc(db, "Gustos", obj.id))
        })
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    return {
        type: typesGustos.delete,
        payload: id
    }
}