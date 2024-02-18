import React from 'react'
import { Link } from 'react-router-dom'
import flatbed from '../../assets/imgs/flatbed2.png'
import halfbody from '../../assets/imgs/halfbody.png'
import container2 from '../../assets/imgs/container2.png'
import mazda from '../../assets/imgs/mazda.png'
import shahzore from '../../assets/imgs/shahzore.png'
import pickup from '../../assets/imgs/pickup.png'

function TruckBooking() {
  return (
    <>
      <div class="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

        <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Enter Shipment Details</h1>


          <div className="sm:flex items-end justify-center gap-4">
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Shipper Name</label>
              <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='shipper name' />
            </div>
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='phone number' />
            </div>
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">CNIC Number</label>
              <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='cnic number' />
            </div>
          </div>

          <div className="sm:flex items-end justify-center gap-4">
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Pickup City</label>
              <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='eg: Faisalabad' />
            </div>
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Drop-off City</label>
              <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='eg: Multan' />
            </div>
          </div>

          <div className="relative w-full">
            <label htmlFor="id" className="leading-7 text-sm text-gray-600">Full Pickup Address</label>
            <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='eg: P989, Street 7, Mustafabad, Sargodha Road, Faisalabad' />
          </div>

          <div className="relative w-full">
            <label htmlFor="id" className="leading-7 text-sm text-gray-600">Full Drop-off Address</label>
            <input type="text" className="w-full bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='eg: House 6, Street 1, Gulraiz Colony, Multan' />
          </div>

        </div>

        <label className="leading-7 text-sm text-gray-600 mx-4 mb-2">Select Vehicle Type:</label>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-4">

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={flatbed} alt="err" class="w-40" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' />
              <span class='fontAlt tracking-wide uppercase mt-2'>Flatbed</span>
            </div>
          </div>

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={container2} alt="err" class="w-32" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' />
              <span class='fontAlt tracking-wide uppercase mt-2'>Container</span>
            </div>
          </div>

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center justify-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={halfbody} alt="err" class="w-40" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' /><span class='fontAlt tracking-wide uppercase mt-2'>Flatbed</span>
            </div>
          </div>

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={mazda} alt="err" class="w-32" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' /><span class='fontAlt tracking-wide uppercase mt-2'>Mazda</span>
            </div>
          </div>

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={shahzore} alt="err" class="w-32" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' /><span class='fontAlt tracking-wide uppercase mt-2'>Shahzore</span>
            </div>
          </div>

          <div class="h-full rounded-lg bg-gray-200">
            <div class="flex flex-col items-center space-x-4 my-2 py-2">
              <label for="option1" class="cursor-pointer flex flex-col items-center">
                <img src={pickup} alt="err" class="w-32" />
              </label>
              <input type="radio" name="vehicle" className='w-4 h-4' /><span class='fontAlt tracking-wide uppercase mt-2'>Pickup</span>
            </div>
          </div>

        </div>


        <div className='flex items-center justify-center my-12'>
          <Link to="proceed-booking">
            <button className=" focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 inline-flex items-center justify-center px-8 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded">
              Proceed to booking
            </button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default TruckBooking