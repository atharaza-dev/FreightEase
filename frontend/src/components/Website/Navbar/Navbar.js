import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/imgs/logo.png';
import { useAuth } from '../../../store/AuthContext';
function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const dropdownRef = useRef(null);

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleServicesClick = () => {
        setActiveLink(activeLink === 'link1' ? null : 'link1');
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (linkId) => {
        scrollToTop();
        setActiveLink(linkId);
        setMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="container mx-auto">
            <div className={`navbar  rounded-23 w-full mx-20 mt-3 py-3 md:mx-24 md:max-w-screen-xl px-6 py-2 ${scrolling ? 'scrolled' : ''}`}>
                <Link to='/' className="logoImg title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={logo} alt="" className="nav-img" />
                </Link>

                {/* Responsive hamburger menu */}
                <div className="md:hidden ml-auto">
                    <button onClick={handleServicesClick} className="text-gray-900 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Links for medium and larger screens */}
                <div className="navLinks hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center gap-5 justify-center">
                    <div className="relative group">
                        <button
                            onClick={handleServicesClick}
                            style={{ color: activeLink === 'link1' ? '#2563EB' : '#4A5568' }}
                            className="mr-3 text-gray-200 focus:outline-none"
                        >
                            Services
                            <span className="caret">&#11183;</span>
                        </button>
                        {menuOpen && (
                            <div ref={dropdownRef} className="absolute bg-white w-[300px] mt-2 p-2 px-4 rounded-md shadow-md">
                                <Link to='/services' className="block text-gray-800 hover:text-blue-500 py-2 px-4 border-b border-gray-300" onClick={() => handleLinkClick('link1')}>
                                    Services
                                </Link>
                                <Link to="/quote-generator" className="block text-gray-800 hover:text-blue-500 py-2 px-4 border-b border-gray-300" onClick={() => handleLinkClick('link1')}>
                                    Quote Generator
                                </Link>
                                <Link to='/tow-service' className="block text-gray-800 hover:text-blue-500 py-2 px-4 border-b border-gray-300" onClick={() => handleLinkClick('link1')}>
                                    Tow Service
                                </Link>
                                <Link to='/vehicles-list' className="block text-gray-800 hover:text-blue-500 py-2 px-4" onClick={() => handleLinkClick('link1')}>
                                    Show all Vehicles
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to='/about-us'
                        onClick={() => handleLinkClick('link2')}
                        style={{ color: activeLink === 'link2' ? '#2563EB' : '#4A5568' }}
                        className="mr-3"
                    >
                        About Us
                    </Link>
                    <Link
                        to='/contact-us'
                        onClick={() => handleLinkClick('link3')}
                        style={{ color: activeLink === 'link3' ? '#2563EB' : '#4A5568' }}
                        className="mr-3"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to='/help'
                        onClick={() => handleLinkClick('link4')}
                        style={{ color: activeLink === 'link4' ? '#2563EB' : '#4A5568' }}
                        className="mr-3"
                    >
                        Help
                    </Link>
                </div>

                {/* toggling the logout and login button */}
                {isLoggedIn ? (<Link
                    to='/logout'
                    className="hidden md:block text-white bg-indigo-600 border-1 border-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                    Log Out
                </Link>) : (
                    <Link
                        to='/shipper-registration'
                        className="hidden md:block text-white bg-indigo-600 border-1 border-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                        Get Started Now
                    </Link>
                )}
            </div>

            {/* Responsive dropdown menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        <Link to='/services' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                            Services
                        </Link>
                        {activeLink === 'link1' && (
                            <div ref={dropdownRef} className="flex flex-col items-center">
                                <Link to='/service1' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Service 1
                                </Link>
                                <Link to='/service2' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Service 2
                                </Link>
                                <Link to='/service3' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Service 3
                                </Link>
                            </div>
                        )}
                        <Link to='/about' onClick={() => handleLinkClick('link2')} className="text-white py-2">
                            About Us
                        </Link>
                        <Link to='/contact-us' onClick={() => handleLinkClick('link3')} className="text-white py-2">
                            Contact Us
                        </Link>
                        <Link to='/' onClick={() => handleLinkClick('link4')} className="text-white py-2">
                            Help
                        </Link>
                        <Link to='/CustomerReg' onClick={handleServicesClick} className="text-white py-2">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
