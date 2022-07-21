import React from "react";
import { NavLink } from "react-router-dom";

const NavCreateAds = () => {
    return (
        <nav>
            <NavLink to="/"> <img src="https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/img%2FlogoMarketPlace.svg?alt=media&token=637841f3-155a-4a11-b430-10c86fd719fb" alt="" /></NavLink> 
            <button type='button'>Inicio</button>
        </nav>
    );
};

export default NavCreateAds;