import React from 'react'

function HelpPage() {
    return (
        <div>
            {/* ============================================================================================== */}
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
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
                        <h1 className="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Need Help? </span>We're here!</h1>
                        <p className="heading2 mb-8 leading-relaxed">Navigate through FreightEase's informative FAQs to discover insights into our truck freight services. From booking procedures to transparent pricing, find clarity at every turn. Explore our FAQ section and embark on a journey of seamless freight logistics.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">

                    <div
                        className="mx-auto mt-20 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white"
                    >
                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-xl font2 font-bold">
                                    How do I request a booking?
                                </h2>

                                <span className="relative h-5 w-5 shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 text-m leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>


                    </div>
                </div>
            </section>

            <div className="container flex flex-col justify-center items-center">
                <button className=" btn text-white bg-primColor1 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Have another Question to ask?</button>
            </div>
        </div>
    )
}

export default HelpPage
