import {GET_DOGS, FILTER, FILTER_LOCATION, ORDER} from './actionTypes'

export const getDogs = (data) => {
    return {
        type: GET_DOGS,
        payload: data
    }
}

export const filterCards = (temperament) => {
    return {
        type: FILTER,
        payload:temperament
    }
}

export const filterCardsLocation = (gender) => {
    return {
        type: FILTER_LOCATION,
        payload:gender
    }
}

export const orderCards = (orden) => {
    return {
        type:ORDER,
        payload:orden
    }
}