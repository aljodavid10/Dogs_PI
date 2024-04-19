import axios from "axios";
import { getDogs, getError } from "../redux/actions";

export default async function searchController(query, dispatch){
    try {
        const response = await axios(`http://localhost:3001/dogs/search?name=${query}`);
        
        if(response){
            dispatch(getDogs(response.data));
        }else
            throw new Error(`No se encontro ${query}`);
    } catch (error) {
        const errorMessage = error.response.data
        dispatch(getError(errorMessage));
        alert(errorMessage)
    }
}