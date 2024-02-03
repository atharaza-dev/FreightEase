import React from 'react';
import './AdminPage.css';

function vendors() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="sm:py-16 lg:pt-0 xl:pb-0">
                    <div className="item-center justify-center">
                        <h1 class="fontAlt sm:text-6xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>Vendors Managment </span></h1>
                        {/* <p class="heading2 mb-8 leading-relaxed">At FreightEase, our Services page unveils a spectrum of tailored solutions designed to streamline your logistics needs. Explore our comprehensive offerings, from efficient trucking to seamless freight management. Experience reliability and excellence in every service we deliver.</p> */}
                    </div>
                </div>

                <div class="w-full overflow-x-auto fontAlt rounded-lg shadow-sm border-1 border-gray-250">

                    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div class="sm:flex items-center justify-between">
                            <div class="flex w-full">
                                <input class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 mr-2 sm:mr-12 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out inline-block" placeholder='Enter particular to search for vendor...' />
                            </div>
                            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:mt-0 inline-flex items-center justify-center px-6 py-2 bg-primColor1 text-white hover:bg-indigo-600 focus:outline-none rounded">
                                Search
                            </button>
                        </div>

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vendor Name</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">CNIC</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Email</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200"></th>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Athar Raza</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">33100-1724572-7</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">atharaza.dev@gmail.com</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <center>
                                                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded inline-block">Edit Vendor Details</button>
                                            </center>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </section >
        </>
    );
}

export default vendors;
