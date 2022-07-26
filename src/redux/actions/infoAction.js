import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { auth, db } from "../../firebase/firebaseConfig"
import { timeConverter } from "../../helpers/timeConverter"
import { typesInfo, typesPosts } from "../types/types"

export const updatePhoto = (value, userID) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", userID);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data().Posts
        const datos = []

        data.forEach(obj => { datos.push(obj) })
        datos.forEach(obj => {
            obj.photo = value
        })

        await updateDoc(docRef, {
            profileImg: value,
            Posts: datos,
        }).then(
            dispatch(listAsync())
        ).catch(error => {
            console.warn(error, 'Datos no guardados')
        })
    }
}

//Añadir y listar
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
export const listAllPosts = () => {
    return async (dispatch) => {
        const datos = []
        const Posts = await getDocs(collection(db, "Info"))
        const feed = Posts.docs

        feed.forEach(obj => {
            const postData = obj.data().Posts
            if (postData !== undefined) {
                datos.unshift(...postData)
            }
        })

        const sub1 = datos.filter(a=>a.id)

        sub1.forEach(obj => {
            obj.time = timeConverter(obj.time)
        })

           console.log(sub1);

        const sub2 = sub1.sort(function (x, y) {
            var firstDate = new Date(x.time),
                SecondDate = new Date(y.time);

            if (firstDate < SecondDate) return -1;
            if (firstDate > SecondDate) return 1;
            return 0;
        });

        console.log(sub2);

        // dispatch(listPostsSync([datos]))
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
export const listPostsSync = (lista) => {
    return {
        type: typesPosts.list_posts,
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