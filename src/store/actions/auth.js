import { AUTH_LOGIN, AUTH_REGISTER, AUTH_FORGOTPASSWORD, AUTH_GETUSER, AUTH_SIGNOUT, AUTH_AUTOLOGIN, PROFILE_LOADING } from './actionTypes';
import { API_URL} from '../../config/app';
import { API_KEY } from '../../config/app';
import { AsyncStorage } from 'react-native';

export const authGetAutoUser = () => {
    return {
       
        type: AUTH_AUTOLOGIN
    }
}

export const profileLoading = (status) => {
    return {
        type: PROFILE_LOADING,
        profileLoading: status
    };
}




export const authSignOut = () => {
    
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("refreshToken");
    return {
        type: AUTH_SIGNOUT  
    }
}

export const authGetUser = (token) => {
    return dispatch => {
        userData = { 
            idToken : token
        }
        console.log('authGetUser'); 
        fetch(API_URL + 'getAccountInfo?key=' + API_KEY, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).catch(err => {
            console.log(err);
        })
        .then(res => res.json()) 
        .then(result => {
            console.log(result); 
                if (result.error && result.error.code === 400) {
                    alert(result.error.message);
                    dispatch(authSignOut());
                } else { 
                    //console.log(result); 
                    dispatch({
                        type: AUTH_GETUSER,
                        user: result.users[0],
                        token: token
                    })
                     
                    let userToken; 
                    AsyncStorage.getItem("userToken")
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        userToken = tokenFromStorage;
                        let refreshToken; 
                        AsyncStorage.getItem("refreshToken")
                        .catch(err => reject())
                        .then(refreshTokenFromStorage => {
                            refreshToken = refreshTokenFromStorage;
                            dispatch({
                                type: AUTH_LOGIN,
                                token: userToken,
                                refreshToken: refreshToken,
                            });
                        }); 
                    }); 
                }
            });
    }

}

export const authForgotPassword = forgotData => {
    return dispatch => {
        forgotData.requestType = "PASSWORD_RESET";
        fetch(API_URL + 'getOobConfirmationCode?key=' + API_KEY, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(forgotData)
        }).catch(err => {
            console.log(err);
        })
        .then(res => res.json())
        .then(result => {
            if (result.error && result.error.code === 400) {
                alert(result.error.message);
            } else {
                console.log(result);             
            }
        });
    }
}

export const authSignUp = signUpData => {
    return dispatch => {
        signUpData.returnSecureToken = true;
        fetch(API_URL + 'signupNewUser?key=' + API_KEY, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signUpData)
             })
            .catch(err => {
                console.log(err);
            })
            .then(res => res.json()) 
            .then(result => {
                if (result.error && result.error.code === 400 ) {
                    alert(result.error.message);
                } else {
                    // AsyncStorage.setItem('userToken', result.idToken)
                    // dispatch({
                    //     type: AUTH_REGISTER,        
                    // })
                }
            });
            
    }
}; 

export const authLogin = loginData => {
    return dispatch => {
        loginData.returnSecureToken = true;
        fetch(API_URL + 'verifyPassword?key=' + API_KEY, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .catch(err => {
            console.log(err);
        }) 
        .then(res => res.json())
        .then(result => {
            if (result.error && result.error.code === 400) {
                alert(result.error.message);
            } else {
                //console.log(result);
                AsyncStorage.setItem('userToken', result.idToken);
                AsyncStorage.setItem('refreshToken', result.refreshToken);
                dispatch({
                    type: AUTH_LOGIN,
                    token: result.idToken,
                    refreshToken: result.refreshToken,
                });
                dispatch(authGetUser(result.idToken));
            }
        });
    }
};