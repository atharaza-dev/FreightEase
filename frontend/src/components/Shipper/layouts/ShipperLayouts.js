import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/imgs/sc.png'
import avatar from '../../../assets/imgs/avatar.png'

function ShipperLayouts() {
    document.title = "Shipper - FreightEase"
    return (
        <>

            <section class="min-h-screen z-99">

                <aside class="fixed top-0 left-0 fontAlt bg-white z-50 left-0 pb-8 item-center justify-center overflow-x-hidden overflow-y-auto flex flex-col w-64 h-screen px-4 py-4 shadow-sm border-r border-gray-250 ">

                    <div class="flex flex-col justify-between flex-1">
                        <nav>
                            <Link to='/shipper' class="flex justify-center">
                                <img src={logo} alt="" className='w-44' />
                            </Link>
                            <Link to='/shipper' class="flex items-center pl-4 py-2 mt-8 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-house fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Dashboard</span>
                            </Link>

                            <Link to='book-truck' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-truck-bolt fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Book a Truck</span>
                            </Link>

                            <Link to='shipment-track' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-clock-rotate-left fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Track Shipment</span>
                            </Link>

                            <Link to='booking-history' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-boxes-packing fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Booking History</span>
                            </Link>

                            <Link to='generate-quote' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-quote-left fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Generate Quote</span>
                            </Link>

                            <Link to='help' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-duotone fa-circle-info fa-lg text-primColor1"></i>
                                <span class="ml-4 font-medium">Help & Support</span>
                            </Link>

                        </nav>
                        <Link to='profile-settings' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <i class="fa-duotone fa-gear fa-lg text-primColor1"></i>
                            <span class="ml-4 font-medium">Profile Settings</span>
                        </Link>
                    </div>
                </aside>

                <header className="fixed top-2 left-0 ml-6 md:left-64 right-3 mr-6 z-50 flex items-center justify-between h-20 bg-white px-4 md:px-8 xl:px-64 rounded shadow-sm border-1 border-gray-250">
                    <h3 className='fontAlt text-2xl font-semibold '>Welcome, Customer 1</h3>
                    <div className="flex items-center gap-x-6">
                        <i class="fa-duotone fa-bell fa-lg text-primColor1"></i>
                        <Link to='profile-settings' className="flex items-center justify-center text-gray-600">
                            <i class="fa-duotone fa-gear fa-lg text-primColor1"></i>
                        </Link>

                        <div className="border-r border-gray-400 h-6"></div>

                        <div className="flex relative items-center">
                            <div className="mr-3 justify-end">
                                <p className="text-sm font-semibold text-end fontAlt">Customer 1</p>
                                <p className="txtsize text-gray-600 text-end fontAlt">SHIPPER</p>
                            </div>
                            <div className="relative">
                                <img class="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600" src={avatar} alt="" />
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
