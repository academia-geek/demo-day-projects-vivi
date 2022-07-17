import { typesEvents, typesSchedule } from "../types/types"


const initialState = {
    Activities: []
}

export const eventsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesSchedule.add_Schedule:
            return {
                Activities: [...state.Activities, action.payload]
            }
        case typesSchedule.delete_Schedule:
            return {
                Activities: state.Activities.filter(c => c.id !== action.payload)
            }
        case typesSchedule.list_Schedule:
            return {
                Activities: [...action.payload]
            }
        case typesSchedule.edit_Schedule:
            return {
                ...state
            }
        default:
            return state
    }

}