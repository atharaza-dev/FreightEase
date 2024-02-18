import React from 'react'
import './ShipperPage.css'

function ParcelTracking() {
  return (
    <>
    
      <div class="w-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

        <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Track your Shipment</h1>

          <div className="sm:flex items-end justify-center gap-4">
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Tracking ID / Shipment ID</label>
              <input type="text" className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='FES1234' />
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 sm:mt-0 inline-flex items-center justify-center px-8 py-2 bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none rounded">
              Track
            </button>
          </div>

        </div>

        <ol class="items-center justify-center sm:flex px-8 pt-4 pb-8 ">

          <li class="relative mb-6 sm:mb-0 w-full">
            <div class="flex items-center justify-center">
              <div class="flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full ring-0 ring-primColor1 sm:ring-8  shrink-0">
                <i class="fa-duotone fa-truck-ramp-box fa-xl text-primColor1"></i>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8 items-center justify-center">
              <h3 class="text-lg font-semibold text-gray-900">Shipment Shipped</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2, 2024 - 03 00 PM</time>
              {/* <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p> */}
            </div>
          </li>

          <li class="relative mb-6 sm:mb-0 w-full">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full ring-0 ring-primColor1 sm:ring-8 shrink-0">
                <i class="fa-duotone fa-truck-bolt fa-xl text-primColor1"></i>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900">Shipment On the Way</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 4, 2024 - 03 00 PM</time>
            </div>
          </li>

          <li class="relative mb-6 sm:mb-0 w-full">
            <div class="flex items-center">
              <div class="z-10 flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full ring-0 ring-primColor1  sm:ring-8 shrink-0">
                <i class="fa-duotone fa-person-carry-box fa-xl text-primColor1"></i>
              </div>
              <div class="hidden sm:flex w-full bg-gray-300 h-0.5"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900">Shipment Delivered</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 7, 2024 - 03 00 PM</time>
            </div>
          </li>

        </ol>


        <div class="border-4 border-blue-200 rounded-lg my-4 mx-8">
          <iframe class="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title='track'>
          </iframe>
        </div>

      </div>

    </>
  )
}

export default ParcelTracking