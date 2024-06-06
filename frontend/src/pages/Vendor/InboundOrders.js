import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Vendor.css'
import { useAuth } from '../../data/AuthContext';

function InboundOrders() {
    const { backendURL, vendorData } = useAuth();

    const userId = vendorData.userId;

    const [orderData, setOrderData] = useState([]);

    const getOrderData = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/inbound-orders/` + userId);
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
            toast.error('No Inbound orders available!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        getOrderData();
    }, []);

    const refreshOrderList = () => {
        getOrderData();
    }

    const handleStatusCancel = async (orderId) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/update-order/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: 'cancelled' })
            });
            if (!response.ok) {
                throw new Error('Failed to update order status');
            }
            refreshOrderList();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };
    
    const handleStatusConfirm = async (orderId) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/update-order/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirmed' })
            });
            if (!response.ok) {
                throw new Error('Failed to update order status');
            }
            refreshOrderList();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <>
            <div class="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

                <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Inbound Orders</h1>

                    <section class="mx-auto w-full max-w-7xl px-2 pb-2 font1 text-white">

                        <div class="flex flex-col space-y-4 items-end md:justify-between md:space-y-0">

                            <button onClick={refreshOrderList} class="rounded-md bg-primColor1 px-3 py-2 text-sm font-semibold text-blue-200 tracking-wide shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">
                                <span><i class="fa-duotone fa-rotate-right mr-2"></i>Refresh Order List</span>
                            </button>

                        </div>

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Date</th>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Order ID</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Route</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Good Type</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Weight</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Action</th>
                                    </tr>

                                    {orderData.map((order, index) => (
                                        order.status !== 'cancelled' && order.status !== 'confirmed' &&
                                        <tr key={index} className='rounded-lg'>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.shipmentDate}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.shipmentId}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.originCity} <span className='px-3'><i class="fa-duotone fa-arrow-right fa-md text-primColor1"></i></span> {order.departureCity}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.goodsType}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.itemWeight} ton(s)</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  justify-center items-center last-cell-width">
                                                <button onClick={() => handleStatusCancel(order._id)} className='activeBtn bg-red-600 py-2 px-4 rounded mx-1 hover:bg-red-800' ><i className="fa-duotone fa-xmark text-white"></i></button>
                                                <button onClick={() => handleStatusConfirm(order._id)} className='activeBtn bg-blue-500 py-2 px-4 rounded mx-1 hover:bg-blue-600'><i className="fa-duotone fa-box-circle-check text-white"></i></button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>

                    </section >

                </div>

            </div >
            <ToastContainer></ToastContainer>
        </>
    )
}

export default InboundOrders