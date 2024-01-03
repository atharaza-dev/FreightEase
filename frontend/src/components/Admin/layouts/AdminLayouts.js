import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/imgs/logo.png'

// importing
import { RiHomeGearLine } from "react-icons/ri";


function AdminLayouts() {
    return (
        <>
            <header className='flex flex-column w-64 pt-80'>

                <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-3 py-3 lg:px-5 lg:pl-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center justify-start rtl:justify-end">
                                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <span class="sr-only">Open sidebar</span>
                                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                    </svg>
                                </button>
                                <Link to='/admin/home' class="flex ms-2 md:me-24">
                                    <img src={logo} class="h-8 me-3" alt="Logo" />
                                </Link>
                            </div>
                            <div class="flex items-center">
                                <div class="flex items-center ms-3">
                                    <div>
                                        <button className="text-white bg-indigo-800 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-m">
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul class="space-y-2 font-medium">
                            <li>
                                <Link to='dashboard' class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO3WvUrDUBjG8X/HdlJ0KOrW0ckUKe4dHNTBxUVHheJdODg4aMULEHXVC9DBK3DxDnTp5NcmLeiRF56WeKglLeeEgn3goSRp8svJN0zy3zIFJEA1cBNtu2/2gQ7gIrUDNHx0WgvWIh7NDRm/Rp5orwoR4YIMs3qpambsOFnB4RLwqJbyhOupi6keCl4CjoC5ActfgAvgHHj1EUaE7/Ufw/0kgs50EVmbwLsHuWHhbaCtc2cbW/bWfQNO+9wVB8DuqPCW0B1NHwIfQC010pOMt6LLCndHar/pHAPfqqFZ47LAf6GWBeBLnQ8Jbw5Au1lRCQmvCg8dF+sBMjS8qJnFiGhRhlm915W9Jz+Ba2AvUm9kmLWOHnMt4CGntmRyBTwBFeKnAjwDlzYxC9xF/OTxewvMpPemHOEjz285h6M6yZjkB69ur3vG3l0PAAAAAElFTkSuQmCC"/> */}

                                    <span class="ms-3 fontAlt">Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="vendors" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO2XzUsVURiHn2sLV+kNK4Q22SIiQQtz4cZNEvdCGBq1yaSFFLio3EQI14WIpX+BK1cqKCTpQkilWvQBoqvQVWJEuMg+llFWxpHfldMw48yZ5obC/cF7uXM+3nne8/GeM1BUUftIDxO0+0BFXJDFBO0rsMAe0GVgCyiP03nV0ep38ZURyOE4IK7r4HihQE5EtNIIvvIgLwPW0FPgLnDAr/NWRKtzAJmzRvAV8En/x4BNYNQPpimilTmAVFplfcCK9XwJ+C6wv3QzxNIRAHZbI14Qoy7gl9rv6EuInSwASAp4DHwEjjn4TxzE6BDwDngmMCYC7EiBQYwaNEXX/gdIrxJhkKa1sxJVxgfkgspmAwJeBr6hBXm1gCBG14Ep5RevvVGf7Z82klEmRopv2zcgKSAL5HQ+nP4HkFPAHaAHuJjfrlFADgLPVWdW/GedEbkYIPeAH7o0vQV+61BMRwEZAdatu0dKEZm2LQ4gWb3YwJSo7AzwHnjkBTHRDlnHfY0iaPd50ZQyYdBV4YZ1UpvnGeCJj58rwE/gHDAMbJjCThV6j/1qHwc5h2tD3h74+Kmy6s2Ud+QrjiqKOqBRldtp16NJ4IXVNszmNSpetSi1nw/L4OPAB6DWKrul+XZJfs2K+ra1U8xIr2maQ5UGXmvKVgRlIujHXT3ys650bkZ7yeX7pwRoBQaAbuAs8VWjj69BLVTfO2tRe1J/AL2p8yqrYb+jAAAAAElFTkSuQmCC" /> */}
                                    <span class="ms-3 fontAlt">Vendor Users</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                    <span class="ms-3 fontAlt">Shipper Users</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABO0lEQVR4nO2WMUoDQRiFP4UU1lpJ0E4LcwDvoGklyRkUGyWIzWIV7yAWCYIWaY1XEC3ExkbFG2ghYiBhZeAF/iIGZ3bWah48dv7ZfbNvZvbffyAhYTbmgDqwC6yqb0Xxtu7Pq70HLBMJi0AG3AG5+A1cAl+m7xa4N/EncAZsFTVwZAZ9A66AkeKR4hfzzCvQB8bGbCFkGqgHLKhvHdjX1aECtETXdlgzpqIYyAK0pRjYMVswjY9lG6gCJ0DnF7bKNuCDtAV52gJSFhAvDS+AA6DtwckWtKWtFTGQR+AQaBYx0AWe1X6a8Tecxq507yrx3gauFW+asuuLgbSunvwZxxK5WaCSHFrnT6U99BE1Iq7ATcgKLAEf5lAyOf08eGbEeeg3gErsMFIWuBUNQk0z6QTSaTdCX56QwH/gB8jK2Q60g4cpAAAAAElFTkSuQmCC" /> */}
                                    <span class="ms-3 fontAlt">Quote Generator</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nGNgGAWDFRw+8cLiyKkXq6iJQWYS7YBjJ1+FHj318j81McjMUQcwDMkomDT36v/KttP/V2+5j8InBoPUDn0HHB3oKDg60A6YNNBRMGmgHXB0oKPg6EA7YNJAR8GkgXbA0YGOgqOjDjhFxyiwD9wSah+49T+leNQBR8mNArvAzX7UiIJDx15gOODI6Rf+RKSBzTrUcMD6bQ8xHHDoxDMtosoAu8Ct+yl1QFnzKVTfn3qxnSjLQcA+dD9PeMaB6YkFhx4l5B96TC7umX752J5DT9ceOf2i8NixR5xgw0fBYAMARsbrJhvHBncAAAAASUVORK5CYII=" /> */}
                                    <span class="ms-3 fontAlt">Revenue Generated </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nGNgGAWDFRw+8cLiyKkXq6iJQWYS7YBjJ1+FHj318j81McjMUQcwDMkomDT36v/KttP/V2+5j8InBoPUDn0HHB3oKDg60A6YNNBRMGmgHXB0oKPg6EA7YNJAR8GkgXbA0YGOgqOjDjhFxyiwD9wSah+49T+leNQBR8mNArvAzX7UiIJDx15gOODI6Rf+RKSBzTrUcMD6bQ8xHHDoxDMtosoAu8Ct+yl1QFnzKVTfn3qxnSjLQcA+dD9PeMaB6YkFhx4l5B96TC7umX752J5DT9ceOf2i8NixR5xgw0fBYAMARsbrJhvHBncAAAAASUVORK5CYII=" /> */}
                                    <span class="ms-3 fontAlt">Contact </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nGNgGAWDFRw+8cLiyKkXq6iJQWYS7YBjJ1+FHj318j81McjMUQcwDMkomDT36v/KttP/V2+5j8InBoPUDn0HHB3oKDg60A6YNNBRMGmgHXB0oKPg6EA7YNJAR8GkgXbA0YGOgqOjDjhFxyiwD9wSah+49T+leNQBR8mNArvAzX7UiIJDx15gOODI6Rf+RKSBzTrUcMD6bQ8xHHDoxDMtosoAu8Ct+yl1QFnzKVTfn3qxnSjLQcA+dD9PeMaB6YkFhx4l5B96TC7umX752J5DT9ceOf2i8NixR5xgw0fBYAMARsbrJhvHBncAAAAASUVORK5CYII=" /> */}
                                    <span class="ms-3 fontAlt">Help </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="shippers" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nGNgGAWDFRw+8cLiyKkXq6iJQWYS7YBjJ1+FHj318j81McjMUQcwDMkomDT36v/KttP/V2+5j8InBoPUDn0HHB3oKDg60A6YNNBRMGmgHXB0oKPg6EA7YNJAR8GkgXbA0YGOgqOjDjhFxyiwD9wSah+49T+leNQBR8mNArvAzX7UiIJDx15gOODI6Rf+RKSBzTrUcMD6bQ8xHHDoxDMtosoAu8Ct+yl1QFnzKVTfn3qxnSjLQcA+dD9PeMaB6YkFhx4l5B96TC7umX752J5DT9ceOf2i8NixR5xgw0fBYAMARsbrJhvHBncAAAAASUVORK5CYII=" /> */}
                                    <span class="ms-3 fontAlt">Profile Setting </span>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </aside>

            </header>


            {/* For rendering other child components */}
            <Outlet></Outlet>
        </>
    )
}

export default AdminLayouts
