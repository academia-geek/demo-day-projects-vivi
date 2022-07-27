import { typesOtherUser } from "../types/types"

const initialState = {
    otherUser: []
}

export const otherUserReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesOtherUser.list_other:
            return {
                otherUser: [...action.payload]
            }
        default:
            return state
    }

}