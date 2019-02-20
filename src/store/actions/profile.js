 
import { API_URL } from '../../config/app';
import { API_KEY } from '../../config/app';
import { API_URL_CLOUD } from '../../config/app';
 
import { authGetUser, authSignOut, profileLoading} from './auth'

export const profileUpdate = (userData) => {
    return (dispatch, getState) => { 
        console.log(userData); 
        authToken = getState().auth.token;
        dispatch(profileLoading(true));
        if (userData.avatarbase64){
            fetch(
                API_URL_CLOUD + "/storeImage",
                {
                    method: "POST",
                    body: JSON.stringify({
                        image: userData.avatarbase64,
                        folder: 'profile'
                    }),
                    headers: {
                        Authorization: "Bearer " + authToken
                    }
                }
            ).catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
                dispatch(profileLoading(false));
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes); 
                userRequestData = {
                    idToken: getState().auth.token,
                    displayName: userData.name,
                    photoUrl: parsedRes.imageUrl
                }
                fetch(API_URL + 'setAccountInfo?key=' + API_KEY, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userRequestData)
                }).catch(err => {
                    console.log(err);
                    dispatch(profileLoading(false));
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result); 
                        if (result.error && result.error.code === 400) {
                            alert(result.error.message);
                            dispatch(authSignOut());
                        } else {
                            dispatch(authGetUser(getState().auth.token));
                        }
                        dispatch(profileLoading(false));
                    });
            });
        }else{
            userRequestData = {
                idToken: getState().auth.token,
                displayName: userData.name,
            }
            fetch(API_URL + 'setAccountInfo?key=' + API_KEY, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json' 
                },
                body: JSON.stringify(userRequestData)
            }).catch(err => {
                console.log(err);
                dispatch(profileLoading(false));
            })
            .then(res => res.json())
            .then(result => {
                console.log(result); 
                if (result.error && result.error.code === 400) {
                    alert(result.error.message);
                    dispatch(authSignOut());
                } else {
                    dispatch(authGetUser(getState().auth.token));
                }
                dispatch(profileLoading(false));
            });
        }
            
 
            
          
    }
} 