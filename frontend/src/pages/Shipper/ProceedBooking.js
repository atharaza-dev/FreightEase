import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';

function ProceedBooking() {
    
    const { id } = useParams();
    const { backendURL, shipperData } = useAuth();
    const userId = shipperData.userId;

    const [bookingData, setBookingData] = useState({
        vehicleId: '',
        vendorId: '',
        vendorName: '',
        cnic: '',
        phone: '',
        originCity: '',
        departureCity: '',
        goodsType: '',
        goodsQuantity: '',
        vehicleType: '',
        routeCharges: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/proceed-booking/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBookingData({
                    vehicleId: data._id,
                    vendorId: data.userId,
                    vendorName: data.vendorName,
                    cnic: data.registration,
                    phone: data.phone,
                    originCity: data.originCity,
                    departureCity: data.departureCity,
                    vehicleName: data.vehicleName,
                    vehicleType: data.vehicleType,
                    routeCharges: data.routeCharges,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id, backendURL]);

    const [name, setName] = useState('');
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const [cnic, setCnic] = useState('');
    const cnicChangeHandler = (e) => {
        setCnic(e.target.value);
    }

    const [phone, setPhone] = useState('');
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const [fulloriginCity, setOriginCity] = useState('');
    const originChangeHandler = (e) => {
        setOriginCity(e.target.value);
    }

    const [fulldepartureCity, setDepartureCity] = useState('');
    const departureChangeHandler = (e) => {
        setDepartureCity(e.target.value);
    }

    const [goodsType, setGoodsType] = useState('');
    const gTChangeHandler = (e) => {
        setGoodsType(e.target.value);
    }

    const [goodsQuantity, setgoodsQuantity] = useState('');
    const gQChangeHandler = (e) => {
        setgoodsQuantity(e.target.value);
    }

    const [itemWeight, setitemWeight] = useState('');
    const itemWeightChangeHandler = (e) => {
        setitemWeight(e.target.value);
    }

    function generateShipmentId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
    const shipmentId = `FE-FYP-${generateShipmentId()}`;
    const [isLoading, setIsLoading] = useState(false);

    const checkoutBooking = async (e) => {
        e.preventDefault();

        const bookingDataObj = {
            vehicleId: bookingData.vehicleId,
            vendorId: bookingData.vendorId,
            shipmentId,
            userId,
            fullName: name,
            cnic,
            phone,
            originCity: bookingData.originCity,
            fullOriginAddress: fulloriginCity,
            departureCity: bookingData.departureCity,
            fullDepartureAddress: fulldepartureCity,
            goodsType,
            goodsQuantity,
            vendorName: bookingData.vendorName,
            vehicleType: bookingData.vehicleType,
            vehicleName: bookingData.vehicleName,
            routeFare: bookingData.routeCharges * itemWeight,
            itemWeight,
        };

        try {
            const response = await fetch(`${backendURL}/api/auth/book-vehicles`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingDataObj)
            })

            if (response.status === 422) {
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
            } else if (response.status === 201) {
                setIsLoading(true);
                setTimeout(() => {
                    console.log('Booking checked out successfully');
                    toast.success('Vehicle Booked Successfully', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setIsLoading(false);
                }, 3000);
            } else {
                return toast.error('An error occured!', {
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
            console.log(error);
            toast.error('Internal Server Error!', {
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

    return (
        <>
            <div className="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2 pb-6 p-4">
                <h1 className="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Proceed Booking...</h1>

                <div className="w-full p-6">
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-7 gap-x-12">
                            <div>
                                <label htmlFor="owner" className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" value={name} onChange={nameChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="cnic" className="leading-7 text-sm text-gray-600">CNIC</label>
                                <input type="text" value={cnic} onChange={cnicChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                <input type="text" value={phone} onChange={phoneChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-1 pointer-events-none">
                                <label htmlFor="origin" className="leading-7 text-sm text-gray-600">Pickup City</label>
                                <input type="text" value={bookingData.originCity} readOnly className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="arrival" className="leading-7 text-sm text-gray-600">Full Pickup Address</label>
                                <input type="text" value={fulloriginCity} onChange={originChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-1 pointer-events-none">
                                <label htmlFor="origin" className="leading-7 text-sm text-gray-600">DropOff City</label>
                                <input type="text" value={bookingData.departureCity} readOnly className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="arrival" className="leading-7 text-sm text-gray-600">Full DropOff Address</label>
                                <input type="text" value={fulldepartureCity} onChange={departureChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="arrival" className="leading-7 text-sm text-gray-600">Goods Type</label>
                                <input type="text" value={goodsType} onChange={gTChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="arrival" className="leading-7 text-sm text-gray-600">Goods Quanity</label>
                                <input type="number" value={goodsQuantity} onChange={gQChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="arrival" className="leading-7 text-sm text-gray-600">Items / Goods Weight <span>in TONs</span></label>
                                <input type="number" value={itemWeight} onChange={itemWeightChangeHandler} className="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="sm:col-span-3">
                                <div className="flex justify-end space-x-8 mt-4">

                                    {/* <button type="button" onClick={checkoutBooking} className="w-28 h-10 text-sm font-semibold tracking-wide rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                                        <span><i className="fa-duotone fa-cart-shopping mr-2"></i></span>CheckOut
                                    </button> */}

                                    <button
                                        type="button"
                                        onClick={checkoutBooking}
                                        className="w-32 h-10 text-sm font-semibold tracking-wide rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none"
                                        disabled={isLoading} // Disable the button when loading
                                    >
                                        {isLoading ? ( // Show loader when loading
                                            <span className="flex items-center justify-center">
                                                <i className="animate-spin fa-duotone fa-spinner mr-2"></i>
                                                Booking...
                                            </span>
                                        ) : ( // Show normal button content when not loading
                                            <span>
                                                <i className="fa-duotone fa-cart-shopping mr-2"></i>
                                                CheckOut
                                            </span>
                                        )}
                                    </button>

                                    <Link to='/sms/book-truck' className="activeBtn w-24 h-10 text-center ml-4 text-sm font-semibold rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center">
                                        <span><i className="fa-solid fa-xmark mr-2"></i></span>Cancel
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default ProceedBooking;
