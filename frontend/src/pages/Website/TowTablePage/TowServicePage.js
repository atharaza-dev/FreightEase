import React from 'react'

function TowServicePage() {
    return (
        <>
            {/* ============================================================================================== */}
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            {/* ============================================================================================== */}

            <section className="relative  overflow-hidden bg-gradient-to-b from-blue-100 via-transparent to-transparent xl:pt-28">
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
                <div className="relative pt-24 sm:py-16 lg:pt-0 xl:pb-0">
                    <div className="pt-24 item-center justify-center mx-24">
                        <h1 className="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Relive</span> the Efficient Tow Truck Services</h1>
                        <p className="heading2 mb-8 leading-relaxed">On our Tow Truck page, discover swift and reliable solutions tailored to your roadside assistance needs. With FreightEase, rest assured your vehicle is in capable hands. Explore our range of towing services and experience peace of mind on the road.</p>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                
                    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100 rounded-tl rounded-bl">Vehicle Name</th>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100">Vehicle Type</th>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100">Lahore</th>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100">Islamabad</th>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100">Karachi</th>
                                    <th class="px-4 py-3 title-font fontAlt tracking-wider font-medium text-gray-900 text-m bg-gray-100">Multan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-4 fontAlt py-3">660CC - 800CC</td>
                                    <td class="px-4 fontAlt py-3">Mini Vehicles</td>
                                    <td class="px-4 fontAlt py-3">Rs 15000</td>
                                    <td class="px-4 fontAlt py-3">Rs 18000</td>
                                    <td class="px-4 fontAlt py-3">Rs 20000</td>
                                    <td class="px-4 fontAlt py-3">Rs 12000</td>
                                </tr>
                                <tr>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">1000CC</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Hatchbacks</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 18000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 20000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 23000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 15000</td>
                                    
                                </tr>
                                <tr>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">1300CC - 1800CC</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Sedan</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 23000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 25000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 27000</td>
                                    <td class="border-t-2 fontAlt border-gray-200 px-4 py-3">Rs 20000</td>
                                 
                                </tr>
                                <tr>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">1800+ CC</td>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">Crossovers / SUVs</td>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">Rs 33000</td>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">Rs 35000</td>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">Rs 40000</td>
                                    <td class="border-t-2 fontAlt border-b-2 border-gray-200 px-4 py-3">Rs 23000</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <button class="flex ml-auto text-white bg-primColor1 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Book a Tow Truck</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TowServicePage