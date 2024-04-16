import {GET_DOGS, FILTER, FILTER_LOCATION, ORDER, ERROR} from './actionTypes'

const initialState = {
    dogs: {
        dogs: [],
        dogs_default: []
    },
    errors: ""
};

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case GET_DOGS:
            return({
                ...state,
                dogs: {
                    dogs: payload,
                    dogs_default: payload
                }
            })
        case FILTER:
            const temperamentFilter = state.dogs.dogs_modified.filter(
                (dog) => {
                    return dog.temperament.some(
                        temperament => temperament === payload
                    )
                }
            )
        case FILTER_LOCATION:
            const locationFiltered = state.dogs.dogs_default.filter(dog => dog.location === payload);
            
            return {
                ...state,
                dogs: {
                    dogs:locationFiltered,
                    dogs_default:state.dogs.dogs
                }
            };
            case ORDER:
                const orderedDogs = [...state.dogs.dogs];
                console.log(orderedDogs)
    
                orderedDogs.sort((a, b) => {
                    if (payload === 'ascendenteID') 
                        return a.id - b.id;
                    else if(payload === 'descendenteID')
                        return b.id - a.id;
                    else if (payload === 'ascendenteWeight') 
                        return a.weight - b.weight;
                    else if(payload === 'descendenteWeight')
                        return b.weight - a.weight;
                });
                return {
                    ...state,
                    dogs: {
                        dogs:orderedDogs,
                        dogs_default:state.dogs.dogs_default
                    }
                };
        case "ERROR":
            return {
                ...state,
                errors: payload
            };
        default:
            return state;
    }
}