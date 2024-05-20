import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShipperPage.css'
import avatar from '../../assets/imgs/box.png'
import DTruck from '../../assets/imgs/3dtruck.png'
import history from '../../assets/imgs/history.png'
import quote from '../../assets/imgs/quote.png'
import tracking from '../../assets/imgs/tracking.png'
import poster from '../../assets/imgs/poster.png'
import flatbed from '../../assets/imgs/flatbed.png'
import truckk from '../../assets/imgs/truckk.png'
import curtain from '../../assets/imgs/curtain.png'
import { useAuth } from '../../data/AuthContext';

function ShipperDashboard() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = 'none';
            setLoading(false);
        }, 2000);
    }

    const { LogoutUser } = useAuth();
    const logOutUser = () => {
        LogoutUser();
        window.location.href = '/';
    }


    return (
        !loading && (
            <>

                <div class="flex items-center bg-gradient-to-r from-blue-600 to-fuchsia-500 px-8 text-white shadow-md rounded border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                        <h1 class="text-4xl fontAlt tracking-wide">Good to see you here!</h1>
                        <p class="mt-4 text-lg">FreightEase gives shippers the power to book trucks, track shipments, and generate quotes effortlessly. Manage vendors and streamline your shipping process with ease.</p>
                        <Link to='/' target='_blank'>
                            <button onClick={logOutUser} className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Explore Website Now</button>
                        </Link>
                    </div>
                    <div class="hidden h-60 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="" src={avatar} alt="pic" />
                    </div>
                </div>

                <section>
                    <div class="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">

                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="h-full w-full py-8 bg-white flex flex-col items-center justify-center rounded rounded-m shadow-sm border-1 border-gray-250">
                                <img src={flatbed} alt="" class='pb-4' />
                                <h1 class="py-2 text-xl font-semibold tracking-wide text-center text-gray-800 uppercase">FLATBED</h1>
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="h-full w-full py-8 bg-white flex flex-col items-center justify-center rounded rounded-m shadow-sm border-1 border-gray-250">
                                <img src={truckk} alt="" class='pb-4' />
                                <h1 class="py-2 text-xl font-semibold tracking-wide text-center text-gray-800 uppercase">Box Container</h1>
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div class="h-full w-full py-8 bg-white flex flex-col items-center justify-center rounded rounded-m shadow-sm border-1 border-gray-250">
                                <img src={curtain} alt="" class='pb-4' />
                                <h1 class="py-2 text-xl font-semibold tracking-wide text-center text-gray-800 uppercase">curtain sided</h1>
                            </div>
                        </div>


                    </div>
                </section>

                <section class="mx-auto max-w-screen-xl text-gray-700">
                    <div class="mx-auto">
                        <div class="agrid-rows-[repeat(2,_minmax(1px,fit-content))]  mx-1 grid grid-cols-1 gap-6 text-center mt-6 md:h-[68rem] md:max-w-full md:grid-cols-2 md:grid-rows-5 md:text-left">

                            <div class="row-span-3 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={DTruck} alt="" className='' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Book a Truck</h3>
                                    <p class="mt-6 text-base">Book your truck hassle-free! Click here to schedule your truck and streamline your transportation needs. Simplify your logistics with just a click.</p>
                                    <Link to='book-truck'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Book Now</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-2 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={quote} alt="" className='w-28' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Quote Generator</h3>
                                    <p class="mt-6 text-base">Get instant quotes for future shipments! Click here to generate quotes and check expected fares for your upcoming shipments. Stay informed and plan ahead with ease.</p>
                                    <Link to='generate-quote'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Generate a Quote</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-3 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={history} alt="" className='w-56' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Previous Booking History</h3>
                                    <p class="mt-6 text-base">Retrieve your previous booking history effortlessly! Click here to explore and access comprehensive details of your past bookings, empowering you to stay informed and in control.</p>
                                    <Link to='booking-history'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">See Previous Bookings</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-2 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={tracking} alt="" className='w-48' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Track your Shipment</h3>
                                    <p class="mt-6 text-base">Track your shipment now to explore and access comprehensive revenue stream details. Empower yourself to efficiently oversee and control your data. Click here to get started!</p>
                                    <Link to='shipment-track'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Track Shipment</button>
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
            </>

        )
    );
}

export default ShipperDashboard;
