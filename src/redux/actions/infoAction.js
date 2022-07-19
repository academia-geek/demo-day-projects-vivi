import { doc, getDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "../../firebase/firebaseConfig"
import { typesInfo } from "../types/types"

//Agregar y Listar
export const addAge = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);

        await updateDoc(docRef, {
            edad: value,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const addLike = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Gustos
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        datos.push(value)

        await updateDoc(docRef, {
            "Gustos": datos,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const addPlace = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Visitados
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        datos.push(value)

        await updateDoc(docRef, {
            "Visitados": datos,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const addLiked = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Deseados
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        datos.push(value)

        await updateDoc(docRef, {
            "Deseados": datos,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const addPost = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Posts
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        datos.unshift(value)

        await updateDoc(docRef, {
            "Posts": datos,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}

export const listAsync = () => {
    return async (dispatch) => {
        const user = auth.currentUser;
        const usuario = user?.uid
        const docRef = doc(db, "Info", usuario);
        const docSnap = await getDoc(docRef);
        const fireData = docSnap.data()
        dispatch(listSync([fireData]))
    }
}
export const listSync = (lista) => {
    return {
        type: typesInfo.list_info,
        payload: lista
    }
}

//Eliminar
export const deleteLike = (id, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Gustos
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        const nuevo = datos.filter(c => c.id !== id)

        await updateDoc(docRef, {
            "Gustos": nuevo,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const deletePlace = (id, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Visitados
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        const nuevo = datos.filter(c => c.id !== id)

        await updateDoc(docRef, {
            "Visitados": nuevo,
        }).then(resp => {
            dispatch(listAsync())
        }).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const deleteLiked = (id, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Deseados
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        const nuevo = datos.filter(c => c.id !== id)

        await updateDoc(docRef, {
            "Deseados": nuevo,
        }).then(resp => {
            dispatch(listAsync())
        }).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}
export const deletePost = (id, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Posts
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        const nuevo = datos.filter(c => c.id !== id)

        await updateDoc(docRef, {
            "Posts": nuevo,
        }).then(resp => {
            dispatch(listAsync())
        }).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}