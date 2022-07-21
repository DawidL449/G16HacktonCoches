import React from 'react';

const Nav = ({ text }) => {
    return (
        <nav>
            <img src="https://firebasestorage.googleapis.com/v0/b/marketplace-64f7d.appspot.com/o/img%2FlogoMarketPlace.svg?alt=media&token=637841f3-155a-4a11-b430-10c86fd719fb" alt="" />
            <ul>
                <li>Inicio</li>
                <li>Anuncios</li>
            </ul>
            <button>{text}</button>
        </nav>
    );
};

export default Nav;