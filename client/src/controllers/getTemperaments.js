import axios from "axios";

export default async function getTemperaments (dispatch){
    try {
        const response = await axios("http://localhost:3001/temperaments")

        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(getError(errorMessage));
    }
}