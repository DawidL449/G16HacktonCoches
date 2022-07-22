import React from 'react';
import Nav from '../nav/Nav';
import Offers from '../offers/Offers';
import Section from '../section/Section';
import FooterForm from '../footer/FooterForm';

const Home = () => {
    return (
        <div className="App">
        <Nav text="Crear Anuncio"/> 
        <Section />
        <Offers />
        <FooterForm />
      </div>
    );
};

export default Home;