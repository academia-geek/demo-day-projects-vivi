import { typesVisitados } from "../types/types"

const initialState = {
    lista: []
}

export const visitadosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesVisitados.add:
            return {
                lista: [...state.lista, action.payload]
            }
        case typesVisitados.delete:
            return {
                lista: state.lista.filter(c => c.id !== action.payload)
            }
        case typesVisitados.list:
            return {
                lista: [...action.payload]
            }
        case typesVisitados.edit:
            return {
                ...state
            }
        default:
            return state
    }

}