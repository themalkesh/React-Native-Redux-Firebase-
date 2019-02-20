import { PROFILE_UPDATE, AUTH_GETUSER, AUTH_SIGNOUT  } from '../actions/actionTypes'; 
const initialstate = {
    avatar: { uri: '' },
    name: '' ,
}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case PROFILE_UPDATE:
            return {
                ...state,
                avatar: action.avatar,
                name: action.name
            };
        case AUTH_GETUSER:
            return {
                ...state,
                email: action.user.email,
                avatar: {
                    url: action.user.photoUrl,
                },
                name: action.user.displayName
            };   
        case AUTH_SIGNOUT:
            return {
                ...state,
                email: '',
                avatar: {
                    url: '',
                },
                name: ''
            }
        default:
            return state;
    }
}

export default reducer;