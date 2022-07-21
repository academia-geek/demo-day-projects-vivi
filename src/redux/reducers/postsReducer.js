import { typesPosts } from "../types/types"

const initialState = {
    listaPosts: []
}

export const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPosts.list_posts:
            return {
                listaPosts: [...action.payload]
            }
        default:
            return state
    }

}