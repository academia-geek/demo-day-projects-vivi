import { typesInfo } from "../types/types"

const initialState = {
    listaInfo: []
}

export const infoReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesInfo.list_info:
            return {
                listaInfo: [...action.payload]
            }
        default:
            return state
    }

}