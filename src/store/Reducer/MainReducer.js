import {DARK, HOVER, HOVER_COURSE} from "./ActionTypes";
import {hover} from "@testing-library/user-event/dist/hover";

const initialState = {
    dark: true,
    hover: false,
    hoverCourse: false,
}

export const MainReducer = (state = initialState, action) => {

    switch (action.type) {
        case  DARK : {
            return {dark: action.payload}
        }
        case HOVER :
            return {
                dark: state.dark,
                hover : action.payload,
                hoverCourse: false
            }
        case HOVER_COURSE :
            return {
                dark: state.dark,
                hover: false,
                hoverCourse: action.payload
        }


        default :
            return state
    }
}
