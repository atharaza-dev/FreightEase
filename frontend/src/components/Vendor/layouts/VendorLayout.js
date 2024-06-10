import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Vendor.css'
import Header from './Header';
import logo from '../../../assets/imgs/vc.png'

function VendorLayout() {
    document.title = "Vendor - FreightEase"
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                <div class="px-10 py-6 transition md:ml-60" style={{ backgroundColor: "#F1F5F9" }}>
                    <div class="mt-24  rounded h-full">
                        <Header></Header>
                        <Outlet />
                    </div>

                    <footer class="bottom-0 left-0 md:left-64 flex flex-row items-center justify-between w-full px-4 h-14 bg-white rounded shadow-sm border-1 border-gray-250 mt-6">
                        <p className='flex item-center text-gray-800 justify-center w-full tracking-wide'>Developed with <span className='px-2'><i class="fa-brands fa-react text-primColor1"></i></span> by Athar Raza</p>
                    </footer>
                </div>

            </section >
            <ToastContainer></ToastContainer>
        </>
    )
}

export default VendorLayout
