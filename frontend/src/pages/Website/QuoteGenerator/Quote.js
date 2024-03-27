import React, { useState, useEffect } from 'react';

function Quote() {
    document.title = "Quote Generator";

    const [selectedOrigin, setSelectedOrigin] = useState('');
    const [selectedDestination, setSelectedDestination] = useState('');

    const [isOpenOrigin, setIsOpenOrigin] = useState(false);
    const [isOpenDestination, setIsOpenDestination] = useState(false);

    const handleSelectOrigin = (originCity) => {
        setSelectedOrigin(originCity);
        setIsOpenOrigin(false);
    };

    const handleSelectDestination = (destinationCity) => {
        setSelectedDestination(destinationCity);
        setIsOpenDestination(false);
    };

    // Fetch API
    const [quoteData, setQuoteData] = useState([]);

    const [originCities, setOriginCities] = useState([]);
    const [formattedOriginCities, setFormattedOriginCities] = useState([]);

    const [destinationCities, setDestinationCities] = useState([]);
    const [formattedDestinationCities, setFormattedDestinationCities] = useState([]);

    useEffect(() => {
        const fetchQuoteData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/get-quote-details');
                if (!response.ok) {
                    throw new Error('Error getting data from database!');
                }
                const getQuoteData = await response.json();
                setQuoteData(getQuoteData);

                // Origin Cities
                const uniqueOriginCitiesSet = new Set(getQuoteData.map(item => item.origin));
                const uniqueOriginCitiesArray = Array.from(uniqueOriginCitiesSet);
                setOriginCities(uniqueOriginCitiesArray);
                setFormattedOriginCities([...uniqueOriginCitiesArray]);

                // Destination Cities
                const uniqueDestinationCitiesSet = new Set(getQuoteData.map(item => item.destination));
                const uniqueDestinationCitiesArray = Array.from(uniqueDestinationCitiesSet);
                setDestinationCities(uniqueDestinationCitiesArray);
                setFormattedDestinationCities([...uniqueDestinationCitiesArray]);

                console.log('Successfully Fetched Quote data from database!');
            } catch (error) {
                console.error('Error getting data from database!');
            }
        };
        fetchQuoteData();
    }, []);

    const [kgs, setKgs] = useState('');
    const kgsHandler = (e) => {
        setKgs(e.target.value);
    }
    const GenerateQuoteHandler = () => {
        if (selectedOrigin === "Multan" && selectedDestination === "Lahore") {
            alert(`The rate of weight ${kgs} is ${kgs * 2500}`);
        } else {
            alert('not ok');
        }

    }

    return (
        <>

            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>

            <div class="pt-24 txt-font">

                <div class="pt-48 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
                    <h1 className="text-3xl mb-4 font-medium fontAlt leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                        Generate a quick estimated Quote!
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-500">Here at FreightEase, you can easily get a quick estimated Quote of your future shipments to get a estimated cost of your shipment.</p>
                </div>

                <div className="flex flex-col justify-center items-center fontAlt max-w-xl mx-auto">

                    {/* Origin City Dropdown */}
                    <div className="flex items-center my-2 justify-center w-full z-20">
                        <div className="relative w-full">
                            <button
                                className="block w-full bg-slate-100 text-gray-700 tracking-wide flex-shrink-0 z-99 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-l border-r-2 border-t border-b border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
                                onClick={() => setIsOpenOrigin(!isOpenOrigin)}
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
                            {isOpenOrigin && (
                                <div className="absolute w-full mt-1 bg-gray-50 border-1 rounded-md shadow-lg">
                                    {formattedOriginCities.map((originCity, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSelectOrigin(originCity)}
                                        >
                                            {originCity}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='relative w-full'>
                            <input type="text" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-r border-t border-b border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                                placeholder="Select departure city from the list..." value={selectedOrigin} />
                        </div>
                    </div>

                    {/* Destination City Dropdown */}
                    <div className="flex items-center my-2 justify-center w-full z-10">
                        <div className="relative w-full">
                            <button
                                className="block w-full bg-slate-100 text-gray-700 tracking-wide flex-shrink-0 z-10 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-l border-r-2 border-t border-b border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
                                onClick={() => setIsOpenDestination(!isOpenDestination)}
                            >
                                Destination City
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
                            {isOpenDestination && (
                                <div className="absolute w-full mt-1 bg-gray-50 border-1 rounded-md shadow-lg">
                                    {formattedDestinationCities.map((destinationCity, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSelectDestination(destinationCity)}
                                        >
                                            {destinationCity}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='relative w-full'>
                            <input type="text" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-r border-t border-b border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                                placeholder="Select destination city from the list..." value={selectedDestination} />
                        </div>
                    </div>

                    <div className='relative w-full my-2'>
                        <input type="number" onChange={kgsHandler} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                            placeholder="Enter total Weights in TONS" />
                    </div>

                    <p className='text-red-600 text-sm my-2'>Note* : Cost may be vary due to inflation & fluctuation in Petrol Prices!</p>

                </div>

            </div>

            <div className='px-4 mx-auto max-w-screen-sm my-2 text-center fontAlt relative z-50'>
                <button onClick={GenerateQuoteHandler} className="text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Generate the Quote
                </button>
            </div>

        </>
    );
}

export default Quote;
