import { typesVisitados } from "../types/types"

const initialState = {
    listaPlaces: []
}

export const visitadosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesVisitados.add:
            return {
                listaPlaces: [...state.listaPlaces, action.payload]
            }
        case typesVisitados.delete:
            return {
                listaPlaces: state.listaPlaces.filter(c => c.id !== action.payload)
            }
        case typesVisitados.list:
            return {
                listaPlaces: [...action.payload]
            }
        default:
            return state
    }

}