import {GET_DOGS, FILTER, FILTER_LOCATION, ORDER, PAGE, ERROR} from './actionTypes'

const initialState = {
    page: 1,
    dogs: {
        dogs: [],
        dogs_modified: [],
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
                    dogs_modified: payload,
                    dogs_default: payload
                }
            })
        case FILTER:
            const temperamentFilter = payload==="All" ? 
                state.dogs.dogs_modified : 
                state.dogs.dogs_modified.filter(
                    (dog) => {
                        return dog.temperament.some(
                            temperament => temperament === payload
                        )}
                )
            return({
                ...state,
                dogs: {
                    dogs: temperamentFilter,
                    dogs_modified:state.dogs.dogs_default,
                    dogs_default:state.dogs.dogs_default
                }
            })
        case FILTER_LOCATION:
            let locationFiltered;
            locationFiltered = payload==="All" ? 
                state.dogs.dogs_default : 
                state.dogs.dogs_modified.filter(dog => dog.location === payload);
            return {
                ...state,
                dogs: {
                    dogs:locationFiltered,
                    dogs_modified:state.dogs.dogs_default,
                    dogs_default:state.dogs.dogs_default
                }
            };
        case ORDER:
            const orderedDogs = [...state.dogs.dogs];
            console.log(orderedDogs)

            orderedDogs.sort((a, b) => {
                if (payload === 'ascendenteID') 
                    return String(a.id).localeCompare(String(b.id));
                else if(payload === 'descendenteID')
                    return String(b.id).localeCompare(String(a.id));
                else if (payload === 'ascendenteWeight') 
                    return Number(a.weight.split(" ")[0]) - Number(b.weight.split(" ")[0]);
                else if(payload === 'descendenteWeight')
                    return Number(b.weight.split(" ")[0]) - Number(a.weight.split(" ")[0]);
            });
            return {
                ...state,
                dogs: {
                    dogs:orderedDogs,
                    dogs_modified: state.dogs.dogs_default,
                    dogs_default:state.dogs.dogs_default
                }
            };
        case "PAGE":
            return {
                ...state,
                page:payload
            }

        case "ERROR":
            return {
                ...state,
                errors: payload
            };
        default:
            return state;
    }
}