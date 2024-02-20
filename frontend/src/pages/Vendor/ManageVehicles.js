import React from 'react'
// import { Link } from 'react-router-dom'
import truckk from '../../assets/imgs/3dtruck.png'
import flatbed from '../../assets/imgs/flatbed2.png'
import halfbody from '../../assets/imgs/halfbody.png'
import container2 from '../../assets/imgs/container2.png'
import mazda from '../../assets/imgs/mazda.png'
import shahzore from '../../assets/imgs/shahzore.png'
import pickup from '../../assets/imgs/pickup.png'

function ManageVehicles() {
    return (
        <>
            <div class="flex items-center justify-between bg-white px-8 my-4 text-white shadow-sm rounded-lg border-1">
                <div class="my-10 lg:my-8 lg:w-1/2">
                    <h1 class="text-6xl font-bold fontAlt tracking-wide text-primColor1">Vehicles</h1>
                    <p class="mt-2 text-lg text-gray-700">Vehicles Managment manages the Vehicles Insertion, Deletion and Updations of Vehicles and its Routes.</p>
                </div>
                <div class="hidden h-42 w-1/1 flex-shrink-0 justify-end lg:flex">
                    <img class="" src={truckk} alt="pic" />
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 fontAlt">

                <div class="h-full rounded bg-white rounded-m shadow-sm border-1 border-gray-250">
                    <h1 className='p-3 bg-slate-200 text-slate-700 border-b border-slate-600 tracking-wide'>Vehicle Insertion Form</h1>

                    <div className='items-center justify-center px-4 py-8'>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Vehicle Registration</label>
                            <input type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Vehicle Name</label>
                            <input type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Origin City</label>
                            <input type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label class="leading-7 text-sm text-gray-600">Departure City</label>
                            <input type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-2">
                            <label class="leading-7 text-sm text-gray-600">Route Fare</label>
                            <input type="text" class="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <button class="text-white w-full tracking-wide bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm my-3">
                                <span><i class="fa-solid fa-plus mr-2"></i>ADD Vehicles</span>
                            </button>
                            <button class="text-white w-full tracking-wide bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-sm">
                                <span><i class="fa-solid fa-xmark mr-2"></i>Cancel Vehicle Insertion</span>
                            </button>
                        </div>
                        <p className='text-sm text-slate-700'><span className='text-red-700 mr-1'>*</span>If don't want to add Vehicle, click on CANCEL button.</p>
                    </div>


                </div>

                <div class="h-full space-y-4 fontAlt">
                    <h1 className='p-3  bg-slate-200 text-slate-70 border-b border-slate-600 tracking-wide'>Select Vehicle Type</h1>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div class="h-full bg-white rounded shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={pickup} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>pickup</span>
                            </div>
                        </div>

                        <div class="h-full bg-white rounded shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={shahzore} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>shahzore</span>
                            </div>
                        </div>

                    </div>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={mazda} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>mazda</span>
                            </div>
                        </div>

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={container2} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>container</span>
                            </div>
                        </div>

                    </div>

                    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={halfbody} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>half-body</span>
                            </div>
                        </div>

                        <div class="h-full rounded bg-white shadow-sm border-1 border-gray-250">
                            <div class="flex flex-col items-center space-x-4 my-2 py-2">
                                <label for="option1" class="cursor-pointer flex flex-col items-center">
                                    <img src={flatbed} alt="err" class="w-40" />
                                </label>
                                <input type="radio" name="vehicle" className='w-4 h-4' />
                                <span class='fontAlt tracking-wide uppercase mt-2'>flatbed</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="w-full h-full overflow-x-auto my-4 fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250">

                <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <h1 class="fontAlt sm:text-4xl mb-8 font-bold text-start text-primColor1">Vehicles List</h1>

                    <section class="mx-auto w-full max-w-7xl px-2 pb-2 font1 text-white">

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Reg#</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Name</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Type</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Origin City</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Drop-Off City</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Type</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200"></th>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">FE11942</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 uppercase">RAVI 2019</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Multan</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Faisalabad</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Flatbody Truck</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 uppercase">Pickup</td>
                                        <td class="h-10 px-4 text-sm items-center justify-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                                            <button><i class="fa-duotone fa-trash-can-xmark fa-lg mr-2 text-red-700 "></i></button>
                                            <button><i class="fa-duotone fa-pen-to-square fa-lg text-blue-700 "></i></button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </section >
                </div>

            </div >

        </>
    )
}

export default ManageVehicles