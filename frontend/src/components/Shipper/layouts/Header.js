import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/imgs/avatar.png';
import { useAuth } from '../../../data/AuthContext';

function Header() {
    document.title = "Shipper - FreightEase";

    const { backendURL, shipperData, LogoutUser } = useAuth();
    const userId = shipperData.userId;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const logOutUser = () => {
        LogoutUser();
    };

    const [orders, setShipmentData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/shipment-history/` + userId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setShipmentData(data);
            console.log('from header', data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [backendURL, userId]);

    const [showNotifyDropdown, setNotifyOpen] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

    const toggleNotifyDropdown = () => {
        setNotifyOpen(!showNotifyDropdown);
    };

    const toggleSettingsDropdown = () => {
        setShowSettingsDropdown(!showSettingsDropdown);
    };

    const renderNotify = () => {
        fetchData();
    };

    return (
        <header className="fixed top-3 fontAlt left-0 ml-6 md:left-64 right-3 mr-6 z-50 flex items-center justify-between h-20 bg-white px-4 md:px-8 xl:px-64 rounded shadow-sm border-1 border-gray-250">
            <h3 className='font6 text-2xl font-bold '>Welcome,<span className='text-primColor1 font6 tracking-wide font-semibold ml-2'>{shipperData.name}</span></h3>

            <div className="flex items-center gap-x-6">
                <button onClick={renderNotify}>
                    <div className="relative">
                        <button className="" onClick={toggleNotifyDropdown}>
                            <i className="fa-duotone fa-bell fa-lg text-primColor1"></i>
                            {orders.length > 0 && (
                                <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
                            )}
                        </button>
                        {/* Dropdown content here */}
                        {showNotifyDropdown && (
                            <div className="absolute w-[20rem] mt-2 p-2 bg-white rounded-md shadow-lg">
                                <div className='space-y-4'>
                                    {orders.length === 0 ? (
                                        <p>No orders available</p>
                                    ) : (
                                        <ul>
                                            {orders.map((order) => (
                                                <div key={order._id} className="bg-blue-500 text-card-foreground my-1 w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700" data-v0-t="card" >
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-1 space-y-1">
                                                            <div className="text-sm font-medium text-white tracking-wide">Order# <span className='text-lg ml-2 underline'>{order.shipmentId}</span></div>
                                                            <div className="text-sm font-medium text-white tracking-wide capitalize">Order Status: <span className='text-lg ml-2 underline'>{order.status}</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                        )}
                    </div>
                </button>

                <Link to='profile-settings' className="flex items-center justify-center text-gray-600" >
                    <i className="fa-duotone fa-gear fa-lg text-primColor1"></i>
                </Link>

                <div className="flex relative items-center border-l border-gray-400 h-8">
                    <div className="justify-end mx-3">
                        <p className="text-sm font-semibold text-end fontAlt tracking-wide">{shipperData.email}</p>
                        <p className="txtsize text-gray-600 text-end fontAlt">Shipper</p>
                    </div>
                    <div className="relative">
                        <img className="object-cover w-10 h-10 rounded-full ring ring-primColor1" src={avatar} alt="" />
                    </div>
                </div>

                {/* Carrot and Dropdown */}
                <div className="relative">
                    <button className="" onClick={toggleSettingsDropdown}>
                        <i className="fa-solid fa-caret-down fa-lg text-primColor1"></i>
                    </button>
                    {/* Dropdown content here */}
                    {showSettingsDropdown && (
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
    );
}

export default Header;
