import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import truckk from '../../assets/imgs/3dtruck.png'
import flatbed from '../../assets/imgs/flatbed2.png'
import halfbody from '../../assets/imgs/halfbody.png'
import container2 from '../../assets/imgs/container2.png'
import mazda from '../../assets/imgs/mazda.png'
import shahzore from '../../assets/imgs/shahzore.png'
import pickup from '../../assets/imgs/pickup.png'
import { useAuth } from '../../data/AuthContext';

function ManageVehicles() {

    const { backendURL, vendorData } = useAuth();

    const userId = vendorData.userId;
    const vendorName = vendorData.name;

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

    // const [vehicleType, setVehicleType] = useState('');
    // const vehicleChangeHandler = (e) => {
    //     setVehicleType(e.target.value);
    // };

    const [selectedOption, setSelectedOption] = useState({ value: '', imgUrl: '' });

    const vehicleChangeHandler = (event) => {
        if (event.target.checked) {
            setSelectedOption({ value: event.target.value, imgUrl: event.target.dataset.imgurl });
        }
    };

    let vehicleType = selectedOption.value;
    let imgUrl = selectedOption.imgUrl;

    //! form submit function
    const submitHandler = async (e) => {
        e.preventDefault();

        const vehicleObj = { userId, vehicleName, registration, vendorName, originCity, departureCity, routeCharges, vehicleType, imgUrl };
        console.table(vehicleObj);
        if (!registration || !vehicleName || !originCity || !departureCity || !routeCharges || !vehicleType || !imgUrl) {
            return toast.warning('Fill all the details first!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        try {
            const response = await fetch(`${backendURL}/api/auth/insert-vehicles`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(vehicleObj),
            });

            if (response.status === 400) {
                return toast.error('This Registered Vehicle Type with these routes already exists!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else if (response.status === 201) {
                toast.success('Vehicle Added Successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.table(vehicleObj);
            } else {
                return toast.error('Error Inserting a new Vehicle', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            return toast.error('Error Occured, Try Again Later!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    //! getting all data from DB
    const [vehicleData, setVehicleData] = useState([]);
    const refreshDB = async () => {
        try {
            const response = await fetch(`${backendURL}/api/auth/get-vehicles-data/` + userId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setVehicleData(data);
        } catch (error) {
            toast.error('Failed to fetch data from database!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        refreshDB();
    }, []);

    //!deleting vehicle
    const deleteVehicle = async (id) => {
        try {
            const response = await fetch(`${backendURL}/api/auth/delete-vehicles-data/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete data!');
            }

            // Filter out the deleted item from the state
            setVehicleData(prevData => prevData.filter(item => item._id !== id));

            toast.success('Data deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        } catch (error) {
            toast.error('Error deleting data!', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        }
    };


    return (
        <>
            <div class="flex items-center justify-between bg-white px-8 my-4 text-white shadow-sm rounded-lg border-1">
                <div class="my-10 lg:my-8 lg:w-1/2">
                    <h1 class="text-6xl font-bold fontAlt tracking-wide text-primColor1">Vehicles</h1>
                    <p class="mt-2 text-lg text-gray-700">Vehicles Managment manages the Vehicles Insertion, Deletion and Updations of Vehicles and its Routes.</p>
                </div>
                <div class="hidden h-42 w-1/1 flex-shrink-0 justify-end lg:flex">
                    <img class="" src={truckk} alt="pic" />
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 fontAlt">

                <div class="h-full rounded bg-white rounded-m shadow-sm border-1 border-gray-250">
                    <h1 className='p-3 bg-slate-200 text-slate-700 border-b border-slate-600 tracking-wide'>Vehicle Insertion Form</h1>

                    <div className='items-center justify-center px-4 py-8'>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Vehicle Registration</label>
                            <input onChange={regChangeHandler} type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Vehicle Name</label>
                            <input onChange={nameChangeHandler} type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Origin City</label>
                            <input onChange={originChangeHandler} type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Departure City</label>
                            <input onChange={departureChangeHandler} type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-2">
                            <label class="leading-7 text-sm text-gray-600">Route Fare</label>
                            <input onChange={routeChangeHandler} type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <button onClick={submitHandler} class=" activeBtn text-white w-full tracking-wide bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm my-3">
                                <span><i class="fa-solid fa-plus mr-2"></i>ADD Vehicles</span>
                            </button>
                            <button class=" activeBtn text-white w-full tracking-wide bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-sm">
                                <span><i class="fa-solid fa-xmark mr-2"></i>Cancel Vehicle Insertion</span>
                            </button>
                        </div>
                        <p className='text-sm text-slate-700'><span className='text-red-700 mr-1'>*</span>If don't want to add Vehicle, click on CANCEL button.</p>
                    </div>


                </div>

                <div class="h-full space-y-4 fontAlt">
                    <h1 className='p-3  bg-slate-200 text-slate-70 border-b border-slate-600 tracking-wide'>Select Vehicle Type</h1>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div className="h-full bg-white rounded shadow-sm border-1 border-gray-250">
                            <div className="flex flex-col items-center space-x-4 my-2 py-2">
                                <label htmlFor="option1" className="cursor-pointer flex flex-col items-center">
                                    <img src={pickup} alt="err" className="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="Pickup" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333754/c3e2teojpke66ldsttnh.png" name="vehicle" className="w-4 h-4" />
                                <span className="fontAlt tracking-wide uppercase mt-2">pickup</span>
                            </div>
                        </div>

                        <div class="h-full bg-white rounded shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={shahzore} alt="err" class="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="Shahzore" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333754/j7pcjdgpznn0ifrdgq0k.png" name="vehicle" className="w-4 h-4 mt-3" />
                                <span className="fontAlt tracking-wide uppercase mt-2">Shahzore</span>
                            </div>
                        </div>

                    </div>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={mazda} alt="err" class="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="Mazda" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333754/j7pcjdgpznn0ifrdgq0k.png" name="vehicle" className="w-4 h-4" />
                                <span className="fontAlt tracking-wide uppercase mt-2">Mazda</span>
                            </div>
                        </div>

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={container2} alt="err" class="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="Container" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333753/prmds0kefhabbuurrqev.png" name="vehicle" className="w-4 h-4" />
                                <span className="fontAlt tracking-wide uppercase mt-2">Container</span>
                            </div>
                        </div>

                    </div>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={halfbody} alt="err" class="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="HalfBody" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333753/f2xlzucliqsitxhpihxu.png" name="vehicle" className="w-4 h-4" />
                                <span className="fontAlt tracking-wide uppercase mt-2">HalfBody</span>
                            </div>
                        </div>

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={flatbed} alt="err" class="w-40" />
                                </label>
                                <input onChange={vehicleChangeHandler} type="radio" value="Flatbed" data-imgurl="https://res.cloudinary.com/dc0ucgjhq/image/upload/v1714333753/wdqykfdztbk4qmk5kbzv.png" name="vehicle" className="w-4 h-4" />
                                <span className="fontAlt tracking-wide uppercase mt-2">Flatbed</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="w-full h-full overflow-x-auto my-4 fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250">

                <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">

                    <div className='flex items-center justify-between'>
                        <h1 class="fontAlt sm:text-4xl font-bold text-start text-primColor1">Vehicles List</h1>
                        <button onClick={refreshDB} class="text-white activeBtn tracking-wide bg-primColor1 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-sm">
                            <span><i class="fa-duotone fa-rotate-right mr-2"></i>Refresh Database</span>
                        </button>
                    </div>

                    <section class="mx-auto w-full max-w-7xl px-2 pb-2 font1 text-white">

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase tracking-wide'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Reg#</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Name</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Type</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Origin</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Arrival</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Route Fare</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200"></th>
                                    </tr>

                                    {vehicleData.map((vehicle, index) => (
                                        <tr key={index} class='rounded-lg tracking-wide'>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vehicle.registration}</td>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vehicle.vehicleName}</td>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vehicle.vehicleType}</td>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vehicle.originCity}</td>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{vehicle.departureCity}</td>
                                            <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 uppercase">{vehicle.routeCharges}</td>
                                            <td class="h-10 px-4 text-sm items-center justify-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 lastCellWidth">
                                                <Link to={`/vms/manage-vehicles/${vehicle._id}`}><i class="fa-duotone fa-pen-to-square fa-xl text-blue-700 "></i></Link>
                                                <button onClick={() => deleteVehicle(vehicle._id)}><i class="fa-duotone fa-trash-can-xmark fa-xl ml-2 text-red-700 "></i></button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>

                    </section >
                </div>

            </div >

            <ToastContainer />

        </>
    )
}

export default ManageVehicles