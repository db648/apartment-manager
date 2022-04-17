import { GET_DATA } from "./action";

const initState = {
    flats : []
}

export const apartmentReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case GET_DATA :
            return {
                ...state, 
                flats : payload
            }

        default :
            return state
    }
}

