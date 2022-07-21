import React from 'react';
import Nav from '../nav/Nav';
import CardsAds from '../section/CardsAds';
import SectionAds from '../section/SectionAds';

const Ads = () => {
    return (
        <div className="App">
           <Nav text="Crear Anuncio"/>
           <SectionAds />          

        </div>
    );
};

export default Ads;