import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../data/AuthContext';

function EditShipper() {

    const { id } = useParams();

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { backendURL } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendURL}/api/auth/find-shippers-info/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const { name, email, password } = data;
                setname(name);
                setEmail(email);
                setPassword(password);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const updateShipper = async (e) => {
        e.preventDefault();
        const shipperInfoObj = { name, email, password };
        try {
            const response = await fetch(`${backendURL}/api/auth/update-shippers-info/${id}`, {
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
            <section className="bg-white shadow-sm rounded-sm border-1 border-gray-250 h-full fontAlt p-10">

                <div class="w-full p-6">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl font-semibold">Edit SHIPPER Details</h1>
                    </div>
                    <form>
                        <div class="grid sm:grid-cols-1 gap-y-7 gap-x-12">

                            <div>
                                <label htmlFor="owner" className="leading-7 text-sm text-gray-600">Shipper Name</label>
                                <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="cnic" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                        </div>
                        <div class="!mt-10 flex justify-end">
                            <button onClick={updateShipper} type="button" on class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-green-500 hover:bg-green-600 focus:outline-none">
                                <span><i class="fa-solid fa-floppy-disk mr-2"></i></span>Update
                            </button>
                            <Link to='/ams/shippers' class="min-w-[150px] py-3 px-4 ml-4 text-sm font-semibold text-center rounded text-white bg-red-500 hover:bg-red-600 focus:outline-none">
                                <span><i class="fa-solid fa-xmark mr-2"></i></span>Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default EditShipper
