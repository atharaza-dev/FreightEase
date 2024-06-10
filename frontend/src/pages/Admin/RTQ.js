import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import quote from '../../assets/imgs/quote.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';

function RTQ() {
    const [origin, setOrigin] = useState('');
    const originChangeHandler = (e) => {
        setOrigin(e.target.value);
    }
    const [destination, setDestination] = useState('');
    const destinationChangeHandler = (e) => {
        setDestination(e.target.value);
    }
    const [rate, setRate] = useState('');
    const rateChangeHandler = (e) => {
        setRate(e.target.value);
    }

    const { backendURL } = useAuth();

    const submitQuote = async (e) => {
        e.preventDefault();

        const quoteObj = { origin, destination, rate };
        console.table(quoteObj);


        if (!origin || !destination || !rate) {
            return toast.warn('Enter all details first!', {
                position: "top-center",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        try {
            const response = await fetch(`${backendURL}/api/auth/manage-quote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(quoteObj)

            });

            if (response.status === 409) {
                toast.error('Quote with these details already exists!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else if (response.status === 201) {
                toast.success('Quote Added Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored",
                });
                setOrigin('');
                setDestination('');
                setRate('');
            } else {
                toast.error('Error Occurred. Please try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored",
                });
            }
        } catch (error) {
            toast.error('Error Occurred. Please try again!', {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        }
    }

    const [quoteData, setQuoteData] = useState([]);
    useEffect(() => {
        const fetchQuoteData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/get-quote-details`);
                if (!response.ok) {
                    throw new Error('Error getting data from database!');
                }
                const getQuoteData = await response.json();
                setQuoteData(getQuoteData);
            } catch (error) {
                toast.error('Error getting data from database!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
            }
        }
        fetchQuoteData();
    }, []);

    //deleting specific quote data
    const deleteQuoteData = async (quoteID) => {
        try {
            const response = await fetch(`${backendURL}/api/auth//del-quote/${quoteID}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setQuoteData(prevQuote => prevQuote.filter(quote => quote._id !== quoteID));
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
            <div class="flex items-center justify-between bg-white px-8 text-white shadow-sm rounded-lg border-1">
                <div class="my-10 lg:my-8 lg:w-1/2">
                    <h1 class="text-8xl font-bold fontAlt tracking-wide text-primColor1">Quote</h1>
                    <p class="mt-2 text-lg text-gray-700">Manages the Quote generator inputs like Destination, Departure and the routes rates.</p>
                </div>
                <div class="hidden h-22 w-1/2 flex-shrink-0 justify-end lg:flex">
                    <img class="w-40" src={quote} alt="pic" />
                </div>
            </div>

            <div class="w-full overflow-x-auto fontAlt rounded-lg shadow-sm border-1 mt-4 border-gray-250">

                <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

                    <div class="flex items-center justify-between">

                        <div class="mx-auto w-full pt-2">

                            <form action="" class="flex mx-auto w-full justify-between space-x-4">

                                <div class="relative w-full flex flex-col">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Origin Location</label>
                                    <input type="text" value={origin} onChange={originChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div class="relative w-full flex flex-col">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Destination</label>
                                    <input type="text" value={destination} onChange={destinationChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div class="relative w-full flex flex-col">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Rate per TON</label>
                                    <input type="number" value={rate} onChange={rateChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div class="relative flex items-end justify-center">
                                    <button onClick={submitQuote} class="text-white w-full text-sm bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"><span><i class="fa-solid fa-plus"></i></span>ADD</button>
                                </div>

                            </form>
                        </div>

                    </div>

                    {/* table */}
                    <div class="mt-7 overflow-x-auto">
                        <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                            <tbody class='bg-white rounded-lg'>

                                <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                    <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Departure City</th>
                                    <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Arrival City</th>
                                    <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Rate per TON</th>
                                    <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Action</th>
                                </tr>

                                {quoteData.map((quote) => (
                                    <tr className='rounded-lg'>
                                        <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.origin}</td>
                                        <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.destination}</td>
                                        <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.rate}</td>
                                        <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center new-last-cell-width">
                                            <button onClick={() => deleteQuoteData(quote._id)} class='bg-red-500 py-2 px-4 rounded mx-1 hover:bg-red-600' ><i class="fa-duotone fa-trash-can-xmark text-white "></i></button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <ToastContainer></ToastContainer>
        </>
    )
}

export default RTQ
