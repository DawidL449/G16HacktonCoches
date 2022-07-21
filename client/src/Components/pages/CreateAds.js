import React from 'react';
import NavCreateAds from '../nav/NavCreateAds';
import HeaderForm from '../header/HeaderForm'
import AdsForm from '../form/AdsForm'
import FooterForm from '../footer/FooterForm';
const CreateAds = () => {
    return (
        <div className='App'>
            <NavCreateAds />
            <HeaderForm />
            <h2 className='beforeTitle'>Datos de tu anuncio</h2>
            <AdsForm />
            <FooterForm />
        </div>
    );
};

export default CreateAds;