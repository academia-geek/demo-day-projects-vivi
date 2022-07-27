import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesOtherUser } from "../types/types"

export const listAsync = (otro) => {
    return async (dispatch) => {
        const docRef = doc(db, "Info", otro);
        const docSnap = await getDoc(docRef);
        const fireData = docSnap.data()
        dispatch(listSync([fireData]))
    }
}

export const listSync = (lista) => {
    return {
        type: typesOtherUser.list_other,
        payload: lista
    }
}