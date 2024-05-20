import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/imgs/logo.png';
import { useAuth } from '../../../data/AuthContext';
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
        <div className="">
            <div className={`navbarMain w-full mt-3 md:mx-auto md:max-w-screen`}>
                <div className={`navContainer flex items-center w-full justify-center gap-5 rounded-23 mx-6 md:mx-18 lg:mx-28 py-3 px-6 py-2  ${scrolling ? 'scrolled' : ''}`}>
                    <Link to='/' className="logoImg title-font font-medium items-center text-gray-900 md:mb-0">
                        <img src={logo} alt="" className="nav-img" />
                    </Link>

                    {/* Responsive hamburger menu */}
                    <div className="md:hidden ml-auto">
                        <button onClick={handleServicesClick} className="text-primColor2 focus:outline-none">
                            <i class="fa-duotone fa-bars fa-lg"></i>
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
                                <span className="caret">&#9662;</span>
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
            </div>

            {/* Responsive dropdown menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-45  flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        {activeLink === 'link1' && (
                            <div ref={dropdownRef} className="flex flex-col items-center">
                                <Link to='/services' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Services
                                </Link>
                                <Link to='/about-us' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    About Us
                                </Link>
                                <Link to='/quote-generator' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Quote Generator
                                </Link>
                                <Link to='/tow-service' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Tow Service
                                </Link>
                                <Link to='/vehicles-list' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Show all available List
                                </Link>
                                <Link to='/contact-us' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Contact Us
                                </Link>
                                <Link to='/help' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                                    Help and Support
                                </Link>
                                <Link to='/shipper-registration' onClick={() => handleLinkClick('link1')} className="bg-white py-2 px-2 text-primColor1 rounded-full hover:text-blue-500 py-2 px-4 my-2">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
