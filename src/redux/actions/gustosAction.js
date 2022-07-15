import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesGustos } from "../types/types"

//Listar
export const listLikes = () => {
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
        type: typesGustos.list_gustos,
        payload: lista
    }
}

//Agregar
export const addLikes = (value) => {
    return (dispatch) => {
        addDoc(collection(db, "Gustos"), value)
            .then(resp => {
                dispatch(addSync(value))
                // dispatch(listLikes())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesGustos.add_gustos,
        payload: value
    }
}

//Eliminar
export const deleteLikes = (id) => {
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
        type: typesGustos.delete_gustos,
        payload: id
    }
}