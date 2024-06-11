import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Vendor.css'
import { useAuth } from '../../data/AuthContext';

function ManageOrders() {
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
        } catch (error) {
            toast.warning('No Inbound orders available!', {
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

    const deleteOrder = async (orderId) => {
        try {
            const response = await fetch(`${backendURL}/api/auth//del-order/${orderId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setOrderData(prevOrder => prevOrder.filter(order => order._id !== orderId));
            toast.success(responseData.msg, {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });

        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    }


    return (
        <>
            <div class="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

                <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Manage Orders</h1>

                    <section class="mx-auto w-full max-w-7xl px-2 pb-2 font1 text-white">

                        <div class="flex  space-x-4 items-end md:justify-end md:space-y-0">

                            <button onClick={refreshOrderList} class="rounded-md bg-primColor1 px-3 py-2 text-sm font-semibold text-blue-200 tracking-wide shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">
                                <span><i class="fa-duotone fa-rotate-right mr-2"></i>Refresh Order List</span>
                            </button>

                            <Link to='/vms/inbound-orders' class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white tracking-wide shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">
                                <span><i class="fa-duotone fa-arrow-up-right-from-square mr-2"></i>Check new Orders</span>
                            </Link>

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
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Status</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Payment</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Action</th>
                                    </tr>

                                    {orderData.map((order, index) => (
                                        order.status !== 'false' &&
                                        <tr key={index} className='rounded-lg'>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.shipmentDate}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.shipmentId}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.originCity} <span className='px-3'><i className="fa-duotone fa-arrow-right fa-md text-primColor1"></i></span> {order.departureCity}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.goodsType}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.itemWeight} ton(s)</td>
                                            <td className={`h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-white capitalize ${order.status === 'cancelled' ? 'bg-red-500' : order.status === 'confirmed' ? 'bg-green-600' : order.status === 'shipped' ? 'bg-yellow-400' : order.status === 'delivered' ? 'bg-emerald-500' : ''} tracking-wide`}>{order.status}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{order.amount}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  justify-center items-center lastCelWidth">
                                                <Link to={`/vms/order-details/${order._id}`} className='activeBtn mx-3'><i className="fa-duotone fa-pen fa-lg text-blue-600 "></i></Link>
                                                <button onClick={() => deleteOrder(order._id)} class='activeBtn' ><i class="fa-duotone fa-trash-can-xmark fa-lg text-red-600 "></i></button>
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

export default ManageOrders