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

    return (
        <>
            <div className="flex flex-col py-24 justify-center items-center fontAlt max-w-xl mx-auto">
                {/* Origin City Dropdown */}
                <div className="flex items-center my-2 justify-center w-full">
                    <div className="relative w-full">
                        <button
                            className="block w-full bg-slate-200 text-gray-700 tracking-wide flex-shrink-0 z-10 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-l border-r-2 border-t border-b border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
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
                            <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
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
                <div className="flex items-center my-2 justify-center w-full">
                    <div className="relative w-full">
                        <button
                            className="block w-full bg-slate-200 text-gray-700 tracking-wide flex-shrink-0 z-10 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-l border-r-2 border-t border-b border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
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
                            <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
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
            </div>
        </>
    );
}

export default Quote;
