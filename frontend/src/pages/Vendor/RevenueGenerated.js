import React, { useState, useEffect } from 'react'
import cash from '../../assets/imgs/cash.png'
import { useAuth } from '../../data/AuthContext';

function RevenueGenerated() {
    const { backendURL } = useAuth();
    const [revenueData, setRevenueData] = useState(null);
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        const fetchRevenueData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/get-vrev`);
                if (!response.ok) {
                    throw new Error('Failed to fetch revenue data');
                }
                const data = await response.json();
                setRevenueData(data);
                // Calculate total revenue
                const sum = data.reduce((total, item) => total + item.revenue, 0);
                setTotalRevenue(sum);
            } catch (error) {
                console.error('Error fetching revenue data:', error);
            }
        };

        fetchRevenueData();
    }, []);

    return (
        <>
            <section className="overflow-hidden">
                <h1 class="fontAlt sm:text-6xl mb-4 font-bold text-start text-gray-900"><span className='text-primColor1'>REVENUE GENERATED</span></h1>
                <div class="flex items-center justify-between bg-white px-8 text-white shadow-sm rounded-lg border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                        <h1 class="text-8xl font-bold font5 tracking-wide text-primColor1">Rs {totalRevenue}/-</h1>
                        <p class="mt-2 text-lg text-gray-700">The total revenue generated by the proeffiecy of shipments.</p>
                    </div>
                    <div class="hidden h-22 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="w-52" src={cash} alt="pic" />
                    </div>
                </div>

                <div class="w-full overflow-x-auto fontAlt rounded-lg shadow-sm border-1 border-gray-250 mt-4">

                    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div class="mt-7 overflow-x-auto">
                            <table class="w-full text-left border-1 border-gray-300 relative overflow-x-auto shadow-md sm:rounded-lg">
                                <tbody class='bg-white rounded-lg'>
                                    <tr class='rounded-lg text-sm text-gray-700 uppercase'>
                                        <th scope="col" class="h-10 px-4 border-l py-3 font-medium first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Date</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Shipment ID</th>
                                        <th scope="col" class="h-10 px-4 text-m font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-200">Revenue Generated</th>
                                    </tr>

                                    {revenueData && revenueData.map((revenueItem, index) => (
                                        <tr key={index} className='rounded-lg'>
                                            <td className="h-10 px-4 text-md transition duration-300 border-t border-l py-3 first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{revenueItem.date}</td>
                                            <td className="h-10 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{revenueItem.shipment}</td>
                                            <td className="h-10 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">Rs {revenueItem.revenue}/-</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}

export default RevenueGenerated





