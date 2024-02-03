import React from 'react';
import '../Admin.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/imgs/logo.png'


function AdminLayouts() {
    return (
        <>

            <section class="min-h-screen">

                <aside class="fixed top-0 fontAlt bg-gray-900 z-50 left-0 pb-8 item-center justify-center overflow-x-hidden overflow-y-auto flex flex-col w-64 h-screen px-4 py-4  ">

                    <div class="flex flex-col justify-between flex-1">
                        <nav>
                            <Link to='/admin' class="flex justify-center">
                                <img src={logo} alt="" className='w-48' />
                            </Link>
                            <Link to='/admin' class="flex items-center pl-4 py-2 mt-14 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-house"></i>
                                <span class="ml-4 font-medium">Dashboard</span>
                            </Link>

                            <Link to='vendors' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-truck-fast"></i>
                                <span class="ml-4 font-medium">Vendors Connect</span>
                            </Link>

                            <Link to='shippers' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-users"></i>
                                <span class="ml-4 font-medium">Shippers Connect</span>
                            </Link>

                            <Link to='quote' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-quote-right"></i>
                                <span class="ml-4 font-medium">RTQ Generator</span>
                            </Link>

                            <Link to='revenue' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-sack-dollar"></i>
                                <span class="ml-4 font-medium">Revenue</span>
                            </Link>

                            <Link to='invoice' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-file-invoice"></i>
                                <span class="ml-4 font-medium">Invoice Template</span>
                            </Link>

                            <Link to='/' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <i class="fa-solid fa-circle-info"></i>
                                <span class="ml-4 font-medium">Help & Support</span>
                            </Link>

                        </nav>
                        <Link to='vendors' class="flex items-center pl-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <i class="fa-solid fa-gear"></i>
                            <span class="ml-4 font-medium">Profile Settings</span>
                        </Link>
                    </div>
                </aside>

                <div class="transition md:ml-60" style={{ backgroundColor: "#F1F5F9" }}>

                    <header class="fixed top-0 left-0 flex flex-row items-center justify-between w-full px-4 h-20 z-[6] bg-white border-b-1 border-gray-250 shadow-sm rounded-m">
                        <Link to='/admin' class="flex">
                            <img src={logo} alt="" className='w-48' />
                        </Link>
                        <div class="flex items-center gap-x-6">
                            <i class="fa-regular fa-bell fa-lg text-gray-700"></i>
                            <Link to='vendors' class="flex items-center justify-center text-gray-600">
                                <i class="fa-solid fa-gear fa-lg text-gray-700"></i>
                            </Link>
                            <div class="flex relative items-center">
                                <div class="mr-3 justify-end">
                                    <p class="text-m font-semibold text-end fontAlt">Athar Raza Saeedi</p>
                                    <p class="text-sm text-gray-600 text-end fontAlt">ADMIN</p>
                                </div>
                                <div class="relative">
                                    <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="" />
                                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
                                </div>

                            </div>

                        </div>
                    </header>



                    <div class="p-4 ml-4">
                        <div class="mt-20  rounded h-full">
                            <Outlet />
                        </div>
                    </div>

                    <footer class="bottom-0 flex flex-row items-center justify-between w-full px-4 h-16 bg-gray-900">
                        <p className='flex item-center text-white justify-center w-full tracking-wide'>Developed by Athar Raza</p>
                    </footer>
                </div >

            </section >

        </>
    )
}

export default AdminLayouts
