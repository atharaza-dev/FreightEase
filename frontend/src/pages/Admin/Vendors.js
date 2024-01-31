import React from 'react';
import './AdminPage.css';

function vendors() {
    const posterHeight = 37; // Assuming the initial height of the poster div is 32
    const contactHeight = 72;

    return (
        <div className='flex flex-col w-full sm:flex-row'>
            <div className='flex-1 p-10 pl-16'>
                <div className="title">
                    <h1 className="fontH1 sm:text-3xl font-semibold text-primColor1">#Vendor Connect</h1>
                    <p className="heading2 font-bold sm:text-6xl tracking-wide">Users: Vendors</p>
                </div>

                <div className="container py-12 px-4 mx-auto"> {/* Added a wrapping div with padding */}
                    <table className="table-auto w-full text-left whitespace-no-wrap fontAlt">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-primColor1 rounded-tl rounded-bl">Plan</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium  text-white text-sm bg-primColor1">Speed</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium  text-white text-sm bg-primColor1">Storage</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium  text-white text-sm bg-primColor1">Price</th>
                                <th className="w-10 title-font tracking-wider font-medium  text-white text-sm bg-primColor1 rounded-tr rounded-br">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 text-center">
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default vendors;
