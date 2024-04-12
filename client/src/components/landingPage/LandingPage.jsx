import { Link } from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage ({submit}) {


    return (
        <div className=''>
                <Link to='/home'>
                    <button className='inicio' onClick={submit}>
                        Start
                    </button>
                </Link>
        </div>
    )
}