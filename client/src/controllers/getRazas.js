import axios from "axios";
const apiUrl = process.env.URL

export default async function getRazas (){
    const response = await axios(`${apiUrl}/dogs`);
    
    
}