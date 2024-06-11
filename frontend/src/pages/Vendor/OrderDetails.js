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
    const [date, setDate] = useState('');
    const [shipment, setShipment] = useState('');
    const [revenue, setRevenue] = useState('');
    const [vrevenue, setvRevenue] = useState('');

    const getOrderData = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/order-details/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrderData(data);
            setDate(data.shipmentDate);
            setShipment(data.shipmentId);
            setvRevenue(data.vendorCommission);

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


    const [status, setStatus] = useState(null);
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const updateStatus = async (id) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/update-order/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) {
                throw new Error('Failed to update order status');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const serviceCharges = orderData.shipmentCharges * 0.02;

    const handleButtonClick = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/revenue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date, shipment, revenue })
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                const errorData = await response.json();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const amountStatus = 'paid';
    const updateAmount = async (id) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/update-order/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: amountStatus })
            });
            if (!response.ok) {
                throw new Error('Failed to update order status');
            }
            alert('Payment Successfull!');
            window.location.reload();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const handleVrev = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/vrevenue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date, shipment, revenue: vrevenue })
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                const errorData = await response.json();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateShipment = (id) => {
        handleButtonClick();
        updateAmount(id);
        handleVrev();
    }

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

                    <div className='bg-red-200 p-4'>
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

                    <div className='bg-blue-200 p-4'>
                        <h3 class="text-lg font-semibold text-gray-800 ">Vendor:</h3>
                        <h3 class="text-lg font-semibold text-blue-800 underline ">{orderData.vendorName}</h3>
                        <p>{orderData.vehicleName}</p>
                        <p>{orderData.vehicleType}</p>
                    </div>
                    <div class="sm:text-end space-y-2 bg-yellow-200 p-4">
                        <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Invoice date:</dt>
                                <dd class="col-span-2 text-gray-500">{orderData.shipmentDate}</dd>
                            </dl>
                            <div class="flex flex-col items-end justify-end">
                                <h4 class="text-lg font-semibold text-gray-800 ">Set Shipment Status</h4>
                                <select id="status" value={status} onChange={handleStatusChange} className="w-64 bg-yellow-400 rounded-sm border mt-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-[7px] px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option>Select Status</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="false">Pending</option>
                                </select>
                                <button onClick={() => updateStatus(id)} className='activeBtn bg-yellow-400 px-4 py-2 mt-2 rounded-lg'><i class="fa-duotone fa-arrows-rotate text-yellow-900"></i></button>
                            </div>
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
                                <dt class="col-span-3 font-semibold text-gray-800 ">Shipment Status:</dt>
                                <dd class="col-span-2 text-gray-500 capitalize">{orderData.status}</dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3">
                                <dt class="col-span-3 font-semibold text-gray-800 ">Amount Status:</dt>
                                <dd class="col-span-2 text-gray-500 capitalize">{orderData.amount}</dd>
                            </dl>

                            <div class="grid sm:grid-cols-5">
                                <div className='col-span-3'></div>
                                <div className='col-span-2 mt-4'>
                                    {orderData.amount !== 'paid' && (
                                        <>
                                            <button onClick={() => updateShipment(orderData._id)} class="activeBtn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                                <i class="fa-duotone fa-credit-card fa-lg mr-2"></i>Pay Now
                                            </button>
                                            <p className='text-red-600 tracking-wide text-sm mt-2'>Note*: Payment is Cash only!</p>
                                        </>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <p class="mt-5 text-sm text-gray-500">© 2024 FreightEase.</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default OrderDetails