import logo from '../../assets/imgs/ogo.png'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
import { useAuth } from '../../data/AuthContext';

function BookingDetails() {
    const { backendURL } = useAuth();
    const { id } = useParams();

    const [orderData, setshipmentData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/booking-details/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setshipmentData(data);
                toast.success('Fetched data from database!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
                console.log('from xxxx', data);
            } catch (error) {
                toast.error('Failed to fetch data from database!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
            }
        };

        fetchData();
    }, []);
    return (
        <div className='w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2 p-4'>
            {orderData.map((booking, index) => (
                <div key={index} class="flex flex-col p-4 sm:p-10">

                    <div class="flex justify-between">
                        <div>
                            <img src={logo} alt="err" className='w-20' />
                        </div>

                        <div class="text-end">
                            <span class="mt-1 block text-gray-500">Invoice ID</span>
                            <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 ">{booking.shipmentId}</h2>
                        </div>

                    </div>

                    <div class="mt-12 grid sm:grid-cols-3 gap-3">

                        <div className='bg-red-200 p-4'>
                            <h3 class="text-lg font-semibold text-gray-800 ">Shipped to:
                                <span className='text-primColor1'> {booking.originCity}<i class="fa-duotone fa-arrow-right mx-2"></i>{booking.departureCity}</span>
                            </h3>
                            <h3 class="text-lg font-semibold text-gray-800">{booking.fullName}</h3>
                            <address class="mt-2 not-italic text-gray-500">
                                {booking.fullOriginAddress}
                            </address>
                            <i class="fa-duotone fa-arrow-down"></i>
                            <address class="mt-2 not-italic text-gray-500">
                                {booking.fullDepartureAddress}
                            </address>
                        </div>

                        <div className='bg-blue-200 p-4'>
                            <h3 class="text-lg font-semibold text-gray-800 ">Vendor:</h3>
                            <h3 class="text-lg font-semibold text-blue-800 underline ">{booking.vendorName}</h3>
                            <p>{booking.vehicleName}</p>
                            <p>{booking.vehicleType}</p>
                        </div>
                        <div class="sm:text-end space-y-2 bg-yellow-200 p-4">
                            <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 ">Invoice date:</dt>
                                    <dd class="col-span-2 text-gray-500">{booking.shipmentDate}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                            <div class="hidden sm:grid sm:grid-cols-5">
                                <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Route</div>
                                <div class="text-start text-xs font-medium text-gray-500 uppercase">Weight</div>
                                <div class="text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
                                <div class="text-end text-xs font-medium text-gray-500 uppercase">Charges</div>
                            </div>

                            <div class="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                <div class="col-span-full sm:col-span-2">
                                    <p class="font-medium text-gray-800 ">  <span className='text-primColor1'> {booking.originCity}<i class="fa-duotone fa-arrow-right mx-2"></i>{booking.departureCity}</span></p>
                                </div>
                                <div>
                                    <p class="text-gray-800 ">{booking.itemWeight}</p>
                                </div>
                                <div>
                                    {<p class="text-gray-800 ">{booking.routeFare}</p>
                                    }
                                </div>
                                <div>
                                    <p class="sm:text-end text-gray-800 ">Rs {booking.shipmentCharges}/-</p>
                                </div>
                            </div>

                            <div class="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

                        </div>
                    </div>
                    <div class="mt-8 flex sm:justify-end">
                        <div class="w-full max-w-2xl sm:text-end space-y-2">

                            <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 ">Subtotal:</dt>
                                    <dd class="col-span-2 text-gray-500">Rs {booking.shipmentCharges}/-</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 ">Total:</dt>
                                    <dd class="col-span-2 text-gray-500">Rs {booking.shipmentCharges}/-</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800 ">Service Charges:</dt>
                                    <dd class="col-span-2 text-gray-500">Rs {booking.shipperCommission}/-</dd>
                                </dl>

                                <dl class="grid sm:grid-cols-5 gap-x-3">
                                    <dt class="col-span-3 font-semibold text-gray-800">Shipment Status:</dt>
                                    <dd class="col-span-2 text-gray-500 capitalize">{booking.status}</dd>
                                </dl>

                                <div class="grid sm:grid-cols-5">
                                    <div className='col-span-3'></div>
                                    <div className='col-span-2 mt-4'>
                                        {booking.status === 'delivered' && (
                                            <button class=" w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Pay Delivery Charges Now
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-5 text-sm text-gray-500">© 2024 FreightEase.</p>
                </div>
            ))}

        </div>
    )
}

export default BookingDetails