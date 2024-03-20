import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quote() {
    document.title = "Quote Generator";

    const [SelectedOrigin, setSelectedOrigin] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const originCity = [];

    const handleSelectOption = (originCity) => {
        setSelectedOrigin(originCity);
        setIsOpen(false);
    };


    // Fetch API
    const [quoteData, setQuoteData] = useState([]);
    const [originCities, setOriginCities] = useState([]);
    const [formattedOriginCities, setFormattedOriginCities] = useState([]);

    useEffect(() => {
        const fetchQuoteData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/get-quote-details');
                if (!response.ok) {
                    throw new Error('Error getting data from database!');
                }
                const getQuoteData = await response.json();
                setQuoteData(getQuoteData);
                console.table(quoteData);

                const originCities = getQuoteData.map(item => item.origin);
                setOriginCities(originCities);
                setFormattedOriginCities([...originCities]);

                console.log('Successfully Fetched Quote data from database!');
            } catch (error) {
                console.error('Error getting data from database!');
            }
        }
        fetchQuoteData();
    }, []);

    // console.table(originCities);
    // console.table(formattedOriginCities);

    return (
        <>
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>

            <div id="quote" class="py-24 txt-font h-screen">
                {/* Tittle */}
                <div class="pt-40 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="text-3xl mb-4 font-medium fontAlt leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                        Generate a quick estimated Quote!
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-500">Here at FreightEase, you can easily get a quick estimated Quote of your future shipments to get a estimated cost of your shipment.</p>
                </div>

                {/* Quote Form Input */}
                <div className='flex flex-col justify-center items-center fontAlt max-w-xl mx-auto'>

                    {/* DropDown 1 */}
                    <div className="flex items-center justify-center w-full">
                        <div className="relative w-full">
                            <button
                                className="block w-full bg-slate-200 text-gray-700 tracking-wide flex-shrink-0 z-10 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-l border-r-2 border-t border-b border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Origin City
                                <span className="ml-1">
                                    <svg
                                        className={`w-2.5 h-2.5 ml-2.5`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </span>
                            </button>
                            {isOpen && (
                                <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
                                    {formattedOriginCities.map((originCity, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSelectOption(originCity)}
                                        >
                                            {originCity}
                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>
                        <div className='relative w-full'>
                            <input
                                type="text"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-r border-t border-b border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                                placeholder="Select departure city from the list..."
                                value={setSelectedOrigin}
                                readOnly
                            />
                        </div>

                    </div>

                </div>

            </div>

            <ToastContainer></ToastContainer>
        </>
    )
}

export default Quote


