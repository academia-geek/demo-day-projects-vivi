import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesEvents } from "../types/types"


export const addEventAsync = (formValue) => {
    return async (dispatch)=>{
        addDoc(collection(db, "eventos"), formValue)
        .then(resp => dispatch(addEventSync(formValue)))
        .catch(error => console.warn(error))

    }
}
export const addEventSync = (formValue)=> {
    return {
        type: typesEvents,
        payload: formValue
    }
}


export const listEventAsync =() => {
    return async (dispatch)=>{
        const collectionListar = await getDocs(collection(db, "eventos"))
        const eventsA = []
        collectionListar.forEach(listar => {
            eventsA .push(
                {
                    ...listar.data()
                }
            )
            
        })
       dispatch(listEventSync(eventsA)) 
    }
}

export const listEventSync = (events)=>{
       return {
        type: typesEvents.list,
        payload: events
    }
}

export const deleteEventAsync = (id)=>{
    return async (dispatch)=>{
        const collectionEvents = collection(db, "eventos")
        const q = query(collectionEvents, where("id", "==", id))

        const datosQ = await getDocs(q)
        

        datosQ.forEach(docu =>{
            deleteDoc(doc(db, "eventos", docu.id))
        })
        dispatch(DeleteEventSync(id))

  
}}

export const DeleteEventSync = (id) => {
    return {
        type: typesEvents.delete,
        payload:id
    }
}

export const editEventAsync = (newEvent)=>{
    return async (dispatch)=>{
        const collectionEvents = collection(db, "eventos")
        const q = query(collectionEvents, where("id", "==", newEvent.id))
        const datosQ = await getDocs(q)
        let id = ''

        datosQ.forEach(async(docu)=>{
            id = docu.id
        })
        const docRef = doc(db, "eventos", id)

        await updateDoc(docRef, newEvent)
        .then(resp =>{
            dispatch(editEventSync(newEvent))
            dispatch(listEventSync())
        
        })
        .catch(error => console.log(error))
    }
}
export const editEventSync = (newEvent)=>{
    return {
        type: typesEvents.edit,
        payload: {newEvent}
    }
}