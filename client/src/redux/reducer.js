import {GET_DOGS, FILTER, FILTER_LOCATION, ORDER} from './actionTypes'

const initialState = {
    dogs: [],
    dogs_modified: [],
    errores: ""
};

function reducer(state = initialState, {type, payload}){
    switch(type){
        case GET_DOGS:
            return({
                ...state,
                dogs: payload
            })
    }
}