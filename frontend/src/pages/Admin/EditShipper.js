import React from 'react'

function EditShipper() {
    return (
        <>
            <section className="bg-white shadow-sm rounded-sm border-1 border-gray-250 h-full fontAlt p-10">

                <div class="w-full p-6">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl font-semibold">Edit SHIPPER Details</h1>
                    </div>
                    <form>
                        <div class="grid sm:grid-cols-1 gap-y-7 gap-x-12">

                            <div>
                                <label htmlFor="owner" className="leading-7 text-sm text-gray-600">Shipper Name</label>
                                <input type="text" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="vendor name" />
                            </div>

                            <div>
                                <label htmlFor="cnic" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
                            </div>

                            <div>
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="text" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="" />
                            </div>

                        </div>
                        <div class="!mt-10 flex justify-end">
                            <button type="button" class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                                Save
                            </button>
                            <button type="button" class="min-w-[150px] py-3 px-4 ml-4 text-sm font-semibold rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default EditShipper
