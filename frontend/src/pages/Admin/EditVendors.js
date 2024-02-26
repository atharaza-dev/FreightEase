import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditVendors() {
    const { id } = useParams();

    const [name, setname] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [Phone, setPhone] = useState('');
    const [RegNumber, setReg] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/auth/find-vendors-info/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const { name, CNIC, Phone, RegNumber, email } = data;
                setname(name);
                setCNIC(CNIC);
                setPhone(Phone);
                setReg(RegNumber);
                setEmail(email);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const updateVendor = async (e) => {
        e.preventDefault();
        const vendorInfoObj = { name, CNIC, Phone, RegNumber, email };
        try {
            const response = await fetch(`http://localhost:5000/api/auth/update-vendors-info/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vendorInfoObj)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
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
            <section className="bg-white shadow-sm rounded-sm border-1 border-gray-250 h-full fontAlt p-10">

                <div class="w-full p-6">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl font-semibold">Edit VENDOR Details</h1>
                    </div>
                    <form>
                        <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
                            <div>
                                <label htmlFor="owner" class="leading-7 text-sm text-gray-600">Vendor Name</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="cnic" class="leading-7 text-sm text-gray-600">CNIC</label>
                                <input type="text" value={CNIC} onChange={(e) => setCNIC(e.target.value)} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="phone" class="leading-7 text-sm text-gray-600">Phone Number</label>
                                <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="reg" class="leading-7 text-sm text-gray-600">Registration Number</label>
                                <input type="text" value={RegNumber} onChange={(e) => setReg(e.target.value)} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="flex justify-end mt-8">
                                <button type="button" onClick={updateVendor} class="w-24 h-10 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                                    Save
                                </button>
                                <Link to='/ams/vendors' class="w-24 h-10 text-center ml-4 text-sm font-semibold rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default EditVendors
