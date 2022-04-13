import React from 'react'
import { Link } from 'react-router-dom';

import "./header.css";

const Header = () => {
    const pathname = window.location.pathname;
    return (
        
        <div className="header full-width" style={{textAlign:"center"}}>
            {
           // <h2 class="header-2" onClick={()=>{}}>knapp</h2>
            }
            <Link to="/" style={{ textDecoration: 'none' }}><h2>start</h2> </Link>
            {
            // <Link to="first" style={{ textDecoration: 'none' }}><h2>first</h2></Link>
            }
        </div>
    )
}

export default Header
