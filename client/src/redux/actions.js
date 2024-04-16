import {GET_DOGS, FILTER, FILTER_LOCATION, ORDER, ERROR} from './actionTypes'

export const getDogs = (data) => {
    return {
        type: GET_DOGS,
        payload: data
    }
}

export const filter = (payload) => {
    return {
        type: FILTER,
        payload
    }
}

export const filterCardsLocation = (payload) => {
    return {
        type: FILTER_LOCATION,
        payload
    }
}

export const orderCards = (payload) => {
    return {
        type:ORDER,
        payload
    }
}

export const getError = (payload) => {
    return {
        type: ERROR,
        payload
    }
    
}