import { ADD_PROJECT, SET_PROJECTS, PROJECTS_LOADING  } from "../actions/actionTypes";

const initialState = {
    projects: [],
    isloading : true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.projects
            };
        case PROJECTS_LOADING:
            return {
                ...state,
                isloading: action.isloading
            };
         
        default:
            return state; 
    }
};

export default reducer;