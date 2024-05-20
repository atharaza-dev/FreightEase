import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage() {
    document.title = 'Contact - FreightEase'

    const sendEmailHandler = () => {
        toast.success('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <>
            {/* ============================================================================================== */}

            {/* ============================================================================================== */}

            <section className="relative  overflow-hidden bg-gradient-to-b from-blue-100 via-transparent to-transparent xl:pt-28">
                <div className="relative z-10">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                            <defs>
                                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                    patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                            </rect>
                        </svg>
                    </div>
                </div>
                <div className="relative pt-24 sm:py-16 lg:pt-0 xl:pb-0">
                    <div className="pt-24 item-center justify-center mx-24">
                        <h1 className="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Get </span>in Touch with us!</h1>
                        <p className="heading2 mb-8 leading-relaxed">Connect with ease through FreightEase's Contact Us page. Our dedicated team awaits to address your inquiries promptly and provide tailored solutions. Reach out today to embark on a seamless journey towards efficient freight logistics.</p>
                    </div>
                </div>
            </section>

            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '450px' }}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameborder="0" style={{ minHeight: '450px', border: '0px' }} allowfullscreen="" aria-hidden="false"
                                    tabindex="0" title='location'></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 className="text-primColor2 fontAlt text-xl mb-2">Contact Us</h6>
                            <h1 className="display-6 fontAlt font-semibold mb-4"><span className='text-primColor1'>#Get </span>in touch with us!</h1>
                            <p className="mb-4">Got questions, suggestions, or just want to say hi? Fill out our contact form below, and we'll get back to you as soon as possible. Your feedback matters to us!</p>
                            <form action="https://formspree.io/f/moqgknoe" method='POST'>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div>
                                            <label for="name" className="leading-7 text-medium text-gray-600">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label for="name" className="leading-7 text-medium text-gray-600">Email</label>
                                            <input type="email" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div>
                                            <label for="name" className="leading-7 text-medium text-gray-600">Subject</label>
                                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div>
                                            <label for="message" className="leading-7 text-medium text-gray-600">Message</label>
                                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={sendEmailHandler} className=" btn text-white bg-primColor1 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default ContactPage
