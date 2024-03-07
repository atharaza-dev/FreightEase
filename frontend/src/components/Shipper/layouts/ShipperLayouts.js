import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/imgs/sc.png'
import avatar from '../../../assets/imgs/avatar.png'
import { useAuth } from '../../../data/AuthContext';

function ShipperLayouts() {
    document.title = "Shipper - FreightEase"

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { LogoutUser } = useAuth();

    const logOutUser = () => {
        LogoutUser();
    }
    return (
        <>

            <section class="min-h-screen z-99">

                <aside class="fixed top-0 left-0 fontAlt bg-white z-50 left-0 pb-8 item-center justify-center overflow-x-hidden overflow-y-auto flex flex-col w-64 h-screen px-4 py-4 shadow-sm border-r border-gray-250 ">

                    <div class="flex flex-col justify-between flex-1">
                        <nav>
                            <Link to='/sms' class="flex justify-center">
                                <img src={logo} alt="" className='w-44' />
                            </Link>

                            <Link to='/sms' className='flex items-center pl-4 py-2 mt-8 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-house fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Dashboard</span>
                            </Link>

                            <Link to='book-truck' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-truck-ramp-box fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Book a Truck</span>
                            </Link>

                            <Link to='shipment-track' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-globe-pointer fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Track Shipment</span>
                            </Link>

                            <Link to='booking-history' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-rectangle-history fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Booking History</span>
                            </Link>

                            <Link to='generate-quote' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-calculator fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Generate Quote</span>
                            </Link>

                            <Link to='help-shipper' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                                <i class="fa-duotone fa-circle-info fa-lg"></i>
                                <span class="ml-4 font-medium tracking-wide">Help & Support</span>
                            </Link>


                        </nav>
                        <Link to='edit-shipper-info' className='flex items-center pl-4 py-2 mt-3 rounded-md transition-colors duration-300 transform text-gray-800 hover:bg-primColor1 hover:text-white'>
                            <i class="fa-duotone fa-gear fa-lg"></i>
                            <span class="ml-4 font-medium tracking-wide">Profile Settings</span>
                        </Link>
                    </div>
                </aside>

                <header className="fixed top-3 left-0 ml-6 md:left-64 right-3 mr-6 z-50 flex items-center justify-between h-20 bg-white px-4 md:px-8 xl:px-64 rounded shadow-sm border-1 border-gray-250">
                    <h3 className='fontAlt text-2xl font-semibold tracking-wide'>Welcome to SHIPPER Panel</h3>

                    <div className="flex items-center gap-x-6">

                        <i class="fa-duotone fa-bell fa-lg text-primColor1"></i>
                        <Link to='profile-settings' className="flex items-center justify-center text-gray-600">
                            <i class="fa-duotone fa-gear fa-lg text-primColor1"></i>
                        </Link>
                        <button onClick={logOutUser}>
                            <i class="fa-duotone fa-power-off fa-lg text-primColor1"></i>
                        </button>

                        {/* <div className="border-r border-gray-400 h-8"></div> */}

                        <div className="flex relative items-center border-l border-gray-400 h-8">
                            <div className="justify-end mx-3">
                                <p className="text-sm font-semibold text-end fontAlt">Ashhad Apparel</p>
                                <p className="txtsize text-gray-600 text-end fontAlt">Shipper</p>
                            </div>
                            <div className="relative">
                                <img class="object-cover w-10 h-10 rounded-full ring ring-primColor1" src={avatar} alt="" />
                            </div>
                        </div>
                    </div>

                </header>


                <div class="px-10 py-6 transition md:ml-60" style={{ backgroundColor: "#F1F5F9" }}>
                    <div class="mt-20  rounded h-full">
                        <Outlet />
                    </div>

                    <footer class="bottom-0 left-0 md:left-64 flex flex-row items-center justify-between w-full px-4 h-14 bg-white rounded shadow-sm border-1 border-gray-250 mt-10">
                        <p className='flex item-center text-gray-800 justify-center w-full tracking-wide'>Developed with <span className='px-2'><i class="fa-brands fa-react text-primColor1"></i></span> by Athar Raza</p>
                    </footer>
                </div>

            </section >

        </>
    )
}

export default ShipperLayouts
