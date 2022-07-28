import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesSchedule } from "../types/types"


export const addScheduleAsync = (formValue) => {
    return async (dispatch) => {
        addDoc(collection(db, "Actividades"), formValue)
            .then(resp => dispatch(addScheduleSync(formValue)))
            .catch(error => console.warn(error))

    }
}
export const addScheduleSync = (formValue) => {
    return {
        type: typesSchedule.add_Schedule,
        payload: formValue
    }
}


export const listScheduleAsync = () => {
    return async (dispatch) => {

        const collectionListar = await getDocs(collection(db, "Actividades"))
        console.log(collectionListar)
        const activitieA = []
        collectionListar.forEach(listar => {
            activitieA.push(
                {
                    ...listar.data()
                }
            )

        })
        dispatch(listScheduleSync(activitieA))
    }
}

export const listScheduleSync = (activities) => {
    return {
        type: typesSchedule.list_Schedule,
        payload: activities
    }
}

export const deleteScheduleAsync = (iud) => {
    return async (dispatch) => {
        const collectionEvents = collection(db, "Actividades")
        const q = query(collectionEvents, where("iud", "==", iud))
        const datosQ = await getDocs(q)


        datosQ.forEach(docu => {
            deleteDoc(doc(db, "Actividades", docu.id))
        })
        dispatch(DeleteScheduleSync(iud))
        dispatch(listScheduleAsync)


    }
}

export const DeleteScheduleSync = (iud) => {
    return {
        type: typesSchedule.delete_Schedule,
        payload: iud
    }
}

export const editScheduleAsync = (newActivitie) => {
    return async (dispatch) => {
        const collectionSchadule = collection(db, "Actividades")
        const q = query(collectionSchadule, where("iud", "==", newActivitie.iud))
        const datosQ = await getDocs(q)
        let id = ''

        datosQ.forEach(async (docu) => {
            id = docu.id
        })
        const docRef = doc(db, "Actividades", id)



        await updateDoc(docRef, newActivitie)
            .then(resp => {
                dispatch(editScheduleSync(newActivitie))
                dispatch(listScheduleSync())

            })
            .catch(error => console.log(error))


    }
}
export const editScheduleSync = (newActivitie) => {
    return {
        type: typesSchedule.edit_Schedule,
        payload: { newActivitie }

    }
}