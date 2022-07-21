import React, { useState } from 'react';
import NavCreateAds from '../nav/NavCreateAds';
import HeaderForm from '../header/HeaderForm'
import AdsForm from '../form/AdsForm'
import FooterForm from '../footer/FooterForm';
const CreateAds = () => {    

    return (
        <div className='App'>
            <NavCreateAds />
            <HeaderForm />            
            <AdsForm />
            <FooterForm />
        </div>
    );
};

export default CreateAds;