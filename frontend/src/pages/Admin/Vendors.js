import React from 'react';
import './AdminPage.css';

function vendors() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="sm:py-16 lg:pt-0 xl:pb-0">
                    <div className="item-center justify-center">
                        <h1 class="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Vendors List </span></h1>
                        <p class="heading2 mb-8 leading-relaxed">At FreightEase, our Services page unveils a spectrum of tailored solutions designed to streamline your logistics needs. Explore our comprehensive offerings, from efficient trucking to seamless freight management. Experience reliability and excellence in every service we deliver.</p>
                    </div>
                </div>

                {/* <section class="text-gray-600 fontAlt">
                    <div class="container px-5 py-12 mx-auto">
                        <div class="lg:w-2/1 w-full mx-auto overflow-auto">
                            <table class="table-auto w-full text-left whitespace-no-wrap">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-m bg-primColor1 rounded-tl rounded-bl">Plan</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-m bg-primColor1">Speed</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-m bg-primColor1">Storage</th>
                                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-m bg-primColor1">Price</th>
                                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-4 py-3">Start</td>
                                        <td class="px-4 py-3">5 Mb/s</td>
                                        <td class="px-4 py-3">15 GB</td>
                                        <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                                    </tr>
                                    <tr>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                    </tr>
                                    <tr>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                        <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                    </tr>
                                    <tr>
                                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                        <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div >
                        <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div >
                </section > */}

                <div class="w-full overflow-x-auto fontAlt">
                    <div class="flex items-center justify-between my-3 lg:w-full xl:w-1/2 w-2/4 space-x-4">
                        <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter particular to search...' />
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                    </div>

                    <table class="w-full text-left border border-separate rounded border-slate-200" cellspacing="0">
                        <tbody>

                            <tr>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l py-3 first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vendor Name</th>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">CNIC</th>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Email</th>
                                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Manage</th>
                            </tr>

                            <tr>
                                <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">Athar Raza</td>
                                <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">33100-1724572-7</td>
                                <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">atharaza.dev@gmail.com</td>
                                <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                    <button className='bg-green-200 px-3 py-2 rounded-lg'>Edit</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </section >
        </>
    );
}

export default vendors;
