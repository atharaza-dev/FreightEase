//* import dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom'

//* import App.css file
import './App.css';

//* importing components
import Navbar from './components/Website/Navbar/Navbar';
import NavContainer from './components/Website/Navbar/NavbarContainer';
import FooterContainer from './components/Website/Footer/FooterContainer';
import Footer from './components/Website/Footer/Footer';

// * Importing Pages
import HomePage from './pages/Website/Home Page/HomePage';
import Quote from './pages/Website/QuoteGenerator/Quote';
import ServicePage from './pages/Website/ServicesPage/ServicePage';
import AboutPage from './pages/Website/AboutPage/AboutPage';
import ContactPage from './pages/Website/ContactPage/ContactPage';
import ShipperRegistration from './pages/Website/GetStartedPage/Sign Up/Shipper Registration/ShipperRegistration';
import VendorRegistration from './pages/Website/GetStartedPage/Sign Up/Vendor Registration/VendorRegistration';
import ShipperLogin from './pages/Website/GetStartedPage/Sign In/Shipper Login/ShipperLogin';
import VendorLogin from './pages/Website/GetStartedPage/Sign In/Vendor Login/VendorLogin';
import HelpPage from './pages/Website/HelpPage/HelpPage';
import TowServicePage from './pages/Website/TowTablePage/TowServicePage';
import VehicleListPage from './pages/Website/VehicleListPage/VehicleListPage';
import VehicleFramePage from './pages/Website/VehicleListPage/VehicleFramePage';
import ErrorPage from './pages/Website/ErrorPage';
import TCPage from './pages/Website/TCPage';

// * Importing Admin Pages
import AdminLayouts from './components/Admin/layouts/AdminLayouts';
import Dashboard from './pages/Admin/Dashboard';
import Vendors from './pages/Admin/Vendors';
import Shippers from './pages/Admin/Shippers';


function App() {
  return (
    <>
      <NavContainer>
        <Navbar></Navbar>
      </NavContainer>

      <Routes>
        {/* Static frontend site */}
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-generator" element={<Quote />} />
        <Route exact path='/services' element={<ServicePage />} />
        <Route exact path='/about-us' element={<AboutPage />} />
        <Route exact path='/contact-us' element={<ContactPage />} />
        <Route exact path='/help' element={<HelpPage />} />
        <Route exact path='/shipper-registration' element={<ShipperRegistration />} />
        <Route exact path='/vendor-registration' element={<VendorRegistration />} />
        <Route exact path='/shipper-login' element={<ShipperLogin />} />
        <Route exact path='/vendor-login' element={<VendorLogin />} />
        <Route exact path='/tow-service' element={<TowServicePage />} />
        <Route exact path='/vehicles-list' element={<VehicleListPage />} />
        <Route exact path='/vehicle-frame' element={<VehicleFramePage />} />
        <Route exact path='/terms-and-conditions' element={<TCPage />} />
        <Route exact path='*' element={<ErrorPage />} />

        {/* Admin Panel Nested Routes */}
        <Route path='/admin/home' element={<div className='flex'><AdminLayouts /></div>}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='vendors' element={<Vendors />} />
          <Route path='shippers' element={<Shippers />} />
        </Route>

      </Routes>

      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>      
    </>
  );
}

export default App;
