import React from 'react'
import logo from '../../assets/imgs/ogo.png'

function Invoice() {
    return (
        <>
            <div class="max-w-[85rem] px-2 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 fontAlt">
                <div class="sm:w-11/12 lg:w-3/4 mx-auto">

                    <div class="flex flex-col p-4 sm:p-10 bg-white rounded-m shadow-sm border-1 border-gray-250">

                        <div class="flex justify-between">
                            <div>
                                <img src={logo} alt="err" className='w-20' />
                            </div>

                            <div class="text-end">
                                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 ">Invoice #</h2>
                                <span class="mt-1 block text-gray-500">3682303</span>
                            </div>

                        </div>

                        <div class="mt-12 grid sm:grid-cols-3 gap-3">

                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 ">Shipped to:</h3>
                                <h3 class="text-lg font-semibold text-blue-800 underline ">Athar Raza</h3>
                                <address class="mt-2 not-italic text-gray-500">
                                    House 6, Street 1<br />
                                    Islam Nagar, Jail Road,<br />
                                    United States<br />
                                </address>
                            </div>

                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 ">Vendor:</h3>
                                <h3 class="text-lg font-semibold text-blue-800 underline ">MZ Transport</h3>
                                <address class="mt-2 not-italic text-gray-500">
                                    House 6, Street 1<br />
                                    Islam Nagar, Jail Road,<br />
                                    United States<br />
                                </address>
                            </div>

                            <div class="sm:text-end space-y-2">

                                <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                    <dl class="grid sm:grid-cols-5 gap-x-3">
                                        <dt class="col-span-3 font-semibold text-gray-800 ">Invoice date:</dt>
                                        <dd class="col-span-2 text-gray-500">03/10/2018</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                                <div class="hidden sm:grid sm:grid-cols-5">
                                    <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Route</div>
                                    <div class="text-start text-xs font-medium text-gray-500 uppercase">Weight</div>
                                    <div class="text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
                                    <div class="text-end text-xs font-medium text-gray-500 uppercase">Charges</div>
                                </div>

                                <div class="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                                <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    <div class="col-span-full sm:col-span-2">
                                        <p class="font-medium text-gray-800 ">{`FSD -> LHR`}</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-800 ">68</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-800 ">5500</p>
                                    </div>
                                    <div>
                                        <p class="sm:text-end text-gray-800 ">Rs 374000</p>
                                    </div>
                                </div>

                                <div class="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>

                            </div>
                        </div>
                        <div class="mt-8 flex sm:justify-end">
                            <div class="w-full max-w-2xl sm:text-end space-y-2">

                                <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                                    <dl class="grid sm:grid-cols-5 gap-x-3">
                                        <dt class="col-span-3 font-semibold text-gray-800 ">Subtotal:</dt>
                                        <dd class="col-span-2 text-gray-500">Rs 374000/-</dd>
                                    </dl>

                                    <dl class="grid sm:grid-cols-5 gap-x-3">
                                        <dt class="col-span-3 font-semibold text-gray-800 ">Total:</dt>
                                        <dd class="col-span-2 text-gray-500">Rs 374000/-</dd>
                                    </dl>

                                    <dl class="grid sm:grid-cols-5 gap-x-3">
                                        <dt class="col-span-3 font-semibold text-gray-800 ">Service Charges:</dt>
                                        <dd class="col-span-2 text-gray-500">Rs 3740/-</dd>
                                    </dl>

                                    <dl class="grid sm:grid-cols-5 gap-x-3">
                                        <dt class="col-span-3 font-semibold text-gray-800 ">Amount paid:</dt>
                                        <dd class="col-span-2 text-gray-500">Paid</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 sm:mt-12">
                            <h4 class="text-lg font-semibold text-gray-800 ">Thank you!</h4>
                            <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                            <div class="mt-2">
                                <p class="block text-sm font-medium text-gray-800 ">freightease.com</p>
                                <p class="block text-sm font-medium text-gray-800 ">+92 321 7678097</p>
                            </div>
                        </div>

                        <p class="mt-5 text-sm text-gray-500">© 2024 FreightEase.</p>
                    </div>
                    <div class="mt-2 flex justify-end gap-x-3">
                        <button class="text-white inline-flex justify-center items-center gap-2 bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm my-3">Download Invoice</button>
                        <button class="text-white inline-flex justify-center items-center gap-2 bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm my-3">Print PDF</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice
