import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { useAuth } from '../../data/AuthContext';

function BookingHistory() {
  const { backendURL, shipperData } = useAuth();
  const userId = shipperData.userId;

  const [shipmentData, setshipmentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendURL}/api/auth/shipment-history/` + userId);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setshipmentData(data);
        toast.success('Fetched data from database!', {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
      } catch (error) {
        toast.error('Failed to fetch data from database!', {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div class="w-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2">

        <div class=" py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h1 class="text-6xl font-bold fontAlt tracking-wide text-primColor1">Shipment History</h1>
          <p class="mt-4 text-lg text-gray-700">Explore Your Journey: Track and Review Your Booking History.</p>
        </div>

        <div class="my-7 mx-4 overflow-x-auto">
          <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
            <tbody class='bg-white rounded-lg'>
              <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">DAte</th>
                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Shipment ID</th>
                <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Route</th>
                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Goods Type</th>
                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Weight</th>
                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Status</th>
                <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Action</th>
              </tr>

              {shipmentData.map((shipment, index) => (
                shipment.status !== 'false' &&
                <tr key={index} className='rounded-lg'>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{shipment.shipmentDate}</td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{shipment.shipmentId}</td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{shipment.originCity} <span className='px-3'><i className="fa-duotone fa-arrow-right fa-md text-primColor1"></i></span> {shipment.departureCity}</td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{shipment.goodsType}</td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{shipment.itemWeight} ton(s)</td>
                  <td className={`h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-white capitalize ${shipment.status === 'cancelled' ? 'bg-red-500' : shipment.status === 'confirmed' ? 'bg-green-600' : shipment.status === 'shipped' ? 'bg-yellow-400' : shipment.status === 'delivered' ? 'bg-emerald-500' : ''} tracking-wide`}>{shipment.status}</td>
                  <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  justify-center items-center last-cell-width">
                    <center>
                      <Link to={`/sms/booking-details/${shipment.shipmentId}`} className="text-white bg-primColor1 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded inline-block">See full details</Link>
                    </center>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>

    </>
  )
}

export default BookingHistory