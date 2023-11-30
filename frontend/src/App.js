// import dependencies
import React from 'react';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'

// import App.css file
import './App.css';

// importing components
import Navbar from './components/Website/Navbar/Navbar';
import NavContainer from './components/Website/Navbar/NavbarContainer';
import FooterContainer from './components/Website/Footer/FooterContainer';
import Footer from './components/Website/Footer/Footer';

// importing pages
import HomePage from './pages/Website/Home Page/HomePage';
import Quote from './pages/Website/QuoteGenerator/Quote';
import ServicePage from './pages/Website/ServicesPage/ServicePage';
import AboutPage from './pages/Website/AboutPage/AboutPage';
import ContactPage from './pages/Website/ContactPage.js/ContactPage';
import ShipperRegistration from './pages/Website/GetStartedPage/Sign Up/Shipper Registration/ShipperRegistration';
import VendorRegistration from './pages/Website/GetStartedPage/Sign Up/Vendor Registration/VendorRegistration';
import ShipperLogin from './pages/Website/GetStartedPage/Sign In/Shipper Login/ShipperLogin';
import VendorLogin from './pages/Website/GetStartedPage/Sign In/Vendor Login/VendorLogin';


function App() {
  return (
    <>
      <Main >

        <NavContainer>
          <Navbar></Navbar>
        </NavContainer>

        <Routes>

          {/* Web Application Routes */}
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

export default App;
