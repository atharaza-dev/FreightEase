import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DTruck from '../../assets/imgs/3dtruck.png'
import orders from '../../assets/imgs/orders.png'
import quote from '../../assets/imgs/quote.png'
import qa from '../../assets/imgs/qa.png'
import poster from '../../assets/imgs/poster.png'
import { useAuth } from '../../data/AuthContext';

function VendorDashboard() {
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
                        <p class="mt-4 text-lg">FreightEase gives shippers the power to add new trucks, manage the incomming and other orders. Manage orders and streamline your shipping process with ease.</p>
                        <Link to='/' target='_blank'>
                            <button onClick={logOutUser} className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Explore Website Now</button>
                        </Link>
                    </div>
                    <div class="hidden h-90 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="" src={DTruck} alt="pic" />
                    </div>
                </div>

                <section class="mx-auto max-w-screen-xl text-gray-700">
                    <div class="mx-auto">
                        <div class="agrid-rows-[repeat(2,_minmax(1px,fit-content))]  mx-1 grid grid-cols-1 gap-6 text-center mt-6 md:h-[68rem] md:max-w-full md:grid-cols-2 md:grid-rows-5 md:text-left">

                            <div class="row-span-3 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={DTruck} alt="" className='' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Add a Vehicle</h3>
                                    <p class="mt-6 text-base">Expand your fleet effortlessly! Click here to add your vehicles and optimize your transportation solutions. Streamline your logistics with just a click.</p>
                                    <Link to='book-truck'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Add Vehicles</button>
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
                                        <img src={orders} alt="" className='w-56' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Manages Orders</h3>
                                    <p class="mt-6 text-base">Efficient order management made simple! Click here to streamline your orders and enhance your logistics operations. Simplify your process with just a click.</p>
                                    <Link to='booking-history'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Manage Orders</button>
                                    </Link>
                                </div>
                            </div>

                            <div class="row-span-2 bg-white md:px-8 flex justify-center items-center rounded-m shadow-sm border-1 border-gray-250">
                                <div class="text-center">
                                    <center>
                                        <img src={qa} alt="" className='w-32' />
                                    </center>
                                    <h3 class="text-4xl mt-4 font-semibold fontAlt">Have Queries?</h3>
                                    <p class="mt-6 text-base">Reach out to us effortlessly! Click here to get in touch and let us assist you promptly. Your queries and concerns matter to us.</p>
                                    <Link to='shipment-track'>
                                        <button className="text-primColor1 mt-4 bg-gray-100 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Contact Us</button>
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
    )
}

export default VendorDashboard