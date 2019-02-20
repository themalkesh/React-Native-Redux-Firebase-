import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actionTypes'; 
const initialstate = {
    placename: '',
    places: [],
    selectedPlace: {},
    modalVisible: "false" 
}
const reducer = (state = initialstate, action) => {
    switch(action.type){
        case  ADD_PLACE :
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.placeName,
                    image: {
                        uri: 'https://pbs.twimg.com/profile_images/1024527853143109633/_20ka2aA_400x400.jpg'
                    }
                })
            };
        case DELETE_PLACE : 
            return {
                ...state,
                places: state.places.filter((place) => {
                    return action.placeKey !== place.key;
                })
            }
        case SELECT_PLACE : 
            return {
                ...state,
                selectedPlace: action.place,
                modalVisible: true
            }
        case DESELECT_PLACE: 
            return {
                ...state,
                modalVisible: false
            }
        default : 
            return state;
    }
}

export default reducer;