import { typesVisitados } from "../types/types"

const initialState = {
    listaPlaces: []
}

export const visitadosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesVisitados.add_visit:
            return {
                listaPlaces: [...state.listaPlaces, action.payload]
            }
        case typesVisitados.delete_visit:
            return {
                listaPlaces: state.listaPlaces.filter(c => c.id !== action.payload)
            }
        case typesVisitados.list_visit:
            return {
                listaPlaces: [...action.payload]
            }
        default:
            return state
    }

}