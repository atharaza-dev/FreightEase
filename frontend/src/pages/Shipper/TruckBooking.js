import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';
import { Link } from 'react-router-dom';

function TruckBooking() {
  const { backendURL } = useAuth();
  const [originCity, setOriginCity] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [filteredVehicleData, setFilteredVehicleData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const searchHandler = async () => {
    setSearchClicked(true);
    try {
      // Convert city names to uppercase
      const uppercaseOriginCity = originCity.toUpperCase();
      const uppercaseDepartureCity = departureCity.toUpperCase();

      const response = await fetch(`${backendURL}/api/auth/vehicles-list`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const filteredData = data.filter(
        vehicle => vehicle.originCity === uppercaseOriginCity && vehicle.departureCity === uppercaseDepartureCity
      );
      setFilteredVehicleData(filteredData);

      if (filteredData.length === 0) {
        toast.error('No data found matching the search criteria!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });
      } else {
        toast.success('Routes found', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'light',
        });
      }
    } catch (error) {
      toast.error('Error fetching data from database!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
      });
    }
  };


  useEffect(() => {
    if (!originCity || !departureCity) {
      setSearchClicked(false);
      setFilteredVehicleData([]);
    }
  }, [originCity, departureCity]);

  return (
    <>
      <div className="w-full h-full overflow-x-auto fontAlt bg-white rounded-lg shadow-sm border-1 border-gray-250 mt-2 pb-6">
        <div className="py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <h1 className="fontAlt sm:text-6xl mb-8 font-bold text-start text-primColor1">Ready to Book Your Truck!</h1>
          <div className="sm:flex items-end justify-center gap-4">
            <div className="relative flex-grow">
              <label className="leading-7 text-sm text-gray-600">Pickup City</label>
              <input
                onChange={e => setOriginCity(e.target.value)}
                type="text"
                className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="eg: Faisalabad"
              />
            </div>
            <div className="relative flex-grow">
              <label htmlFor="id" className="leading-7 text-sm text-gray-600">
                Drop-off City
              </label>
              <input
                onChange={e => setDepartureCity(e.target.value)}
                type="text"
                className="w-full  bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="eg: Multan"
              />
            </div>
            <button
              onClick={searchHandler}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 inline-flex items-center justify-center px-8 py-2 bg-primColor1 text-white hover:bg-blue-600 focus:outline-none rounded-sm"
            >
              <span>
                <i className="fa-duotone fa-magnifying-glass mr-2"></i>Search
              </span>
            </button>
          </div>
        </div>

        <h1 className="fontAlt sm:text-4xl font-bold text-start text-primColor1 px-4 pt-4">
          List of available trucks....
        </h1>

        {filteredVehicleData.length > 0 && searchClicked && (
          <div className="w-full rounded-xl fontAlt px-4 py-4">

            {filteredVehicleData.map((vehicle, index) => (
              <div key={vehicle._id} class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-4" >

                <div class="h-48 flex items-center justify-center rounded-lg bg-white shadow-sm border-1 border-gray-250">
                  <img src={vehicle.imgUrl} alt="err" className="w-48" />
                </div>

                <div class="h-48 rounded-lg bg-gray-200">
                  <div className="h-full rounded-lg bg-white lg:col-span-2 flex flex-col justify-center px-6 shadow-sm border-1 border-gray-250">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                      {vehicle.vehicleType}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {vehicle.vehicleName}
                    </h1>
                    <div className="mt-2 mb-3 space-x-4">
                      <span className="text-sm px-3 py-1 bg-slate-300 rounded-full">
                        {vehicle.registration}
                      </span>
                    </div>
                    <div className="flex mt-3 ">
                      <h1 className="text-lg font-semibold tracking-wide">
                        <i className="fa-solid fa-location-dot mr-2 text-primColor2"></i>
                        {vehicle.originCity}
                      </h1>
                      <h1 className="text-lg mx-4 text-primColor1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </h1>
                      <h1 className="text-lg font-semibold tracking-wide">
                        <i className="fa-solid fa-location-dot mr-2 text-green-600"></i>
                        {vehicle.departureCity}
                      </h1>
                    </div>
                  </div>
                </div>

                <div class="h-48 rounded-lg bg-gray-200">
                  <div className="h-full rounded-lg bg-white flex flex-col items-center justify-center text-center shadow-sm border-1 border-gray-250">
                    <h3 className="text-4xl font5 font-bold tracking-wide">Rs {vehicle.routeCharges}/-</h3>
                    <h3 className="text-sm fontAlt mt-2">per ton.</h3>
                    <Link to={`/sms/book-truck/${vehicle._id}`} className="mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 inline-flex items-center justify-center px-8 py-2 bg-primColor1 text-white hover:bg-blue-600 focus:outline-none rounded-sm">
                      Book this Truck
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        )}


      </div>
      <ToastContainer />
    </>
  );
}

export default TruckBooking;
