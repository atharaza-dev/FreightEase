import React, { useState } from 'react'
import './Quote.css';
import logo from '../../../assets/imgs/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Quote() {
    document.title = "Quote Generator";
    // Departure City
    const [selectedOption1, setSelectedOption1] = useState('');
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);
    const options1 = ['FSD', 'LHR', 'MLT', 'ISB', 'KHC'];

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setDropdownVisible1(false);
    };

    // Arrial city
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isDropdownVisible2, setDropdownVisible2] = useState(false);
    const options2 = ['FSD', 'LHR', 'MLT', 'ISB', 'KHC'];

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setDropdownVisible2(false);
    };

    // Input 4
    const [kgs, setKgs] = useState('');
    const kgsChangeHandler = (e) => {
        setKgs(e.target.value);
    };

    // Price useState
    const [price, setPrice] = useState(0);
    // Vehicle Type
    const [vehicleType, setVehicleType] = useState('');

    // Algorithm of quote Generator ....
    const quoteGenerateClick = () => {
        const quoteObj = {
            deparetureCity: selectedOption1,
            arrivalCity: selectedOption2,
            weight: kgs
        }
        const { deparetureCity, arrivalCity, weight } = quoteObj;

        if (((deparetureCity === 'FSD' && arrivalCity === 'MLT') || (deparetureCity === 'MLT' && arrivalCity === 'FSD')) ||
            ((deparetureCity === 'MLT' && arrivalCity === 'LHR') || (deparetureCity === 'LHR' && arrivalCity === 'MLT')) ||
            ((deparetureCity === 'ISB' && arrivalCity === 'LHR') || (deparetureCity === 'LHR' && arrivalCity === 'ISB')) ||
            (deparetureCity === 'ISB' && arrivalCity === 'MLT')) {
            if (weight <= 2) {
                setPrice(18000);
                setVehicleType('RAVI');
            } else if (weight > 2 && weight <= 4) {
                setPrice(18000);
                setVehicleType('SHEHZOR');
            } else if (weight > 4 && weight <= 25) {
                setPrice(weight * 2500);
                setVehicleType('MAZDA');
            } else if (weight > 25 && weight <= 30) {
                setPrice(weight * 2500);
                setVehicleType('ISUZU');
            }
            toast.success('Quote Generated!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (((deparetureCity === 'MLT' && arrivalCity === 'KHC') || (deparetureCity === 'KHC' && arrivalCity === 'MLT')) || ((deparetureCity === 'LHR' && arrivalCity === 'FSD') || (deparetureCity === 'FSD' && arrivalCity === 'LHR')) || ((deparetureCity === 'LHR' && arrivalCity === 'KHC') || (deparetureCity === 'KHC' && arrivalCity === 'LHR')) || ((deparetureCity === 'FSD' && arrivalCity === 'ISB') || (deparetureCity === 'ISB' && arrivalCity === 'FSD')) || ((deparetureCity === 'ISB' && arrivalCity === 'KHC') || (deparetureCity === 'KHC' && arrivalCity === 'ISB')) || ((deparetureCity === 'KHC' && arrivalCity === 'FSD') || (deparetureCity === 'FSD' && arrivalCity === 'KHC'))) {
            if (weight <= 2) {
                setPrice(18000);
                setVehicleType('RAVI');
            } else if (weight > 2 && weight <= 4) {
                setPrice(18000);
                setVehicleType('SHEHZOR');
            } else if (weight > 4 && weight < 25) {
                setPrice(weight * 5500);
                setVehicleType('MAZDA');
            } else if (weight >= 25) {
                setPrice(weight * 5500);
                setVehicleType('ISUZU');
            }
            toast.success('Quote Generated!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Error Generating Quote!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }

    //Toggle for Quote Output Funcionality here...
    const [showQuote, setShowQuote] = useState(true);
    const toggleQuote = () => {
        setShowQuote(!showQuote);
    };

    //Both Toggle and Quote Generator Code Here...
    const handleBothClicks = () => {
        toggleQuote();
        quoteGenerateClick();
    };


    return (
        <>
            <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 ">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div className="relative z-10">
                <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                        <defs>
                            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                        </rect>
                    </svg>
                </div>
            </div>
            <div>
                {showQuote ? (
                    <div id="quote" class="py-24 txt-font ">
                        <div class="py-40 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                            {/* <h1 class="mb-4 text-6xl fontH1 font-bold text-gray-800 md:text-5xl lg:text-6xl">Generate a quick estimated Quote!</h1> */}
                            <h1 className="text-3xl mb-4 font-medium fontAlt leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                                Generate a quick estimated Quote!
                            </h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-500">Here at FreightEase, you can easily get a quick estimated Quote of your future shipments to get a estimated cost of your shipment.</p>

                            <form class="w-full txt-font2 max-w-md mx-auto">

                                {/* Dropdown 1 */}
                                <div className="flex my-2">
                                    <button
                                        onClick={() => setDropdownVisible1(!isDropdownVisible1)}
                                        className="flex-shrink-0 z-10 fontAlt inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
                                        type="button"
                                    >
                                        Departure City
                                        <svg
                                            className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownVisible1 ? 'rotate-180' : 'rotate-0'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {isDropdownVisible1 && (
                                        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700">
                                            <ul className="py-2 text-sm fontAlt text-gray-700 dark-text-gray-200">
                                                {options1.map((option, index) => (
                                                    <li key={index}>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleOptionClick1(option)}
                                                            className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                                                        >
                                                            {option}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            value={selectedOption1}
                                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                                            placeholder="Select Departure City from list..." 
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Dropdown 2 */}
                                <div className="flex my-2">
                                    <button
                                        onClick={() => setDropdownVisible2(!isDropdownVisible2)}
                                        className="flex-shrink-0 fontAlt z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover-bg-gray-200 focus-ring-4 focus-outline-none focus-ring-gray-100 dark-bg-gray-700 dark-hover-bg-gray-600 dark-focus-ring-gray-700 dark-text-white dark-border-gray-600"
                                        type="button"
                                    >
                                        Arrival City
                                        <svg
                                            className={`w-2.5 h-2.5 ml-2.5 transform ${isDropdownVisible2 ? 'rotate-180' : 'rotate-0'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {isDropdownVisible2 && (
                                        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700">
                                            <ul className="py-2 text-sm fontAlt text-gray-700 dark-text-gray-200">
                                                {options2.map((option, index) => (
                                                    <li key={index}>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleOptionClick2(option)}
                                                            className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                                                        >
                                                            {option}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            value={selectedOption2}
                                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400 outline-none::placeholder fontAlt"
                                            placeholder="Select Arrival City from list..."
                                            required
                                        />
                                    </div>
                                </div>

                                {/*  Inputs  */}
                                <div>
                                    <input onChange={kgsChangeHandler} value={kgs} type="text" class=" my-2 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline-none::placeholder fontAlt" placeholder="Enter item weight" required placeholder-gray-400/>
                                </div>
                                <p class='text-xs fontAlt text-red-600 pt-2'>{`Note* : Cost may be vary due to inflation & fluctuation in Petrol Prices!`}</p>
                            </form>
                            <button onClick={handleBothClicks} type="submit" class="text-white w-full max-w-md mx-auto px-6 py-3 mt-4  bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Generate the Quote</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='pt-36 pb-4 items-center justify-center   '>
                            <div id='quoteOutput' class="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
                                <div class="flex flex-col">
                                    <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                                        <div class="flex-none sm:flex">

                                            <div class="flex-auto justify-evenly">

                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center  my-1">
                                                        <span class="mr-3 rounded-full bg-white w-22 h-8">
                                                            <img src={logo} class="h-8 p-1" alt='ticketLogo' />
                                                        </span>
                                                    </div>
                                                    <div class="ml-auto text-blue-800">Quote</div>
                                                </div>

                                                <div class="border-b border-dashed border-b-2 my-5"></div>

                                                <div class="flex items-center px-5">
                                                    <div class="flex flex-col">
                                                        <span class="fontH1 font-medium">Departure</span>
                                                        <div class="text-lg font-semibold text-red-600">{selectedOption1}</div>

                                                    </div>
                                                    <div class="flex flex-col mx-auto items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                                    </div>
                                                    <div class="flex flex-col ">
                                                        <span class="fontH1 font-medium">Arrival</span>
                                                        <div class="text-lg font-semibold text-red-600">{selectedOption2}</div>
                                                    </div>
                                                </div>

                                                <div class="border-b border-dashed border-b-2 my-5"></div>

                                                <div class="flex items-center px-5">
                                                    <div class="flex flex-col">
                                                        <span class="fontH1 font-medium">Vehicle</span>
                                                        <div class="text-lg font-semibold text-red-600">{vehicleType}</div>

                                                    </div>
                                                    <div class="flex flex-col mx-auto items-center justify-center">
                                                    </div>
                                                    <div class="flex flex-col ">
                                                        <span class="fontH1 font-medium"> {`Weight (tons)`}</span>
                                                        <div class="text-lg font-semibold text-red-600 items-end">{kgs}</div>
                                                    </div>
                                                </div>

                                                <div class="border-b border-dashed border-b-2 my-5">
                                                    <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                                    <div class="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                                </div>

                                                <div class="flex items-center justify-center px-5 pt-3 pb-5 text-sm">
                                                    <div class="flex flex-col text-center">
                                                        <span class="fontH1 font-medium">Total Estimated Cost</span>
                                                        <div class="text-6xl font-semibold text-center text-red-600">{price}/-</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                        <button type="submit" class="z-999 flex items-center justify-center text-white w-full mx-auto max-w-md px-6 py-3  bg-indigo-800 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Regenerate Again</button>
                    </>
                )}
            </div>
        </>
    )
}

export default Quote


