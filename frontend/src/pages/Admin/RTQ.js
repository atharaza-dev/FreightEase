import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import quote from '../../assets/imgs/quote.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            const response = await fetch('http://localhost:5000/api/auth/manage-quote', {
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
                const response = await fetch('http://localhost:5000/api/auth/get-quote-details');
                if (!response.ok) {
                    throw new Error('Error getting data from database!');
                }
                const getQuoteData = await response.json();
                setQuoteData(getQuoteData);
                toast.success('Fetched data from database!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
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



            <div class="h-full grid grid-cols- gap-4 lg:grid-cols-3 lg:gap-8 mt-4 mb-6">
                <div class="bg-white rounded-md shadow-sm border-1 border-gray-250">

                    <div class="mx-auto max-w-screen-xl px-4 pt-6 sm:px-6 lg:px-8">
                        <div class="mx-auto max-w-lg text-center">
                            <h1 class="uppercase font-bold poppins-medium sm:text-m">Quote Managment</h1>
                        </div>

                        <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">

                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Origin Location</label>
                                <input type="text" value={origin} onChange={originChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>



                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Destination</label>
                                <input type="text" value={destination} onChange={destinationChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>


                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Rate per TON</label>
                                <input type="number" value={rate} onChange={rateChangeHandler} class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="relative mb-4">
                                <button onClick={submitQuote} class="text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-m my-3">ADD / EDIT</button>
                                <button class="text-white w-full bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-m">DELETE</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="bg-white rounded-md shadow-sm border-1 border-gray-250 lg:col-span-2">
                    <table class="w-full text-left border-1 fontAlt border-gray-300 relative overflow-x-auto rounded-md z-2 sm:rounded-md">
                        <tbody class='bg-white rounded-lg'>

                            <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Departure Location</th>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Arrival City</th>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200 last-cell-width">Rate/ton</th>
                            </tr>

                            {quoteData.map((quote) => (
                                <tr class='rounded-lg'>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.origin}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.destination}</td>
                                    <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{quote.rate}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default RTQ
