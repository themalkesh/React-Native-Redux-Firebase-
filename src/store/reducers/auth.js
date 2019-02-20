import { AUTH_LOGIN, AUTH_REGISTER, AUTH_FORGOTPASSWORD, AUTH_GETUSER, AUTH_SIGNOUT, AUTH_AUTOLOGIN, PROFILE_LOADING } from '../actions/actionTypes'; 
import { AsyncStorage } from 'react-native';
const initialstate = {
    user : null,
    refreshToken:'',
    token: '',
    profileLoading : '',
}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state, 
                profileLoading: action.profileLoading
            };
        case AUTH_LOGIN:
            return {
                ...state,
                token: action.token,
                refreshToken: action.refreshToken,
            };
        case AUTH_REGISTER:
            return {
                ...state,
            };    
        case AUTH_FORGOTPASSWORD:
            return {
                ...state,
            };   
        case AUTH_GETUSER:
            return {
                ...state,
                user: action.user,
                token: action.token,
                refreshToken: action.refreshToken,
            };    
        case AUTH_AUTOLOGIN:
            return {
                ...state,
                user: state.user,
                token: action.token,
                refreshToken: action.refreshToken,
            }; 
        case AUTH_SIGNOUT:
            return {
                ...state,
                user: null,
                refreshToken: '',
                token: '',
            }; 
        
        default:
            return state;
    }
}

export default reducer;