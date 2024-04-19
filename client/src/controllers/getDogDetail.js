import axios from "axios";
import { getError } from "../redux/actions";

export default async function getDogDetail(id, dispatch){
    try {
        const respuesta = await axios(`http://localhost:3001/dogs/${id}`)

        return respuesta.data
    } catch (error) {
        const errorMessage = error.response.data
        dispatch(getError(errorMessage));
        alert(errorMessage)
    }
}