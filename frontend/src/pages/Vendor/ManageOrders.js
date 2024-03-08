import React from 'react'
import { Link } from 'react-router-dom'
function ManageOrders() {
    return (
        <>
            <div class="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

                <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Manage Orders</h1>

                    <section class="mx-auto w-full max-w-7xl px-2 pb-2 font1 text-white">

                        <div class="flex flex-col space-y-4 items-end md:justify-between md:space-y-0">

                            <Link to="/vms/inbound-orders" class="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                <span><i class="fa-duotone fa-arrow-up-right-from-square text-gray-600 mr-2"></i>Check new Orders</span>
                            </Link>

                        </div>

                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Order#</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Origin Location</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Drop-off Location</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Vehicle Type</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Action</th>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">FE11942</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Faisalabad</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Multan</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-red-600"><span className='bg-red-200 py-2 px-3 rounded-full'>Cancelled</span></td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <button class='bg-red-500 py-2 px-4 rounded mx-1 hover:bg-red-600' ><i class="fa-duotone fa-trash-can-xmark text-white "></i></button>
                                            <Link className='bg-blue-500 py-2 px-4 rounded mx-1 hover:bg-blue-600'><i class="fa-duotone fa-check text-white"></i></Link>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">FE11942</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Faisalabad</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Multan</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-green-600"><span className='bg-green-200 py-2 px-3 rounded-full'>Completed</span></td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <button class='bg-red-500 py-2 px-4 rounded mx-1 hover:bg-red-600' ><i class="fa-duotone fa-trash-can-xmark text-white "></i></button>
                                            <Link className='bg-blue-500 py-2 px-4 rounded mx-1 hover:bg-blue-600'><i class="fa-duotone fa-check text-white"></i></Link>
                                        </td>
                                    </tr>

                                    <tr class='rounded-lg'>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">FE11942</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Faisalabad</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Multan</td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-yellow-600"><span className='bg-yellow-200 py-2 text-sm px-3 rounded-full'>Pending</span></td>
                                        <td class="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 justify-center items-center last-cell-width">
                                            <button class='bg-red-500 py-2 px-4 rounded mx-1 hover:bg-red-600' ><i class="fa-duotone fa-trash-can-xmark text-white "></i></button>
                                            <Link className='bg-blue-500 py-2 px-4 rounded mx-1 hover:bg-blue-600'><i class="fa-duotone fa-check text-white"></i></Link>
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

export default ManageOrders