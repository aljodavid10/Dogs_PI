import {
    Routes as Router,
    Route,
    useLocation,
    useNavigate,
  } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import Home from "../components/home/Home";
import Detail from "../components/detail/Detail";
import Form from "../components/form/Form";

export default function Routes(){
    return (
        <Router>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/form" element={<Form/>}/>
        </Router>
    )
}