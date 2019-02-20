import { PROJECT_ADD, SET_PROJECTS, PROJECTS_LOADING } from './actionTypes';

import { API_URL_DATABASE, API_URL_CLOUD, API_KEY, API_URL } from '../../config/app';
import { AsyncStorage } from 'react-native';

export const projectLoading = (status) => {
    return {
        type: PROJECTS_LOADING,
        isloading: status
    };
}

export const addProject = (projectData) => {
    
    return (dispatch, getState) => {
        console.log(projectData);
        authToken = getState().auth.token;
        dispatch(projectLoading(true));
        if (projectData.imagebase64) { 
            fetch(
                API_URL_CLOUD + "/storeImage",
                {
                    method: "POST",
                    body: JSON.stringify({
                        image: projectData.imagebase64,
                        folder: 'projects'
                    }),
                    headers: {
                        Authorization: "Bearer " + authToken
                    }
                }
            ).catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
                dispatch(projectLoading(false));
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                userRequestData = {
                    userid: getState().auth.user.localId,
                    title: projectData.title,
                    image: parsedRes.imageUrl,
                    description: projectData.description,
                }
                fetch(API_URL_DATABASE + 'projects.json?auth=' + authToken, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userRequestData)
                }).catch(err => {
                    console.log(err);
                    dispatch(projectLoading(false));
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.error && result.error.code === 400) {
                        alert(result.error.message);
                        //dispatch(authSignOut());
                    } else {
                        dispatch(getProjects());
                    }
                    dispatch(projectLoading(false));
                });
            });
        } else {
            userRequestData = {
                userid: getState().auth.user.localId,
                title: projectData.title,
                description: projectData.description,
            }
            fetch(API_URL_DATABASE + 'projects.json?auth=' + authToken, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userRequestData)
            }).catch(err => {
                console.log(err);
                dispatch(projectLoading(false));
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.error && result.error.code === 400) {
                    alert(result.error.message);
                    // dispatch(authSignOut());
                } else {
                     dispatch(getProjects( ));
                }
                dispatch(projectLoading(false));
            });
        }
    }
};

export const getProjects = () => {
    console.log("get projects");
    return (dispatch, getState) => {
        authToken = getState().auth.token;
        console.log(getState().auth); 
        dispatch(projectLoading(true));
        fetch(
            API_URL_DATABASE + "projects.json?auth=" +
            authToken
        ).then(res => res.json())
        .then(parsedRes => {
            const projects = [];
            for (let key in parsedRes) { 
                projects.push({
                    ...parsedRes[key],
                    image: {
                        uri: parsedRes[key].image
                    }, 
                    key: key
                });
            }
            console.log(projects);
            dispatch(setProjects(projects));
            dispatch(projectLoading(false));
        })
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
            dispatch(projectLoading(false));
        });
    }
};

export const setProjects = projects => {
    return { 
        type: SET_PROJECTS,
        projects: projects
    };
};
 