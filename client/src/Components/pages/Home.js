import React from 'react';
import Nav from '../nav/Nav';
import Offers from '../offers/Offers';
import Section from '../section/Section';

const Home = () => {
    return (
        <div className="App">
        <Nav /> 
        <Section />
        <Offers />
      </div>
    );
};

export default Home;