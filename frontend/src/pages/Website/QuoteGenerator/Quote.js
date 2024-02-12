import React, { useState } from 'react'
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

    // Kga
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
            (((deparetureCity === 'ISB' && arrivalCity === 'MLT')) || (deparetureCity === 'MLT' && arrivalCity === 'ISB'))) {
            if (weight <= 2) {
                setPrice(18000);
                setVehicleType('RAVI');
            } else if (weight > 2 && weight <= 4) {
                setPrice(18000);
                setVehicleType('SHEHZOR');
            } else if (weight > 4 && weight <= 25) {
                setPrice(weight * 2500);
                setVehicleType('MAZDA');
            } else if (weight > 25) {
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

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <>
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
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
                                    <input onChange={kgsChangeHandler} value={kgs} type="text" class=" my-2 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out outline-none::placeholder fontAlt" placeholder="Enter item weight" required placeholder-gray-400 />
                                </div>
                                <p class='text-xs fontAlt text-red-600 pt-2'>{`Note* : Cost may be vary due to inflation & fluctuation in Petrol Prices!`}</p>
                            </form>
                            <button onClick={handleBothClicks} type="submit" class="text-white w-full max-w-md mx-auto px-6 py-3 mt-4  bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Generate the Quote</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='h-screen flex pt-16 items-center justify-center   '>
                            <section class="text-gray-600 body-font overflow-hidden">
                                <div class="px-5 mx-auto">
                                    <div class="p-4 w-full">
                                        <div class="h-full p-6 rounded-lg border-2 border-indigo-800 flex flex-col relative overflow-hidden">
                                            <span class="bg-indigo-800 text-white px-3 py-1 fontAlt tracking-widest text-sm absolute right-0 top-0 rounded-bl">Quote Generated</span>
                                            <h2 class="text-m tracking-widest fontAlt title-font mb-1 font-medium">Total Estimated Cost</h2>
                                            <h1 class="text-5xl text-gray-900 font-semibold fontAlt leading-none flex items-center pb-4 mb-4 border-b border-gray-200">Rs <span className='text-red-600 px-2'>{price}</span>/-</h1>
                                            <div>
                                                <table class="table-auto w-full text-left whitespace-no-wrap">
                                                    <thead>
                                                        <tr>
                                                            <th class="pl-6 pr-10 py-3 title-font tracking-wider font-medium fontAlt text-white text-m bg-indigo-800 rounded-tl rounded-bl">Departure</th>
                                                            <th class="pl-6 pr-10 py-3 title-font tracking-wider font-medium fontAlt text-white text-m bg-indigo-800">Destination</th>
                                                            <th class="pl-6 pr-10 py-3 title-font tracking-wider font-medium fontAlt text-white text-m bg-indigo-800">Weight (Kgs)</th>
                                                            <th class="pl-6 pr-10 py-3 title-font tracking-wider font-medium fontAlt text-white text-m bg-indigo-800">Vehicle Assigned</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="px-4 py-3 text-lg text-gray-900"><span className='text-red-600 pr-1'>*</span>{selectedOption1}</td>
                                                            <td class="px-4 py-3 text-lg text-gray-900"><span className='text-red-600 pr-1'>*</span>{selectedOption2}</td>
                                                            <td class="px-4 py-3 text-lg text-gray-900"><span className='text-red-600 pr-1'>*</span>{kgs} tons</td>
                                                            <td class="px-4 py-3 text-lg text-gray-900"><span className='text-red-600 pr-1'>*</span>{vehicleType} </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <button onClick={handleReload} class="flex items-center mt-6 text-white bg-indigo-800 border-0 py-3 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Regenerate Quote Again
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </button>

                                            <p class="text-xs text-gray-500 mt-3">*Note: Cost or Charges may vary due to inflation and changing in the prices of Feul & Taxes!</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                )}
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Quote


