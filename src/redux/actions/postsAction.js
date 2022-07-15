import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesPosts } from "../types/types"

//Listar
export const listPosts = () => {
    return async (dispatch) => {
        const datos = []
        const Posts = await getDocs(collection(db, "Posts"))
        Posts.forEach(obj => {
            datos.push(
                {
                    ...obj.data()
                }
            )
        })
        dispatch(listSync(datos))
    }
}

export const listSync = (datos) => {
    return {
        type: typesPosts.list,
        payload: datos
    }
}

//Agregar
export const addPost = (value) => {
    return (dispatch) => {
        addDoc(collection(db, "Posts"), value)
            .then(resp => {
                dispatch(addSync(value))
                dispatch(listPosts())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesPosts.add,
        payload: value
    }
}

//Eliminar
export const deletePost = (id) => {
    return async (dispatch) => {
        const Posts = collection(db, "Posts")
        const q = query(Posts, where("id", "==", id))
        const datos = await getDocs(q)

        datos.forEach(obj => {
            deleteDoc(doc(db, "Posts", obj.id))
        })
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    return {
        type: typesPosts.delete,
        payload: id
    }
}