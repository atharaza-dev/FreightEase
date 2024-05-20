import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Vendor.css'
import logo from '../../../assets/imgs/vc.png'
import avatar from '../../../assets/imgs/avatar.png'
import { useAuth } from '../../../data/AuthContext';
import { useNavigate } from 'react-router-dom';

function VendorLayout() {
    document.title = "Vendor - FreightEase"
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { LogoutUser, vendorData } = useAuth();

    const logOutUser = () => {
        LogoutUser();
        navigate('/vendor-login');
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleNotifyDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>

            <section class="min-h-screen z-99">

                <aside class="fixed top-0 left-0 fontAlt bg-white z-50 pb-8 item-center justify-center overflow-x-hidden overflow-y-auto flex flex-col w-64 h-screen px-4 py-4 shadow-sm border-r border-gray-250 ">

                    <div class="flex flex-col justify-between flex-1">
                        <nav>
                            <Link to='/vms' class="flex justify-center">
                                <img src={logo} alt="" className='w-44' />
                            </Link>

                            <Link to='/vms' className='flex items-center pl-4 py-2 mt-12 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-house-user fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Dashboard</span>
                            </Link>

                            <Link to='inbound-orders' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-layer-group fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Inbound Orders</span>
                            </Link>

                            <Link to='manage-orders' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-truck-arrow-right fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Manage Orders</span>
                            </Link>

                            <Link to='manage-vehicles' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-list-check fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Manage Vehicles</span>
                            </Link>

                            <Link to='check-quote' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-calculator fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Quote Generator</span>
                            </Link>

                            <Link to='help-vendor' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-circle-info fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Help & Support</span>
                            </Link>

                        </nav>
                        <Link to='edit-profile' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                            <i class="fa-duotone fa-gear fa-lg"></i>
                            <span class="ml-4 font-medium tracking-wide">Profile Settings</span>
                        </Link>
                    </div>
                </aside>

                <header className="fixed top-3 fontAlt left-0 ml-6 md:left-64 right-3 mr-6 z-50 flex items-center justify-between h-20 bg-white px-4 md:px-8 xl:px-64 rounded shadow-sm border-1 border-gray-250">
                    <h3 className='font6 text-2xl font-bold '>Welcome,<span className='text-primColor1 font6 tracking-wide font-semibold ml-2'>{vendorData.name}</span></h3>

                    <div className="flex items-center gap-x-6">

                        <div className="relative">
                            <button className="" onClick={toggleNotifyDropdown}>
                                <i className="fa-duotone fa-bell fa-lg text-primColor1"></i>
                            </button>
                            {/* Dropdown content here */}
                            {showDropdown && (
                                <div className="absolute max-w-[85rem] mt-2 w-48 bg-white rounded-md shadow-lg">
                                    <div className="py-1">
                                        
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to='profile-settings' className="flex items-center justify-center text-gray-600">
                            <i className="fa-duotone fa-gear fa-lg text-primColor1"></i>
                        </Link>

                        <div className="flex relative items-center border-l border-gray-400 h-8">
                            <div className="justify-end mx-3">
                                <p className="text-sm font-semibold text-end fontAlt tracking-wide">{vendorData.email}</p>
                                <p className="txtsize text-gray-600 text-end fontAlt">VENDOR</p>
                            </div>
                            <div className="relative">
                                <img className="object-cover w-10 h-10 rounded-full ring ring-primColor1" src={avatar} alt="" />
                            </div>
                        </div>

                        {/* Carrot and Dropdown */}
                        <div className="relative">
                            <button className="" onClick={toggleDropdown}>
                                <i className="fa-solid fa-caret-down fa-lg text-primColor1"></i>
                            </button>
                            {/* Dropdown content here */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                                    <div className="py-1">
                                        <Link to="edit-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                        <Link to="edit-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                        <button onClick={logOutUser} className="block w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* End Carrot and Dropdown */}

                    </div>
                </header>

                <div class="px-10 py-6 transition md:ml-60" style={{ backgroundColor: "#F1F5F9" }}>
                    <div class="mt-24  rounded h-full">
                        <Outlet />
                    </div>

                    <footer class="bottom-0 left-0 md:left-64 flex flex-row items-center justify-between w-full px-4 h-14 bg-white rounded shadow-sm border-1 border-gray-250 mt-6">
                        <p className='flex item-center text-gray-800 justify-center w-full tracking-wide'>Developed with <span className='px-2'><i class="fa-brands fa-react text-primColor1"></i></span> by Athar Raza</p>
                    </footer>
                </div>

            </section >


        </>
    )
}

export default VendorLayout
