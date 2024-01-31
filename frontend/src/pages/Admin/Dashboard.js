import React from 'react';
import './AdminPage.css'

function Dashboard() {
    const posterHeight = 37; // Assuming the initial height of the poster div is 32
    const contactHeight = 72; 

    return (
        <div className='flex flex-col w-full sm:flex-row'>
            <div className='flex-1 p-10 pl-16'>
                <div className="title">
                    <h1 className="fontH1 sm:text-3xl font-semibold text-primColor1">#Welcome</h1>
                    <p className="heading2 font-bold sm:text-6xl tracking-wide">Athar Raza Saeedi</p>
                </div>
                <div className="flex flex-col w-full lg:flex-row lg:gap-8">
                    <div className="poster h-52 rounded-lg bg-gray-800 lg:w-4/5 my-4">poster</div>
                    <div className="contact h-72 rounded-lg bg-gray-800 lg:w-2/5 my-4">contact</div>
                </div>

                <div className="flex flex-col w-full lg:flex-row lg:gap-8">
                    <div className="sales rounded-lg bg-gray-800 lg:w-4/5" style={{ height: `calc(70 - ${posterHeight}px)` }}>sales</div>
                    <div className="h-48 rounded-lg bg-gray-800 lg:w-2/5 " style={{ height: `calc(70 - ${contactHeight}px)` }}>Revenue</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
