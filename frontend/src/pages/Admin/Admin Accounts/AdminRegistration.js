import React from 'react'
function AdminRegistration() {
    return (
        <>
            <div class="flex h-screen w-full items-center justify-center bg-gray-100">
                <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
                    <div class="sideImg m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5"></div>
                    <div class="w-full sm:w-3/5">
                        <div class="p-8">
                            <h1 class="text-3xl fontAlt font-medium text-slate-700">Sign In</h1>
                            <p class="mt-2 mb-5 text-base leading-tight text-gray-600">Get into your admin account and manage things!</p>
                            <form class="mt-8">
                                <div class="relative mt-2 w-full">
                                    <label for="name" className="leading-7 text-medium text-gray-600">User ID</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="relative mt-2 w-full">
                                    <label for="name" className="leading-7 text-medium text-gray-600">Password</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button className="flex w-full mt-3 text-center justify-center mx-auto text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Sign In
                                </button>
                            </form>
                            <div class="mt-4 text-center">
                                <p class="text-sm fontAlt text-gray-600">To create another account? <a href="/admin" class="font-bold text-blue-600 no-underline hover:text-blue-400">Contact Super Admin</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminRegistration
