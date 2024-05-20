import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../data/AuthContext';
import { Link } from 'react-router-dom'

function AdminLogin() {

    const [email, setEmail] = useState('');
    const userChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPass] = useState('');
    const passChangeHandler = (e) => {
        setPass(e.target.value);
    }
    const { storeToken, storeAdminStatus } = useAuth();

    const loginClickHandler = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return toast.warning('Fill all the details first!', {
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

        const adminAccObj = {
            email: email,
            password: password
        }


        try {
            const response = await fetch('http://localhost:5000/api/auth/admin-login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(adminAccObj),
            });

            if (response.status === 403) {
                toast.error(`Not a ADMIN!`, {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else if (response.status === 201) {
                toast.success('Logged In Successfully!', {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                const ress = await response.json();
                storeToken(ress.token);
                storeAdminStatus(ress.isAdmin);

                console.table('from login', ress.isAdmin);
                window.location.href = '/ams'

            } else if (response.status === 401) {
                toast.error(`Incorrect Credentials!`, {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error('Error Occurred, Try Again!', {
                    position: "top-right",
                    autoClose: 8000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <div class="flex h-screen w-full items-center justify-center bg-gray-100 fontAlt">
                <div class="w-full max-w-3xl overflow-hidden rounded-sm bg-white shadow-lg sm:flex">
                    <div class="sideImg m-2 w-full rounded-sm bg-gray-400 bg-cover bg-center text-white sm:w-2/5"></div>
                    <div class="w-full sm:w-3/5">
                        <div class="p-8">
                            <h1 class="text-3xl fontAlt font-medium text-slate-700">Sign In</h1>
                            <p class="mt-2 mb-5 text-base leading-tight text-gray-600">Get into your admin account and manage things!</p>
                            <form method='POST' class="mt-8">
                                <div class="relative mt-2 w-full">
                                    <label for="name" className="leading-7 text-medium text-gray-600">Email</label>
                                    <input type="text" value={email} onChange={userChangeHandler} className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="relative mt-2 w-full">
                                    <label for="name" className="leading-7 text-medium text-gray-600">Password</label>
                                    <input type="password" value={password} onChange={passChangeHandler} className="w-full bg-white rounded-sm border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button onClick={loginClickHandler} className="activeBtn flex w-full mt-3 text-center justify-center mx-auto text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-sm  text-lg">
                                    Sign In
                                </button>
                            </form>
                            <div class="mt-4 text-center">
                                <p class="text-sm fontAlt text-gray-600"><span className='text-red-500'>Trouble Sign In?</span> : Try Again Later! <Link to="/contact-us" class="font-bold text-blue-600 no-underline hover:text-blue-400 ml-2">Back to Website</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default AdminLogin