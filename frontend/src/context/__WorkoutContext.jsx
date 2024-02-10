import { createContext, useReducer, useEffect } from "react";

export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) =>{

    switch(action.type) {
        case 'SET_WORKOUT':
            return {workouts: action.payload}
        case 'UPDATE WORKOUT':
            return {workouts: action.payload, ...state.workouts}
        default:
            return state
    }

}

export const WorkoutContextProvider = ({children}) => {

    const [state, dispatch ] = useReducer(workoutsReducer,{

        workouts:null


    })

return (
    <WorkoutContext.Provider value={{state, dispatch}}>
        {children}
    </WorkoutContext.Provider>
)

}