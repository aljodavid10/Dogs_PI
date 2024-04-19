import axios from "axios";
import { getDogs, getError } from "../redux/actions";
const apiUrl = import.meta.env.URL;

export default async function getRazas (dispatch){
    try {
        const response = await axios(`http://localhost:3001/dogs`);
        
        dispatch(getDogs(response.data));
        dispatch(getError(""));
    } catch (error) {
        const errorMessage = error.response.data;
        dispatch(getError(errorMessage));
    }
}