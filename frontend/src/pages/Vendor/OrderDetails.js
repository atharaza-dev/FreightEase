import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';
import logo from '../../assets/imgs/ogo.png'

function OrderDetails() {
    const { backendURL, vendorData } = useAuth();
    const { id } = useParams();

    const [orderData, setOrderData] = useState([]);

    const getOrderData = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/order-details/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrderData(data);
            toast.success('Fetched data from database!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        } catch (error) {
            toast.error('Error encountered!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        getOrderData();
    }, []);

    // const updateVehicle = async (e) => {
    //     e.preventDefault();

    //     const vehicleObj = { registration, vehicleName, originCity, departureCity, routeCharges, vehicleType };
    //     try {
    //         const response = await fetch(`${backendURL}/api/auth/update-vehicles-info/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(vehicleObj)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const responseData = await response.json();
    //         console.log(responseData);
    //         toast.success('Updated Successfully!', {
    //             position: "top-right",
    //             theme: "colored",
    //         });
    //     } catch (error) {
    //         console.error('Error updating contact:', error);
    //     }
    // }

    const serviceCharges = orderData.shipmentCharges * 0.02;

    return (
        <div className='w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2 p-4'>
            <div class="flex flex-col p-4 sm:p-10">

                <div class="flex justify-between">
                    <div>
                        <img src={logo} alt="err" className='w-20' />
                    </div>

                    <div class="text-end">
                        <span class="mt-1 block text-gray-500">Invoice ID</span>
                        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 ">{orderData.shipmentId}</h2>
                    </div>

                </div>

                <div class="mt-12 grid sm:grid-cols-3 gap-3">

                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 ">Shipped to:
                            <span className='text-primColor1'> {orderData.originCity}<i class="fa-duotone fa-arrow-right mx-2"></i>{orderData.departureCity}</span>
                        </h3>
                        <h3 class="text-lg font-semibold text-gray-800">{orderData.fullName}</h3>
                        <address class="mt-2 not-italic text-gray-500">
                            {orderData.fullOriginAddress}
                        </address>
                        <i class="fa-duotone fa-arrow-down"></i>
                        <address class="mt-2 not-italic text-gray-500">
                            {orderData.fullDepartureAddress}
                        </address>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 ">Vendor:</h3>
                        <h3 class="text-lg font-semibold text-blue-800 underline ">{orderData.vendorName}</h3>
                        <p>{orderData.vehicleName}</p>
                        <p>{orderData.vehicleType}</p>
                    </div>

                    <div class="sm:text-end space-y-2">

                        <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Invoice date:</dt>
                                <dd class="col-span-2 text-gray-500">{orderData.shipmentDate}</dd>
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
                                <p class="font-medium text-gray-800 ">  <span className='text-primColor1'> {orderData.originCity}<i class="fa-duotone fa-arrow-right mx-2"></i>{orderData.departureCity}</span></p>
                            </div>
                            <div>
                                <p class="text-gray-800 ">{orderData.itemWeight}</p>
                            </div>
                            <div>
                                {<p class="text-gray-800 ">{orderData.routeFare}</p>
                                }                            </div>
                            <div>
                                <p class="sm:text-end text-gray-800 ">Rs {orderData.shipmentCharges}/-</p>
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
                                <dd class="col-span-2 text-gray-500">Rs {orderData.shipmentCharges}/-</dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Total:</dt>
                                <dd class="col-span-2 text-gray-500">Rs {orderData.shipmentCharges}/-</dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Service Charges:</dt>
                                <dd class="col-span-2 text-gray-500">Rs {serviceCharges}/-</dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Amount paid:</dt>
                                <dd class="col-span-2 text-gray-500">{orderData.status}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="mt-8 sm:mt-12">
                    <h4 class="text-lg font-semibold text-gray-800 ">Thank you!</h4>
                    <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                    <div class="mt-2">
                        <p class="block text-sm font-medium text-gray-800 ">freightease.com</p>
                        <p class="block text-sm font-medium text-gray-800 ">+92 321 7678097</p>
                    </div>
                </div>

                <p class="mt-5 text-sm text-gray-500">© 2024 FreightEase.</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default OrderDetails