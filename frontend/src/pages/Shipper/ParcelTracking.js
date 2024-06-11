import './ShipperPage.css'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { useAuth } from '../../data/AuthContext';

function ParcelTracking() {
  const { backendURL } = useAuth();

  const [shipmentId, setshipmentId] = useState([]);
  const changeHandler = (e) => {
    setshipmentId(e.target.value);
  }
  const [shipmentData, setshipmentData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${backendURL}/api/auth/booking-details/` + shipmentId);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setshipmentData(data);
      console.log('data', data);
    } catch (error) {
      toast.error('Failed to fetch data from database!', {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const trackParcel = () => {
    fetchData();
  }

  return (
    <>

      <div class="w-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

        <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h1 class="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Track your Shipment</h1>

          <div className="sm:flex items-end justify-center gap-4">
            <div className="relative w-full">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">Tracking ID / Shipment ID</label>
              <input value={shipmentId} onChange={changeHandler} type="text" className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='FE-FYP-****' />
            </div>
            <button onClick={trackParcel} className="focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 sm:mt-0 inline-flex items-center justify-center px-8 py-2 bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none rounded">
              Track
            </button>
          </div>

        </div>

        <div className='mx-8 mb-4'>
          <h3 className='text-lg font-semibold'>Shipment Status</h3>
        </div>
        {/* Statuses */}
        <ol class="items-center justify-center sm:flex px-8 pt-4 pb-8 ">

          {shipmentData.map((shipment, index) => (
            <li key={index} className='relative mb-6 sm:mb-0 w-full '>
              <div className="flex items-center justify-center">
                <div className={`flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full  shrink-0 ${shipment.status === 'false' ? 'pendingstatus' : shipment.status ? 'bg-gray-200' : ''}`}>
                  <i className="fa-duotone fa-truck-ramp-box fa-xl text-primColor1"></i>
                </div>
                <div className="hidden sm:flex w-full bg-blue-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold text-gray-900 capitalize tracking-wide ${shipment.status === 'false' ? '' : 'line-through text-gray-300'}`}>Shipment Pending</h3>
                <time className={`block mb-2 text-sm font-normal leading-none over text-gray-600 ${shipment.status === 'false' ? '' : 'line-through text-gray-300'}`}>{shipment.shipmentDate}</time>
              </div>
            </li>
          ))}

          {shipmentData.map((shipment, index) => (
            <li key={index} className='relative mb-6 sm:mb-0 w-full '>
              <div className="flex items-center justify-center">
                <div className={`flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full  shrink-0 ${shipment.status === 'shipped' ? 'pendingstatus' : shipment.status ? 'bg-gray-200' : ''}`}>
                  <i className="fa-duotone fa-truck-bolt fa-xl text-primColor1"></i>
                </div>
                <div className="hidden sm:flex w-full bg-blue-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold text-gray-900 capitalize tracking-wide ${shipment.status === 'shipped' ? '' : 'line-through text-gray-300'}`}>Shipment On the way</h3>
                <time className={`block mb-2 text-sm font-normal leading-none over text-gray-600 ${shipment.status === 'shipped' ? '' : 'line-through text-gray-300'}`}>{shipment.shipmentDate}</time>
              </div>
            </li>
          ))}

          {shipmentData.map((shipment, index) => (
            <li key={index} className='relative mb-6 sm:mb-0 w-full '>
              <div className="flex items-center justify-center">
                <div className={`flex items-center justify-center w-16 h-16 bg-blue-200 p-4 rounded-full  shrink-0 ${shipment.status === 'delivered' ? 'pendingstatus' : shipment.status ? 'bg-gray-200' : ''}`}>
                  <i class="fa-duotone fa-person-carry-box fa-xl text-primColor1"></i>
                </div>
                <div className="hidden sm:flex w-full bg-blue-200 h-0.5"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className={`text-lg font-semibold text-gray-900 capitalize tracking-wide ${shipment.status === 'delivered' ? '' : 'line-through text-gray-300'}`}>Shipment Delivered</h3>
                <time className={`block mb-2 text-sm font-normal leading-none over text-gray-600 ${shipment.status === 'delivered' ? '' : 'line-through text-gray-300'}`}>{shipment.shipmentDate}</time>
              </div>
            </li>
          ))}

        </ol>
        {/* Statuses */}

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