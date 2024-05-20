import React from 'react'
import { Link } from 'react-router-dom'
import truck1 from '../../../assets/imgs/truck1.jpg'
import truck2 from '../../../assets/imgs/truck1.jpg'
import truck3 from '../../../assets/imgs/truck1.jpg'

function VehicleListPage() {
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
                        <h1 className="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Array</span> of diverse Vehicle Fleet selection</h1>
                        <p className="heading2 mb-8 leading-relaxed">Welcome to FreightEase's comprehensive vehicle inventory page, where you can explore our diverse fleet tailored to meet your transportation needs. From robust trucks to versatile vans, our selection ensures optimal solutions for every cargo requirement. Browse through our available vehicles and embark on a journey of seamless logistics with FreightEase.</p>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">
                   
                    <div className="container mx-auto">
                        <div className="flex flex-wrap m-4">

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck1} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font fontAlt font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <Link to='/vehicle-frame' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck2} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VehicleListPage