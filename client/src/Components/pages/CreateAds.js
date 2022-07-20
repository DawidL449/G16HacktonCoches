import React from 'react';
import NavCreateAds from '../nav/NavCreateAds';
import HeaderForm from '../header/HeaderForm'
import AdsForm from '../form/AdsForm'

const CreateAds = () => {
    return (
        <div className='App'>
            <NavCreateAds />
            <HeaderForm />
            <h2 className='beforeTitle'>Datos de tu anuncio</h2>
            <AdsForm />
            <div className='buttons'>
                <button class="backButton" type='button'>Volver</button>
                <button type='button'>Publicar</button>
            </div>
        </div>
    );
};

export default CreateAds;