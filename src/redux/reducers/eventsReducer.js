import { typesEvents } from "../types/types"


const initialState = {
    EventsList: []
}

export const eventsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesEvents.add:
            return {
                EventsList: [...state.EventsList, action.payload]
            }
        case typesEvents.delete:
            return {
                EventsList: state.EventsList.filter(c => c.id !== action.payload)
            }
        case typesEvents.list:
            return {
                EventsList: [...action.payload]
            }
        case typesEvents.edit:
            return {
                ...state
            }
        default:
            return state
    }

}