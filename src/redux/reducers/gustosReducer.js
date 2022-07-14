import { typesGustos } from "../types/types"

const initialState = {
    lista: []
}

export const gustosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesGustos.add:
            return {
                lista: [...state.lista, action.payload]
            }
        case typesGustos.delete:
            return {
                lista: state.lista.filter(c => c.id !== action.payload)
            }
        case typesGustos.list:
            return {
                lista: [...action.payload]
            }
        case typesGustos.edit:
            return {
                ...state
            }
        default:
            return state
    }

}