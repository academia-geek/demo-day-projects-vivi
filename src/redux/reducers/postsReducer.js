import { typesPosts } from "../types/types"

const initialState = {
    listaPosts: []
}

export const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPosts.add_post:
            return {
                listaPosts: [...state.listaPosts, action.payload]
            }
        case typesPosts.delete_post:
            return {
                listaPosts: state.listaPosts.filter(c => c.id !== action.payload)
            }
        case typesPosts.list_post:
            return {
                listaPosts: [...action.payload]
            }
        default:
            return state
    }

}