import { typesDeseados } from "../types/types"

const initialState = {
    lista: []
}

export const deseadosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesDeseados.add:
            return {
                lista: [...state.lista, action.payload]
            }
        case typesDeseados.delete:
            return {
                lista: state.lista.filter(c => c.id !== action.payload)
            }
        case typesDeseados.list:
            return {
                lista: [...action.payload]
            }
        case typesDeseados.edit:
            return {
                ...state
            }
        default:
            return state
    }

}