import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Ads from '../Components/pages/Ads';
import CreateAds from '../Components/pages/CreateAds';
import Home from '../Components/pages/Home';

const Router = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/anuncios' element={<Ads />} />
                <Route path='/crearanuncio' element={<CreateAds />} />
                <Route path='*' element={<h1> Error 404 </h1>} />
            </Routes>
        
        </BrowserRouter>
    );
};

export default Router;