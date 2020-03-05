import React from 'react';
import selfie from '../../../Assets/selfie.jpg';
import './Header.css';
const Header=(props)=>{
return<div className="Header">
        <img className="HeImg" src={selfie} />
        <h4 className="HeH4">AeChat</h4>

    <div className="HeHamBurger">
         <div className="HeStroke"></div>
         <div className="HeStroke"></div>
         <div className="HeStroke"></div>
    </div>  
</div>
}

export default Header;