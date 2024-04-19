import axios from "axios";
import { getError } from "../redux/actions";

export default async function postDog(dog, dispatch){
    try {
        const created = await axios.post("http://localhost:3001/dogs", dog)

        if(created)
            return "Guardado con exito" 
    } catch (error) {
        const errorMessage = error.response.data
        console.log(errorMessage)
        dispatch(getError(errorMessage));
    }
}