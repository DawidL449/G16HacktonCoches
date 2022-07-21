import React from 'react';
import AsideAds from '../aside/AsideAds';
import CardsAds from './CardsAds';

const SectionAds = () => {
    return (
        <div className='section-ads'>
            <h1>Alquila tu vehículo</h1>
            <p>Todos nuestros anuncios</p>
            <div className='ads-info'>
                <AsideAds />
                <CardsAds />
            </div>
           
        </div>
    );
};

export default SectionAds;