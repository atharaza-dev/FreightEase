//* import dependencies
import React, { useState } from 'react';
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
import Logout from './pages/Website/Logout';

// * Importing Admin Pages
import AdminLayouts from './components/Admin/layouts/AdminLayouts';
import Dashboard from './pages/Admin/Dashboard';
import Vendors from './pages/Admin/Vendors';
import Shippers from './pages/Admin/Shippers';
import RTQ from './pages/Admin/RTQ';
import Revenue from './pages/Admin/Revenue';
import Invoice from './pages/Admin/Invoice';
import Help from './pages/Admin/Help';
import ProfileSettings from './pages/Admin/ProfileSettings';
import AdminLogin from './pages/AdminLogin';
import EditVendors from './pages/Admin/EditVendors';
import EditShipper from './pages/Admin/EditShipper';
import AdminProtectedRoute from './pages/Admin/AdminProtectedRoute';

// * Importing Shipper Panel Pages
import ShipperDashboard from './pages/Shipper/ShipperDashboard';
import ShipperLayouts from './components/Shipper/layouts/ShipperLayouts';
import TruckBooking from './pages/Shipper/TruckBooking';
import ParcelTracking from './pages/Shipper/ParcelTracking';
import BookingHistory from './pages/Shipper/BookingHistory';
import GenQuote from './pages/Shipper/GenQuote';
import ShipperHelp from './pages/Shipper/ShipperHelp';
import ShipperDetails from './pages/Shipper/ShipperDetails';
import ShipperProtectedRoute from './pages/Shipper/ShipperProtectedRoute';
import ProceedBooking from './pages/Shipper/ProceedBooking';
import ShipmentTicket from './pages/Shipper/ShipmentTicket';

//*Importing Vendor Panel Pages
import VendorLayout from './components/Vendor/layouts/VendorLayout';
import VendorDashboard from './pages/Vendor/VendorDashboard';
import InboundOrders from './pages/Vendor/InboundOrders';
import ManageOrders from './pages/Vendor/ManageOrders';
import QuoteForVendor from './pages/Vendor/QuoteForVendor';
import ManageVehicles from './pages/Vendor/ManageVehicles';
import VendorProtectedRoute from './pages/Vendor/VendorProtectedRoute'
import VendorHelp from './pages/Vendor/VendorHelp';
import EditProfile from './pages/Vendor/EditProfile';
import EditVehicles from './pages/Vendor/EditVehicles';


function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
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
          <Route path='/logout' element={<Logout />} />
          <Route exact path='*' element={<ErrorPage />} />

          {/* Admin Panel Nested Routes */}
          <Route exact path='/admin-login' element={<AdminLogin />} />
          <Route path='/ams' element={<AdminProtectedRoute Component={AdminLayouts} />}>
            <Route index element={<Dashboard />} />
            <Route path='vendors' element={<Vendors />} />
            <Route path='vendors/:id/' element={<EditVendors />} />
            <Route path='shippers' element={<Shippers />} />
            <Route path='shippers/:id/' element={<EditShipper />} />
            <Route path='quote' element={<RTQ />} />
            <Route path='revenue' element={<Revenue />} />
            <Route path='invoice' element={<Invoice />} />
            <Route path='help' element={<Help />} />
            <Route path='profile-settings' element={<ProfileSettings />} />
          </Route>

          {/* Shipper Panel Nested Routes */}
          <Route path='/sms' element={<ShipperProtectedRoute Component={ShipperLayouts} />}>
            <Route index element={<ShipperDashboard />} />
            <Route path='book-truck' element={<TruckBooking />} />
            <Route path='book-truck/:id/' element={<ProceedBooking />} />
            <Route path='shipment-track' element={<ParcelTracking />} />
            <Route path='booking-history' element={<BookingHistory />} />
            <Route path='generate-quote' element={<GenQuote />} />
            <Route path='help-shipper' element={<ShipperHelp />} />
            <Route path='shipment-successfull' element={<ShipmentTicket />} />
            <Route path='edit-shipper-info' element={<ShipperDetails />} />
          </Route>

          {/* Vendor Panel Nested Routes */}
          <Route path='/vms' element={<VendorProtectedRoute Component={VendorLayout} />}>
            <Route index element={<VendorDashboard />} />
            <Route path='inbound-orders' element={<InboundOrders />} />
            <Route path='manage-orders' element={<ManageOrders />} />
            <Route path='check-quote' element={<QuoteForVendor />} />
            <Route path='check-quote' element={<QuoteForVendor />} />
            <Route path='manage-vehicles' element={<ManageVehicles />} />
            <Route path='manage-vehicles/:id/' element={<EditVehicles />} />
            <Route path='help-vendor' element={<VendorHelp />} />
            <Route path='edit-profile' element={<EditProfile />} />
          </Route>

        </Routes>

        <FooterContainer>
          <Footer></Footer>
        </FooterContainer>
      </>
    )
  );
}

export default App;
