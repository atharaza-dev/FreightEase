import React from 'react'
import truck4 from '../../../assets/imgs/truck4.png'

function VehicleFramePage() {
  return (
    <>
      <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <section class="text-gray-600 body-font overflow-hidden py-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font font2 text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 class="text-gray-900 text-3xl fontAlt title-font font-medium mb-4">ISUZU Truck</h1>
              <div class="flex mb-4">
                <a href='/vehicle-frame' class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
              </div>
              <p class="leading-relaxed mb-4">Isuzu Motors Ltd., commonly known as Isuzu, is a Japanese multinational automobile manufacturer headquartered in Yokohama, Kanagawa Prefecture. Its principal activity is the production, marketing and sale of Isuzu commercial vehicles and diesel engines.</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Color</span>
                <span class="ml-auto text-gray-900">Blue</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Size</span>
                <span class="ml-auto text-gray-900">40 Ft</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Weight Limit</span>
                <span class="ml-auto text-gray-900">40 Ton</span>
              </div>
              <div class="flex">
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Book Now</button>
              </div>
            </div>
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={truck4}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default VehicleFramePage