import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage () {
    const submit = (acceso) => {

    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    if(acceso)
        setAccess(acceso);
        access && navigate('/home');
    }

    useEffect(()=>{
        !access && navigate('/')
    },[access])

    return (
        <div className=''>
            {pathname !== "/" && <Nav onSearch = {onSearch} onLoadHome/>}
        </div>
    )
}