import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminPage.css'
import avatar from '../../assets/imgs/sil.png'
import DTruck from '../../assets/imgs/3dtruck.png'
import shipper from '../../assets/imgs/shipper.png'
import quote from '../../assets/imgs/quote.png'
import cash from '../../assets/imgs/cash.png'
import poster from '../../assets/imgs/poster.png'
import truckkkk from '../../assets/imgs/truckkkk.png'
import sales from '../../assets/imgs/sales.png'
import users from '../../assets/imgs/users.png'
import { useAuth } from '../../data/AuthContext';


function Dashboard() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = 'none';
            setLoading(false);
        }, 2000);
    }

    const { LogoutUser, backendURL } = useAuth();
    const logOutUser = () => {
        LogoutUser();
        window.location.href = '/';
    }

    // getting shipper Data:
    const [shipperData, setShipperData] = useState([]);
    //? fetching data from DB
    useEffect(() => {
        const fetchShipperData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/shippers-info`);
                if (!response.ok) {
                    throw new Error('Error getting data from database!');
                }
                const getShipperData = await response.json();
                setShipperData(getShipperData);
                toast.success('Successfully Connected to Database!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "light",
                });
            } catch (error) {
                toast.error('Error connecting to database!', {
                    position: "top-right",
                    autoClose: 2000,
                    theme: "light",
                });
            }
        }
        fetchShipperData();
    }, []);

    // getting vendors Data:
    const [vendorData, setVendorData] = useState([]);
    useEffect(() => {
        const fetchVendorData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/vendors-info`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVendorData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchVendorData();
    }, []);

    return (
        !loading && (
            <>
                <div class="flex items-center bg-gradient-to-r from-blue-600 to-fuchsia-500 px-8 text-white shadow-md rounded border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                        <h1 class="text-4xl fontAlt tracking-wide">Good to see you back!</h1>
                        <p class="mt-4 text-lg">FreightEase empowers administrators with comprehensive vendor and shipper management capabilities, streamlining the quote generation process for shipping goods.</p>
                        <Link to='/' target='_blank'>
                            <button onClick={logOutUser} className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Explore Website Now</button>
                        </Link>
                    </div>
                    <div class="hidden h-60 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="" src={avatar} alt="pic" />
                    </div>
                </div>

                <div class="px-1 mt-4 my-2 fontAlt">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div class=" flex flex-col justify-center bg-white rounded shadow-sm border-1 border-gray-250 px-6 py-4">
                            <div class="flex items-center justify-start w-16 h-16">
                                <img src={truckkkk} alt="err" />
                            </div>
                            <div class="">
                                <p class="text-[49px] font5 font-semibold text-primColor1">{vendorData.length}</p>
                                <p class="text-gray-600 text-md">VENDOR Counter</p>
                            </div>
                        </div>

                        <div class=" flex flex-col justify-center bg-white rounded shadow-sm border-1 border-gray-250 px-6 py-4">
                            <div class="flex items-center justify-start w-16 h-16">
                                <img src={users} alt="err" />
                            </div>
                            <div class="">
                                <p class="text-[49px] font5 font-semibold text-primColor1">{shipperData.length}</p>
                                <p class="text-gray-600 text-md">SHIPPER Counter</p>
                            </div>
                        </div>

                        <div class=" flex flex-col justify-center bg-white rounded shadow-sm border-1 border-gray-250 px-6 py-4">
                            <div class="flex items-center justify-start w-16 h-16">
                                <img src={sales} alt="err" />
                            </div>
                            <div class="">
                                <p class="text-[49px] font5 font-semibold text-primColor1">$25250</p>
                                <p class="text-gray-600 text-md">Revenue Generated Counter</p>
                            </div>
                        </div>

                    </div>
                </div>

                <section class="mx-auto max-w-screen-xl text-gray-700">
                    <div class="mx-auto">
                        <div class="agrid-rows-[repeat(2,_minmax(1px,fit-content))]  mx-1 grid grid-cols-1 gap-6 text-center mt-6 md:h-[68rem] md:max-w-full md:grid-cols-2 md:grid-rows-5 md:text-left">

                            <div class="row-span-3 bg-white md:px-8 flex justify-center items-center rounded shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={DTruck} alt="" className='' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">VENDOR CONNECT</h3>
                                    <p class="mt-6 text-base">Click now to explore and access the comprehensive VENDORS details, empowering
                                        you to efficiently oversee and control their data.</p>
                                    <Link to='vendors'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Explore VENDORS Now</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-2 bg-white md:px-8 flex justify-center items-center rounded shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={quote} alt="" className='w-28' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Quote Generator</h3>
                                    <p class="mt-6 text-base">Click now to explore and access the comprehensive Quote Generator details, empowering
                                        you to efficiently oversee and control their data.</p>
                                    <Link to='quote'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Manage Quote Now</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-3 bg-white md:px-8 flex justify-center items-center rounded shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={shipper} alt="" className='w-56' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">SHIPPER CONNECT</h3>
                                    <p class="mt-6 text-base">Click now to explore and access the comprehensive SHIPPER details, empowering
                                        you to efficiently oversee and control their data.</p>
                                    <Link to='shippers'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Explore SHIPPERS Now</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-2 bg-white md:px-8 flex justify-center items-center rounded shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={cash} alt="" className='w-48' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Revenue Stream</h3>
                                    <p class="mt-6 text-base">Click now to explore and access the comprehensive Revenue Streams details, empowering
                                        you to efficiently oversee and control their data.</p>
                                    <Link to='revenue'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Manage Revenue Streams</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div class="my-10 mx-auto w-full flex flex-col-reverse rounded border bg-gray-700 py-10 px-4 text-center sm:px-10 lg:flex-row lg:text-left">
                    <div class="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[40rem]">
                        <img class="h-full w-full object-contain" src={poster} alt="" />
                    </div>
                    <div class="lg:pl-10">
                        <h1 class="mt-8 text-4xl font-bold fontAlt text-white md:text-5xl md:leading-snug">
                            Subscribe to our <br class="hidden sm:block" />
                            Newsletter and Services
                        </h1>
                        <p class="mt-4 text-lg fontAlt text-white">Subscribe to our newsletter for exclusive updates and dive deeper into our premium services for an enhanced experience. Join us on a journey of discovery!!</p>
                        <div class="mt-16 flex flex-col rounded-md border bg-white sm:flex-row">
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter e-mail' />
                            <button class="m-2 shrink-0 rounded-md bg-red-600 px-8 py-3 font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none">Get Now</button>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </>
        )
    );
}

export default Dashboard;
