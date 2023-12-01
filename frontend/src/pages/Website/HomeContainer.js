// import dependencies
import React from 'react';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'

// importing components
import Navbar from '../../components/Website/Navbar/Navbar';
import NavContainer from '../../components/Website/Navbar/NavbarContainer';
import FooterContainer from '../../components/Website/Footer/FooterContainer';
import Footer from '../../components/Website/Footer/Footer';

// importing pages
import HomePage from './Home Page/HomePage';
import Quote from './QuoteGenerator/Quote';
import ServicePage from './ServicesPage/ServicePage';
import AboutPage from './AboutPage/AboutPage';
import ContactPage from './ContactPage/ContactPage';
import ShipperRegistration from './GetStartedPage/Sign Up/Shipper Registration/ShipperRegistration';
import VendorRegistration from './GetStartedPage/Sign Up/Vendor Registration/VendorRegistration';
import ShipperLogin from './GetStartedPage/Sign In/Shipper Login/ShipperLogin';
import VendorLogin from './GetStartedPage/Sign In/Vendor Login/VendorLogin';


const HomeContainer = () => {
    return (
        <>
            <Main >

                <NavContainer>
                    <Navbar></Navbar>
                </NavContainer>

                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/quote-generator' element={<Quote />} />
                    <Route exact path='/services' element={<ServicePage />} />
                    <Route exact path='/about-us' element={<AboutPage />} />
                    <Route exact path='/contact-us' element={<ContactPage />} />
                    <Route exact path='/shipper-registration' element={<ShipperRegistration />} />
                    <Route exact path='/vendor-registration' element={<VendorRegistration />} />
                    <Route exact path='/shipper-login' element={<ShipperLogin />} />
                    <Route exact path='/vendor-login' element={<VendorLogin />} />
                </Routes>

                <FooterContainer>
                    <Footer></Footer>
                </FooterContainer>

            </Main>
        </>
    );
}

export default HomeContainer;
