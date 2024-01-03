import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/imgs/logo.png';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (linkId) => {
        setMenuOpen(false);
        scrollToTop();
        setActiveLink(linkId);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={`navbar px-16 py-4 md:px-24 py-4 ${scrolling ? 'scrolled' : ''}`}>
                <Link to='/' className="logoImg title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src={logo} alt="" className="nav-img" />
                </Link>

                {/* Responsive hamburger menu */}
                <div className="md:hidden ml-auto">
                    <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Links for medium and larger screens */}
                <div className="navLinks hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center gap-5 justify-center">
                    <Link to='/services' onClick={() => handleLinkClick('link1')} style={{ color: activeLink === 'link1' ? '#2563EB' : '#000' }} className="mr-3">
                        Services
                    </Link>
                    <Link to='/about-us' onClick={() => handleLinkClick('link2')} style={{ color: activeLink === 'link2' ? '#2563EB' : '#000' }} className="mr-3">
                        About Us
                    </Link>
                    <Link to='/contact-us' onClick={() => handleLinkClick('link3')} style={{ color: activeLink === 'link3' ? '#2563EB' : '#000' }} className="mr-3">
                        Contact Us
                    </Link>
                    <Link to='/help' onClick={() => handleLinkClick('link4')} style={{ color: activeLink === 'link4' ? '#2563EB' : '#000' }} className="mr-3">
                        Help
                    </Link>
                </div>

                {/* Button for medium and larger screens */}
                <Link to='/shipper-registration' className="hidden md:block">
                    <button className="text-white bg-indigo-800 border-0 py-3 px-8 focus:outline-none focus:ring active:text-indigo-500 hover:bg-indigo-600 rounded text-lg">
                        Get Started Now
                    </button>
                </Link>
            </div>

            {/* Responsive dropdown menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        <Link to='/services' onClick={() => handleLinkClick('link1')} className="text-white py-2">
                            Services
                        </Link>
                        <Link to='/about' onClick={() => handleLinkClick('link2')} className="text-white py-2">
                            About Us
                        </Link>
                        <Link to='/contact-us' onClick={() => handleLinkClick('link3')} className="text-white py-2">
                            Contact Us
                        </Link>
                        <Link to='/' onClick={() => handleLinkClick('link4')} className="text-white py-2">
                            Help
                        </Link>
                        <Link to='/CustomerReg' onClick={toggleMenu} className="text-white py-2">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
