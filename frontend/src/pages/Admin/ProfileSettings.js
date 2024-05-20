import React, { useEffect, useState } from 'react'
import profile from '../../assets/imgs/profile.png'
import { useAuth } from '../../data/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileSettings() {

    const { adminInfo, backendURL } = useAuth();

    //useStates for inputs
    const [name, setName] = useState(adminInfo.name);
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const [email, setEmail] = useState(adminInfo.email);
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState(adminInfo.password);
    const passChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const updateShipper = async (e) => {
        e.preventDefault();
        const shipperInfoObj = { name, email, password };
        console.log(shipperInfoObj);
        try {
            const response = await fetch(`${backendURL}/api/auth/update-admin-info`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shipperInfoObj)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
            toast.success('Updated Successfully!', {
                position: "top-right",
                theme: "colored",
            });
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    }

    return (
        <>
            <section className="overflow-hidden fontAlt">
                {/* <h1 class="fontAlt sm:text-6xl mb-4 font-bold text-start text-gray-900"><span className='text-primColor1'>REVENUE GENERATED</span></h1> */}
                <div class="flex items-center justify-between bg-white px-8 text-white shadow-sm rounded-lg border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                        <h1 class="text-8xl font-bold fontAlt tracking-wide text-primColor1">Profile</h1>
                        <p class="mt-2 text-lg text-gray-700">Manage and edit your personal information  and biodata here.</p>
                    </div>
                    <div class="hidden h-22 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="w-40" src={profile} alt="pic" />
                    </div>
                </div>

                <div class="w-full overflow-x-auto fontAlt mt-4 py-6 bg-white rounded-md shadow-sm border-1 border-gray-250">
                    <div class="flex items-center justify-center">

                        <div class="mx-auto w-full max-w-[700px] py-12">
                            <h1 className='text-center font-semibold tracking-wide text-lg pb-12'>PERSONAL ADMIN INFORMATION</h1>
                            <form class="py-4 px-9">
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Full Name</label>
                                    <input value={name} onChange={nameChangeHandler} type="text" class="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={adminInfo.name} />
                                </div>
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Email</label>
                                    <input value={email} onChange={emailChangeHandler} type="email" class="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={adminInfo.email} />
                                </div>
                                <div class="relative mb-4">
                                    <label for="email" class="leading-7 text-sm fontAlt text-gray-600">Password</label>
                                    <input value={password} onChange={passChangeHandler} type="text" class="w-full bg-gray-100 rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder={adminInfo.password} />
                                </div>

                                <div class="mb-6 pt-4">
                                    <label class="mb-4 block text-xl font-semibold text-[#07074D]">
                                        Upload File <span className='text-sm text-gray-400'>(Optional)</span>
                                    </label>

                                    <div class="flex items-center justify-center w-full">
                                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-sm cursor-pointer bg-gray-50">
                                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" class="hidden" />
                                        </label>
                                    </div>

                                </div>

                                <div class="relative mb-4">
                                    <button onClick={updateShipper} class="text-white w-full bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-md my-3">Save</button>
                                    <button class="text-white w-full bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-md">Cancel</button>
                                </div>
                                <div class="relative mb-4">
                                    <p className='text-sm text-red-700 text-center'>*To see changes, make sure re-login in to your account!</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section >
            <ToastContainer></ToastContainer>
        </>
    )
}

export default ProfileSettings
