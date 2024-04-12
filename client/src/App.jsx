import './App.css'
import {
  Routes as Router,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import { useEffect, useState } from 'react';
import Nav from './components/navBar/Nav';

function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const submit = (acceso) => {
      if(acceso)
          setAccess(acceso);
          access && navigate('/home');
  }

  useEffect(()=>{
      !access && navigate('/')
  },[access])
  
  return (
    <div>
       {pathname !== "/" && <Nav/>}
       <Router>
            <Route path="/" element={<LandingPage LandingPage={submit}/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/form" element={<Form/>}/>
        </Router>
    </div>
  )
}

export default App
