import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ text }) => {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => isActive ? "" : ""}> <img src="https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/img%2FlogoMarketPlace.svg?alt=media&token=637841f3-155a-4a11-b430-10c86fd719fb" alt="" /></NavLink>           
            <ul>
                <li>
                    <NavLink 
                        to="/"
                        className={({isActive}) => isActive ? "active" : ""}>Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/anuncios" className={({isActive}) => isActive ? "active" : ""}>Anuncios</NavLink>
                </li>
            </ul>

            <NavLink to="/crearanuncio"><button>{text}</button></NavLink> 
            
        </nav>
    );
};

export default Nav;