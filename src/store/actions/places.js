import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';
export const addPlace = (placeName) => {
    return {
        type:ADD_PLACE,
        placeName : placeName
    };
}; 

export const deletePlace = (key) => {
    return {
        type:DELETE_PLACE,
        placeKey: key
    }
}

export const selectPlace = (place) => {
    return {
        type : SELECT_PLACE,
        place: place
    }
}

export const deselectPlace = () => {
    return {
        type : DESELECT_PLACE
    }
}
