import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './AdminPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';

function Vendors() {
    const [vendorData, setVendorData] = useState([]);
    const { backendURL } = useAuth();
    
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
                toast.error('Fetched data from database!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
            }
        }
        fetchVendorData();
    }, []);

    // ? Deleting Data
    const deleteVendorData = async (vendorId) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/del-vendors-info/${vendorId}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setVendorData(prevVendor => prevVendor.filter(vendor => vendor._id !== vendorId));
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
            <section className="overflow-hidden">

                <div class="flex items-center justify-between bg-white px-8 text-white shadow-sm rounded-lg border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                    <h1 class="fontAlt sm:text-6xl mb-4 font-bold text-start text-gray-900"><span className='text-primColor1'>VENDORS</span></h1>
                        <p class="mt-2 text-lg text-gray-700">Vendors : Total number of registered vendors as users</p>
                    </div>
                    <div class="hidden h-42 w-1/1 flex-shrink-0 justify-end lg:flex">
                        <h1 class="text-8xl font-bold font5 tracking-wide text-primColor1">{vendorData.length}</h1>
                    </div>
                </div>

                <div class="w-full overflow-x-auto fontAlt rounded-lg shadow-sm border-1 mt-4 border-gray-250">

                    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div class="sm:flex items-center justify-between">
                            <div class="flex w-full">
                                <input class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 mr-2 sm:mr-12 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out inline-block" placeholder='Enter particular to search for vendor...' />
                            </div>
                            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:mt-0 inline-flex items-center justify-center px-6 py-2 bg-primColor1 text-white hover:bg-indigo-600 focus:outline-none rounded">
                                Search
                            </button>


                        </div>

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vendor Name</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">CNIC</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Phone</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Reg</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Email</th>
                                        {/* <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Email</th> */}
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200"></th>
                                    </tr>
                                    {vendorData.map((vendor) => (
                                        <tr key={vendor._id} className='rounded-lg'>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.name}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.cnic}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.phone}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.regNum}</td>
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.email}</td>
                                            {/* <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vendor.password}</td> */}
                                            <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                                <button onClick={() => deleteVendorData(vendor._id)} class='bg-red-500 py-2 px-4 rounded mx-1 hover:bg-red-600' ><i class="fa-duotone fa-trash-can-xmark text-white "></i></button>
                                                <Link to={`/ams/vendors/${vendor._id}`} className='bg-blue-500 py-2 px-4 rounded mx-1 hover:bg-blue-600'><i className="fa-duotone fa-edit text-white"></i></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </section >
            <ToastContainer></ToastContainer>
        </>
    );
}

export default Vendors;
