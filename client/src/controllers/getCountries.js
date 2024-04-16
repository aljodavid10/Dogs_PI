import axios from "axios";

export default async function getCountries (dispatch) {
    try {
        const response = await axios("http://localhost:3001/countries")

        return response.data;
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(getError(errorMessage));
    }
}