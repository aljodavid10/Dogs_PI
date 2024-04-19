import { Link } from 'react-router-dom';
import "./LandingPage.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import getRazas from '../../controllers/getRazas';

export default function LandingPage ({submit}) {
    const dispatch = useDispatch();
    const storeDogs = useSelector(state => state.dogs);

    useEffect(()=>{
        if(storeDogs) {
            getRazas(dispatch);
        }
    }, []);

    return (
        <div className='landingPage'>
            <div className="wrapper">
                <Link to='/home'>
                <button className='inicio' onClick={submit}>
                    🐾 EMPECEMOS 👣 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </Link>
            </div>
        </div>
    )
}