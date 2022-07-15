import { typesGustos } from "../types/types"

const initialState = {
    listaLikes: []
}

export const gustosReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesGustos.add_gustos:
            return {
                listaLikes: [...state.listaLikes, action.payload]
            }
        case typesGustos.delete_gustos:
            return {
                listaLikes: state.listaLikes.filter(c => c.id !== action.payload)
            }
        case typesGustos.list_gustos:
            return {
                listaLikes: [...action.payload]
            }
        default:
            return state
    }

}