import { typesDeseados } from "../types/types"

const initialState = {
    listaLiked: []
}

export const deseadosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesDeseados.add:
            return {
                listaLiked: [...state.listaLiked, action.payload]
            }
        case typesDeseados.delete:
            return {
                listaLiked: state.listaLiked.filter(c => c.id !== action.payload)
            }
        case typesDeseados.list:
            return {
                listaLiked: [...action.payload]
            }
        default:
            return state
    }

}