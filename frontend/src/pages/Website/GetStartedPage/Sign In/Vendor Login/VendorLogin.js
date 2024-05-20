// import dependencies
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../../../../data/AuthContext';
// importing Assets
import sidePic from '../../../../../assets/imgs/2.png'

function CustomerLogin() {
    document.title = "Sign In";
    const [email, setEmail] = useState("");
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPass] = useState("");
    const passChangeHandler = (e) => {
        setPass(e.target.value);
    }

    const { storeToken, storeVendorStatus } = useAuth();

    const loginClickHandler = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return toast.warn('Enter all details first!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        if (!(email.includes('@') && email.includes('.com'))) {
            return toast.warn('Please enter a valid email!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        const vendorAccObj = {
            email: email,
            password: password,
        }
        console.log(vendorAccObj);

        try {
            const response = await fetch('http://localhost:5000/api/auth/vendor-login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(vendorAccObj),
            });

            if (response.status === 404) {
                toast.error(`Account with these details doesn't exist in our database!`, {
                    position: "top-right",
                    autoClose: 4000,
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
                    autoClose: 4000,
                    theme: "colored",
                });

                const ress = await response.json();
                storeToken(ress.token);
                storeVendorStatus(ress.isVendor);
                window.location.href = '/vms';

            } else if (response.status === 401) {
                toast.error(`Incorrect Password!`, {
                    position: "top-right",
                    autoClose: 4000,
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
                    autoClose: 4000,
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
            <div aria-hidden="true" class="gradientz absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <section className="mainForm bg-gray-900 h-screen">
                <div className="mainForm lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside
                        className="hideThis relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Pattern"
                            src={sidePic}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">

                            <Link
                                className="inline-block rounded-full border border-blue-800 bg-primColor1 p-3 focus:outline-none focus:ring active:text-indigo-500"
                                to="/"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="1em" viewBox="0 0 448 512"
                                    className="arrow-svg"
                                >
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                </svg>
                            </Link>


                            <h1
                                className="mt-6 text-2xl tracking-wide font-semibold fontAlt text-gray-800 sm:text-3xl md:text-4xl"
                            >
                                Login to your Vendor Account!
                            </h1>

                            <p className="mt-4 leading-relaxed fontAlt text-gray-500">
                                Choose your Account Type from below and Get Started by creating new account or Login into your existing account.
                            </p>

                            <Link
                                className="inline-flex items-center gap-2 mt-4 mr-4 rounded border border-blue-800 px-8 py-3 text-indigo-600 hover:bg-primColor1 hover:text-white"
                                to="/shipper-login"
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADPElEQVR4nOWSa0iTcRjFB33vQ/guoXSsRCMisKCSjDStVMqym6ClTewCUaSZpnNeNpe3XXTaUjQjwtTIDzFvuc05XVPTrCyxzMh5gYpiJt5vJ543rEAE3T72wA/Oe54/57w3Due/Ge05rodBwEj1AianIZybpAtj4upDuXvsDm69um6t+fp6szGSgfECg8ZIBgYBA304A91Z5opd4foIR57pMmM1RPwON178W6ANZVB3kpmqCXRwt7nAGMnojJe4eCd1RlvUBhgEXBjOc9EavRFdKTzUneKiKpB5YXNBQ5jDlKXIBROGXZhq8sS0aT8LafI+KjdDc8RhxuaCxoj1X8Z0OzDVvA8zZl/MtvqxkCZvtH4Hak44frW5oFO4UTfRuAfTz70x1xaAhY5jLKTJo13LNacGm8I/P+FteV/oNDRp9MCM2Qfz7Uew0BnEQpo82vUUOA19KuO7rrqgr3IT93O588CEYTemTV6Ya/PDfHsgC2nyaNdf7myhszY9xUitq2hc747Jpr2Yfn4Asy2HWEiTRzs6w7F1flbz/EefbcW4fif7OujvIUiTR7uRKp4fx56xaviq0botGNNux5jO/Tfa7SDPquEXcOwdPOas+aY/OmLV8PGz2oWF9PeGo1ba2V2QqX7oNvyhur/3kRssFXyW3lI3DPdo+sVKtZvNwRn5DzzT8u6Z0lT30NHVg8kf3bA8C2Eh3f66G6KsOxBm5DfFS1V7VxUuzi2Ok+QUz4uVRUhVFKKk4iloBhMTWWpHe3C16T6CtEoE1StwvF6x4N8s7/V+KdcuEtitLjw/UBazJDxFWRScIi9EsqwASdl3IcpSIzEzH2PjExgWizEskUAwWIaAt/nYaUqFV0c2DnepsMssYa8XoT2dW1Igyla/oUenUGFGHhLSVYi/nYvKai36QkLQFxr6p8CrQ8ZqIrivZGUFCemq2YTbuYiX5uBWmhJxEgVixXLcTJWhWyZnWSygO18sCLOUrqwgLk3RHCuRI1Ysw82UbMQkZ+FGUiaiRRmISkzHdaH0TwG9luCPJWz4wddK+L5SwueVAqd6i5cvWMn8+w2Ww66C0y15854aIbY9urIstD/Tmjf3C8F1r5eu5gMYAAAAAElFTkSuQmCC" alt=""></img>
                                <span className="text-sm txt-font ltrspace"> Shipper</span>
                            </Link>

                            <Link
                                className="inline-flex items-center gap-2 rounded bg-primColor1 border border-blue-800 px-8 py-3 text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                to="/vendor-login"
                            >
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADSklEQVR4nO2UWUwTURSG76OIioiyU5dXA0SMS6JP7hsShLZDgdKiolZighpHo4mjIqJIJaitbLJZKJtIlLhCRhNNjBplLVBrKWUojfBgjMYX/U0HKFNptBofOcnJZJIz3/fPmZshZLo8qcHBT35D9o9HOZudtnI22mLl6CPPi1WLGvbQi+pSaVGNghZVK2iRTk6H6JLo4Iqko6FF4nnE07LZR05wNjus3DAsg0MwD3CQP1GzC2tTIapRQlSdgrAqOUJvJSOkIgnB5TIElSYc91jA2eyMEP6h3wr54xxWpFcgrCoFobpkhFQ6wIkIKpMh8CaFgBIp47HAytkYIfy9eQCJDy6xYbqJ1IkTqRFYQiGgWIIFBWLPBRYrxwjhfaZ+yO5fYN2kRkCRBP4FYiRVrmJHWwmEPdJKvo+0kItTBGYLxwjhPcYPoO5msb+m9i8UI6o0DUu0MiRWrOQF7XqChpyxblITDD8mX20PibeLwGS2MkJ4d58J0qZMNrBYioBC8XjqeKwuV2H48yjkjVmQla3gBW90kwJHd9cTjLYQsYvAaLYwQnhnjxGSO2fZ1HvZeNr/DiIthVVlY/Bjj7TwzdsJqnS5WwFbxK+r1kXQazIzQniHoQ9xDQwboolHc98LvBjo4OG0A34lGnPzokEVR7kVNObygi8uazIYTYwQ3tbVg7i60+x87S4E5seisfsZD597ZQffPrnbIS1axgsGmgleVU52m378owvX1NVrYoTwtx0GxOpPsX7XYjHvagx81dFjYPUOzLm8DbNztkJSGDnlFLl0C5k8xh0GIyOEv2nvQkz1SdY3P4Zfh894ah5+aQtmZW+G5EbE3wh6GSG8sfkR4s5kvF98Ph4+6nFwzlbMurgF3tmbMDNrI8SacKfgpT4Iddcj+atbQVuXgZmAF5RWgVIecHbECakztfeFTZh5fiO8Mtcj7tpSXlB/PcJl/rYmfKrgbXv39tdtnd9evevE7oNHkH74ODQaLQ5m0Ijdm+ZM7ZW5ATPOrceMs+ucgjRVisu8436klXwbbSHb3P42pIoDQ45BxwOqDNqRavB3v5m/nSeUcv8hwSv/kCr2pf/Peb4SlKq1lFKVIUnZt+aPw/8wP11EWD8BaMcTnCyyvYYAAAAASUVORK5CYII=" alt=""></img>

                                <span className="text-sm txt-font ltrspace"> Vendor </span>
                            </Link>


                            <form method="POST" className="mt-8 grid grid-cols-6 gap-6 fontAlt">
                                <div class="flex items-center" style={{ display: 'none' }}>
                                    {/* <input type="radio" id="radioButton" class="hidden" checked={isShipper} value={isShipper} /> */}
                                    <label htmlFor="radioButton" className="cursor-not-allowed select-none">
                                        <div className="bg-blue-500 border-2 border-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </label>
                                    <span class="ml-2 text-gray-700">Shipper</span>
                                </div>
                                <div class="col-span-6">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input value={email} onChange={emailChangeHandler} type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div class="col-span-6">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
                                    <input value={password} onChange={passChangeHandler} type="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button onClick={loginClickHandler} class=" activeBtn text-white bg-primColor1 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
                                        Sign In
                                    </button>
                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Don't have any account?
                                        <Link to="/shipper-registration" className="text-primColor1 underline px-2">Create here!</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div >
                <ToastContainer />
            </section >
        </>
    )
}

export default CustomerLogin
