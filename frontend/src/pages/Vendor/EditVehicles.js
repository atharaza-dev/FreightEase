import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';

function EditVehicles() {
    const { id } = useParams();
    const { backendURL } = useAuth();

    const [registration, setRegNum] = useState('');
    const regChangeHandler = (e) => {
        setRegNum(e.target.value);
    }

    const [vehicleName, setName] = useState('');
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const [originCity, setOriginCity] = useState('');
    const originChangeHandler = (e) => {
        setOriginCity(e.target.value);
    }

    const [departureCity, setDepartureCity] = useState('');
    const departureChangeHandler = (e) => {
        setDepartureCity(e.target.value);
    }

    const [routeCharges, setRouteCharges] = useState('');
    const routeChangeHandler = (e) => {
        setRouteCharges(e.target.value);
    }

    const [vehicleType, setVehicleType] = useState('');
    const vehicleChangeHandler = (e) => {
        setVehicleType(e.target.value);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/find-vehicles-data/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const { registration, vehicleName, originCity, departureCity, routeCharges, vehicleType } = data;
                setRegNum(registration);
                setName(vehicleName);
                setOriginCity(originCity);
                setDepartureCity(departureCity);
                setVehicleType(vehicleType);
                setRouteCharges(routeCharges);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const updateVehicle = async (e) => {
        e.preventDefault();

        const vehicleObj = { registration, vehicleName, originCity, departureCity, routeCharges, vehicleType };
        try {
            const response = await fetch(`${backendURL}/api/auth/update-vehicles-info/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vehicleObj)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
            toast.success('Updated Successfully!', {
                position: "top-right",
                theme: "colored",
            });
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    }

    return (
        <>
            <section className="bg-white shadow-sm rounded-md border-1 border-gray-250 h-full fontAlt p-10">

                <div class="w-full p-6">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl font-semibold">Edit Vehicles Details</h1>
                    </div>
                    <form>
                        <div class="grid sm:grid-cols-3 gap-y-7 gap-x-12">
                            <div>
                                <label htmlFor="owner" class="leading-7 text-sm text-gray-600">Vehicle Registration</label>
                                <input type="text" value={registration} onChange={regChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="cnic" class="leading-7 text-sm text-gray-600">Vehicle Name</label>
                                <input type="text" value={vehicleName} onChange={nameChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="phone" class="leading-7 text-sm text-gray-600">Vehicle Type</label>
                                <input type="text" value={vehicleType} onChange={vehicleChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className='md:col-span-2'>
                                <label htmlFor="reg" class="leading-7 text-sm text-gray-600">Origin City</label>
                                <input type="text" value={originCity} onChange={originChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="email" class="leading-7 text-sm text-gray-600">Route Fare / Charges</label>
                                <input type="number" value={routeCharges} onChange={routeChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className='md:col-span-2'>
                                <label htmlFor="email" class="leading-7 text-sm text-gray-600">Departure</label>
                                <input type="text" value={departureCity} onChange={departureChangeHandler} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="flex justify-end mt-8">
                                <button type="button" onClick={updateVehicle} class="w-24 h-10 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                                    <span><i class="fa-solid fa-floppy-disk mr-2"></i></span>Update
                                </button>
                                <Link to='/vms/manage-vehicles' class="w-24 h-10 text-center ml-4 text-sm font-semibold rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center">
                                    <span><i class="fa-solid fa-xmark mr-2"></i></span>Cancel
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default EditVehicles