import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesVisitados } from "../types/types"

//Listar
export const listPlaces = () => {
    return async (dispatch) => {
        const datos = []
        const Visitados = await getDocs(collection(db, "Visitados"))
        Visitados.forEach(obj => {
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
        type: typesVisitados.list_visit,
        payload: lista
    }
}

//Agregar
export const addPlaces = (value) => {
    return (dispatch) => {
        addDoc(collection(db, "Visitados"), value)
            .then(resp => {
                dispatch(addSync(value))
                dispatch(listPlaces())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesVisitados.add_visit,
        payload: value
    }
}

//Eliminar
export const deletePlaces = (id) => {
    return async (dispatch) => {
        const Visitados = collection(db, "Visitados")
        const q = query(Visitados, where("id", "==", id))
        const datos = await getDocs(q)

        datos.forEach(obj => {
            deleteDoc(doc(db, "Visitados", obj.id))
        })
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    return {
        type: typesVisitados.delete_visit,
        payload: id
    }
}