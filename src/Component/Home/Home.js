import React from 'react';
import Header from '../Header/Header';
import Navbar from './../Navbar/Navbar';

import './Home.css';
import BusinessInfo from './../BusinessInfo/BusinessInfo';
import Appoinment from '../Appoinment/Appoinment';
import Brand from '../Brand/Brand';

const Home = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Appoinment></Appoinment>
            <Brand></Brand>
        </div>
    );
};

export default Home;