import React from 'react';
import './style.css';

const NavBar = () => {
    return ( <div className="navBar">
        <div className="logo">Logo</div>
        {/* kad nije ulogovan */}
        <div className="userLogin-wrapper">
            <button>Sign In</button>
            <button>Sign Up</button>
        </div>
        {/* kad je ulogovan */}
        <div className="userInfo-wrapper">
            <button>Settings</button>
            <span>Welcome, $John Doe$</span>
        </div>
    </div> );
}
 
export default NavBar;