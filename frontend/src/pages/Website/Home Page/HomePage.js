// import dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// importing Assets 
import './HomePage.css';
import about1 from '../../../assets/imgs/about-1.jpg'
import about2 from '../../../assets/imgs/container.png'

function HomePage() {
    document.title='Home - FreightEase'
    return (
        <>
            {/* ======================================== Top Gradient ======================================== */}
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            {/* ============================================================================================== */}


            {/* ======================================== Hero Section ======================================== */}
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
                    <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-6xl text-center">
                            <h1 className="mt-5 text-3xl font-light fontH1 leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                                Connecting Miles, Delivering Smiles <br className="sm:hidden" />
                                <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                                    <svg className="absolute -bottom-8 hidden w-2/3 text-blue-600 sm:block" viewBox="0 0 490 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6312 17.089C14.4676 17.089 18.4867 16.911 22.3231 16.733C23.9673 16.733 25.4288 16.555 27.073 16.555C34.0151 16.199 40.9571 15.8429 47.8992 15.4869C56.3028 15.1309 64.5237 14.5969 72.9272 14.2408C84.8018 13.5288 96.6764 12.9948 108.551 12.2827C111.291 12.1047 114.032 12.1047 116.772 11.9267C123.714 11.5707 130.656 11.2147 137.598 11.0366C144.54 10.6806 151.482 10.3246 158.424 10.1466C161.165 9.96859 163.905 9.79058 166.645 9.79058C177.606 9.43455 188.75 9.07853 199.712 8.72251C206.471 8.5445 213.23 8.36649 220.172 8.01047C222.913 8.01047 225.47 7.83246 228.211 7.83246C238.806 7.65445 249.585 7.47644 260.181 7.29843C270.776 7.12042 281.19 6.94241 291.785 6.7644C294.526 6.7644 297.266 6.7644 300.189 6.7644C307.131 6.7644 313.89 6.7644 320.832 6.7644C331.611 6.7644 342.207 6.7644 352.985 6.58639C356.456 6.58639 359.927 6.58639 363.398 6.58639C370.706 6.58639 378.013 6.58639 385.321 6.58639C385.869 6.58639 386.6 6.58639 387.148 6.58639C370.706 6.7644 354.081 6.94241 337.64 7.29843C330.698 7.47644 323.938 7.47644 316.996 7.65445C314.073 7.65445 310.967 7.65445 308.044 7.83246C297.997 8.01047 288.132 8.36649 278.084 8.5445C266.575 8.90052 255.065 9.07853 243.556 9.43455C241.547 9.43455 239.72 9.61256 237.71 9.61256C231.499 9.96859 225.47 10.1466 219.259 10.5026C206.836 11.0366 194.414 11.5707 181.991 12.1047C180.164 12.1047 178.337 12.2827 176.51 12.4607C170.482 12.8168 164.27 13.3508 158.242 13.7068C147.281 14.4188 136.502 15.1309 125.541 15.8429C122.618 16.0209 119.512 16.377 116.589 16.555C109.647 17.089 102.705 17.623 95.763 18.3351C86.9941 19.0471 78.0424 19.7592 69.2735 20.4712C57.0335 21.5393 44.6109 22.6073 32.3709 23.6754C29.4479 23.8534 26.5249 24.2094 23.4193 24.3874C18.1213 24.9215 12.8234 25.4555 7.52554 25.9895C6.97749 25.9895 6.42943 26.3455 6.42943 27.0576C6.42943 27.5916 6.97749 28.1257 7.52554 28.1257C9.53509 28.1257 11.362 28.3037 13.3715 28.3037C13.0061 29.1937 12.8234 29.7277 12.8234 30.2618C12.8234 32.2199 14.4676 34 16.6599 34C31.8228 33.1099 46.8031 32.0419 61.9661 31.3298C75.1195 30.7958 88.2729 30.0838 101.426 29.5497C115.859 28.8377 130.473 28.1257 144.906 27.5916C149.473 27.4136 154.04 27.2356 158.607 26.8796C159.886 26.8796 161.165 26.7016 162.626 26.7016C186.01 26.1675 209.394 25.4555 232.778 24.9215C245.2 24.5654 257.806 24.2094 270.228 24.0314C274.796 23.8534 279.18 23.8534 283.747 23.6754C307.679 23.3194 331.611 22.9634 355.543 22.6073C365.773 22.4293 376.004 22.2513 386.234 22.0733C395.003 21.8953 403.772 21.8953 412.541 21.5393C419.848 21.3613 426.973 21.0052 434.281 20.8272C437.934 20.6492 441.588 20.6492 445.059 20.4712C453.28 19.9372 461.501 19.4031 469.722 18.8691C469.174 19.5812 469.174 20.6492 469.356 21.3613C469.539 22.2513 470.087 22.9633 471.001 23.3194C471.731 23.6754 472.827 24.0314 473.558 23.6754C475.385 22.9634 477.212 22.2513 478.856 21.5393C478.856 21.5393 478.856 21.5393 478.673 21.5393C478.856 21.5393 478.856 21.3613 479.039 21.3613C479.221 21.3613 479.404 21.1832 479.404 21.1832H479.221C480.135 20.8272 481.048 20.4712 482.144 19.9372C483.058 19.5812 484.154 19.0471 485.067 18.6911C486.164 18.1571 487.077 17.623 488.173 17.089C489.269 16.555 490 15.1309 490 13.8848C490 13.1728 489.817 12.6387 489.452 11.9267C489.087 11.2147 488.173 10.3246 487.26 10.1466C486.346 9.96859 485.433 9.79058 484.519 9.79058C484.337 9.79058 484.154 9.79058 483.971 9.79058C483.423 9.79058 482.693 9.79058 482.144 9.96859C480.683 10.1466 479.404 10.3246 477.943 10.3246C476.847 10.3246 475.75 10.5026 474.472 10.5026C471.366 10.6806 468.443 10.8586 465.337 11.2147C464.607 11.2147 463.693 11.3927 462.962 11.3927C463.328 11.0366 463.51 10.6806 463.51 10.3246C463.693 9.96859 463.693 9.61257 463.693 9.25654C463.693 9.07853 463.693 8.72251 463.876 8.5445C463.876 8.18848 463.876 7.83246 463.693 7.65445C463.693 7.65445 463.876 7.65445 463.876 7.47644C464.424 7.12042 464.972 6.7644 465.337 6.05236C465.703 5.51832 465.885 4.80628 465.885 4.09424C465.885 3.3822 465.703 2.84817 465.337 2.13613C465.155 1.95812 464.972 1.60209 464.789 1.42408C464.241 0.890052 463.693 0.712042 463.145 0.534031C462.049 0.17801 460.77 0 459.491 0C458.395 0 457.482 0 456.386 0C454.924 0 453.463 0 452.001 0C449.992 0 447.799 0 445.79 0C440.309 0 434.829 0 429.348 0C424.233 0 418.935 0 413.82 0C409.07 0 404.503 0 399.753 0C380.936 0 362.302 0.17801 343.486 0.356021C329.419 0.534031 315.352 0.712042 301.285 0.712042C295.074 0.712042 288.68 0.890052 282.468 1.06806C268.402 1.42408 254.335 1.60209 240.268 1.95812C236.249 1.95812 232.23 2.13613 228.211 2.13613C225.836 2.13613 223.643 2.31414 221.268 2.31414C207.384 2.84817 193.5 3.3822 179.616 3.91623C175.414 4.09424 171.212 4.27225 166.828 4.45026C164.453 4.45026 162.078 4.62827 159.703 4.80628C145.819 5.51832 132.118 6.23037 118.233 6.94241C111.109 7.29843 103.984 7.65445 96.8591 8.18848C84.6192 8.90052 72.3792 9.61256 60.3219 10.5026C49.7261 11.2147 39.1303 11.7487 28.5345 12.2827C26.8903 12.4607 25.2461 12.4607 23.4193 12.6387C20.679 12.8168 17.9387 12.8168 15.1984 12.9948C12.8234 13.7068 10.2658 13.7068 7.89092 13.7068C7.70823 12.9948 6.97749 12.4607 6.42943 12.6387C4.78525 12.6387 3.32376 12.8168 1.67958 12.9948C0.948839 13.1728 0.218094 13.5288 0.0354073 14.2408C-0.147279 15.1309 0.40078 16.0209 1.13152 16.199C1.86227 16.377 2.59301 16.555 3.32376 16.733C4.05451 16.911 4.60256 16.911 5.33331 16.911C7.16017 17.089 8.80435 17.089 10.6312 17.089ZM438.117 11.3927C440.309 11.3927 442.684 11.3927 444.876 11.3927C445.059 11.9267 445.425 12.2827 445.79 12.6387C444.876 12.6387 443.963 12.8168 443.232 12.8168C441.588 12.8168 439.944 12.9948 438.3 12.9948C430.992 13.1728 423.868 13.5288 416.56 13.7068C413.272 13.8848 409.983 14.0628 406.695 14.0628C401.58 14.0628 396.282 14.2408 391.167 14.2408C379.292 14.4188 367.6 14.5969 355.726 14.7749C332.707 15.1309 309.871 15.4869 286.853 15.8429C270.411 16.0209 253.969 16.555 237.528 17.089C212.865 17.801 188.02 18.3351 163.357 19.0471C158.424 19.2251 153.492 19.4031 148.559 19.7592C134.493 20.4712 120.426 21.0052 106.359 21.7173C92.6573 22.4293 78.7732 22.9634 65.0717 23.6754C63.7929 23.6754 62.5141 23.8534 61.2353 23.8534C64.889 23.4974 68.7254 23.3194 72.3792 22.9633C85.3499 22.0733 98.3206 21.0052 111.291 20.1152C115.859 19.7592 120.426 19.4031 124.81 19.0471C127.185 18.8691 129.56 18.6911 131.752 18.6911C145.454 17.9791 158.972 17.089 172.491 16.377C175.049 16.199 177.789 16.0209 180.347 15.8429C184.183 15.6649 188.02 15.4869 191.673 15.4869C205.557 14.9529 219.442 14.4188 233.326 13.8848C236.431 13.7068 239.537 13.7068 242.46 13.5288C243.191 13.5288 244.104 13.5288 244.835 13.5288C247.027 13.5288 249.219 13.5288 251.229 13.3508C265.113 12.9948 279.18 12.8168 293.064 12.4607C299.458 12.2827 305.852 12.1047 312.246 12.1047C332.89 11.9267 353.716 11.7487 374.36 11.5707C395.917 11.5707 417.108 11.3927 438.117 11.3927Z" fill="currentColor" />
                                        <path d="M38 42C38.5523 42 39 41.5523 39 41C39 40.4477 38.5523 40 38 40C37.4477 40 37 40.4477 37 41C37 41.5523 37.4477 42 38 42Z" fill="currentColor" />
                                    </svg>the FreightEase</span>
                            </h1>
                            <p className="mx-auto mt-10 max-w-4xl text-base leading-7 text-gray-600">FreightEase is the city's leading solution, setting new standards for logistics and transportation excellence.
                                It empowers freight and logistics services to excel.</p>


                            <div className="group mt-10 z-20 relative mx-auto max-w-3xl border border-gray-900 p-1 focus-within:ring-1 focus-within:ring-gray-900 sm:flex-row">
                                <input placeholder="Click to generate a quick estimated Quote of your future shipments..." className="block w-full bg-transparent px-4 py-2 placeholder-gray-400 outline-none" style={{ pointerEvents: 'none' }} />
                                <div className="flex border-gray-900 sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
                                    <Link to="/quote-generator"><button type="submit" className="fontAlt inline-flex w-full items-center justify-center bg-slate-900 px-6 py-2 text-lg font-medium text-white outline-none transition-all hover:bg-gray-600 focus:bg-gray-600 sm:hover:translate-x-2 sm:hover:-translate-y-2">Generate Quote</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mx-auto mt-10 mb-16 flex w-fit flex-col items-center justify-center divide-y divide-gray-300 sm:flex-row sm:divide-y-0 sm:divide-x md:mt-16">
                        <div className="px-4 py-2">
                            <p className="flex items-center space-x-3 text-2xl font-bold">

                                <span className="w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="#2f77ff" stroke-linecap="round" stroke-linejoin="round" d="M13.2463 3.51912C13.2463 4.45527 12.9424 5.35308 12.4014 6.01504C11.9745 6.53735 11.4277 6.87906 10.8402 7L3.1533 6.99798C2.56945 6.87529 2.02629 6.53447 1.6018 6.01504C1.06083 5.35308 0.756917 4.45527 0.756917 3.51912L0.7569 2.02218C0.756897 1.83787 0.877987 1.67545 1.05463 1.62284C4.93503 0.467077 9.06813 0.46708 12.9485 1.62285C13.1252 1.67546 13.2463 1.83787 13.2463 2.02218V3.51912Z"></path><path stroke="#2f77ff" stroke-linecap="round" stroke-linejoin="round" d="M6.99622 10.2227V13.25"></path><path stroke="#2f77ff" stroke-linecap="round" stroke-linejoin="round" d="M4.59241 13.25H9.4001"></path><path fill="#D7E0FF" stroke="#2f77ff" d="M3.52159 6.59555C3.58217 8.50666 5.08952 10.2151 7.0016 10.2151C8.94734 10.2151 10.4129 8.53676 10.4799 6.59217C10.4925 6.22608 10.4993 5.85621 10.4993 5.48257C10.4993 3.96735 10.3982 2.4241 10.2328 1.05536C9.19364 0.823367 8.12497 0.75 7.0016 0.75C5.87822 0.75 4.78799 0.814457 3.77037 1.05536C3.59603 2.41834 3.50391 3.96735 3.50391 5.48257C3.50391 5.85749 3.50995 6.22845 3.52159 6.59555Z"></path></svg></span>
                                <span>500+</span>
                            </p>
                            <p className="text-sm fontAlt text-gray-600">Achievements & Awards</p>
                        </div>
                        <div className="px-4 py-2">
                            <p className="flex items-center space-x-3 text-2xl font-bold">

                                <span className="w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path fill="#D7E0FF" stroke="#2f77ff" stroke-linecap="round" stroke-linejoin="round" d="M7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25Z"></path><path stroke="#2f77ff" stroke-linecap="round" stroke-linejoin="round" d="M3.8269 7.96143C4.30767 9.69219 6.23075 10.7499 7.96152 10.2691C9.01921 9.8845 9.88459 9.01912 10.1731 7.96143"></path><path stroke="#2f77ff" stroke-linecap="round" d="M4.45193 5.10068L4.45193 5.80068"></path><path stroke="#2f77ff" stroke-linecap="round" d="M9.54813 5.10068L9.54813 5.80068"></path></svg></span>
                                <span>100%</span>
                            </p>
                            <p className="text-sm fontAlt text-gray-600">Happy Clients in 10 years</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================================================================================== */}


            {/* ======================================== About Us Section ======================================== */}
            <div className="container-xxl  sm:h-full lg:my-24">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src={about2} alt="" style={{ objectFit: 'cover' }} />
                                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src={about1} alt="" style={{ width: '200px', height: '200px' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="text-indigo-800 fontAlt text-xl mb-2">About Us</h6>
                                <h1 className="display-6 fontAlt font-semibold mb-4"><span className='text-indigo-800'>#1 </span>Nationwide Freight and
                                    <br className="hidden lg:inline-block" />Logistics  Solutions!</h1>
                                <p>At FreightEase, our voyage into the world of freight and logistics unfolds with a warm welcome.Explore the driving force behind our commitment to providing dependable, cost-efficient, and innovative logistics solutions that keep the world moving.</p>
                                <div className="row g-2 mb-4 pb-2 mt-4">
                                    <div className="col-sm-6">
                                        <span className='flex items-center'>
                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1877f2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                            Fully Licensed
                                        </span>
                                    </div>

                                    <div className="col-sm-6">
                                        <span className='flex items-center'>
                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1877f2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                            Parcel Checkpoints Tracking
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span className='flex items-center'>
                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1877f2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                            Affordable Cost
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span className='flex items-center'>
                                            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#1877f2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                            Delivery on Time
                                        </span>
                                    </div>
                                </div>
                                <div className="row g-4 sm:h-28 :mt-2">
                                    <div className="col-sm-6 self-end">
                                        <Link to='/about-us' className="btn bg-indigo-800 text-white py-3 px-5 hover:bg-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================== */}


            {/* ======================================== Statistics Section ====================================== */}
            <section>
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="display-5 fontAlt font-semibold mb-4">
                            Our Unmatched Statistics
                        </h2>
                        <p className="w-full text-base">FreightEase provides invaluable insights into the performance of our transportation, freight, and logistics services. Discover data-driven solutions to optimize your supply chain and streamline operations.</p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Sales
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    $4.8m
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Official Addons
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total Addons
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ========================================= Features Section ====================================== */}
            <div className="container-xxl  sm:h-full lg:my-24">
                <div className="container">
                    <div className="row g-5">

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="text-indigo-800 fontAlt text-xl mb-2">Features</h6>
                                <h1 className="display-6 fontAlt font-semibold mb-4"><span className='text-indigo-800'>#Explore </span>Our Exceptional
                                    <br className="hidden lg:inline-block" />Features That Set Us Apart!</h1>
                                <p>Explore our Feature Highlights and Service Offerings to unlock the full potential of your logistics and transportation needs. Discover a comprehensive range of solutions that drive efficiency and excellence in the industry.</p>

                                <div className="row gy-5 gx-4 mt-3">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0 btn-square me-3">
                                                <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2Yz2/SYBjH+xf4fwDDojEuXkzoLpDJDjOBeqOERKoZc2hU2Mxc2C5kZka9sHgwlETvO3hST/sDhJXp4kHFi5NScEcPr3nf8lJa+uPlx0t26JN8kqYJTz/fpw8tgWG88sorr7yaVrGFxmLosfwrlG8AM6wBWaegc9GdZrAgRxlaFco3ms7ijXHFQRBxBIL5o580AwAKU9fle1APwE576iaoBmCnMPWggzzVACzFqc8wgExl6pC5dQ2KAWRqU8fyEE76O0DXnor6Lyyp7yNS6wJ5gJGnTi4+HKDrQKdPWOo8IQtAcerGAEZZducr8G3UEH5EHfjX6+DSzgngKh14J46JAtAWtwvgs5AP9Li+fwo4SQXhN0pg4gCTy2tSVgH8FvLwM1effdcCSOrTsQNMY+pY3higg8DyAZM8hN08hitEtkY0pz6I+Uvqt5HH/fEacVLLTxxg2lM3BugYCDjIQ5f53R+Aq7ZBWFKc14jm1EkCzFnIQ0KbX1AATmo7rxHNqdsHUB3lIfD9hAKgEA5rRFscAp8yWJzrcXn7xFIevZfyMrhS/NYP4LhGs5DXAqjWVNsOKBqSYr9GtMURG/Xx5asaRAFoyQ8FqJKLEwWgKa5Rm0ieq7bsA0xD3kkcM564guTHDDDJ1GsG4O+eccW50QPA57Mmd+3+AYjdLoJ4agURy2yjc6RTx784rQMoILp3CJZzJZBIZxE3cyV0ziw/QgB9sgsr+4AXREu47GuiqVsHUBBLW29t+y9tvRs1gD51PHm75pj5BweuUx8OoMlH9w5d+0ee4zvxB2EbIFCoN817DdcGN7q79gi8ePkKAY/xebhOblM3BtD3ezlXcu0P1wnLh6VT+3/2fIXPUb8pRDyV7TeCjcvlMgIe4/Px1CqRuFWARHrVtX8ifa8vv1D5HWFGKT6ZOXO9gJDpjtR0hv0ZXhA/Wd3iO2sPBy4gfjiv/ZlbSTHm9iXjU+Liee2PihfEHbvmCUEsMhMWT7k/qoSQucEnMx/RziYzZ/C2TjyZGfb3yiuvvPKKsar/b+dwVEw6xw4AAAAASUVORK5CYII=" />
                                            </div>
                                            <h5 className="mb-0">An Array of Options</h5>
                                        </div>
                                        <span>Effortless transport solutions, diverse vehicle options.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0 btn-square me-3">
                                                <img alt='err' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAUlEQVR4nO2ZbUwbdRjA+SD7YJQIsoQ5NulwMTEm0w86NbposhgTjXMTNZplB6Mrg5TSl43BxpuRl0TdgA0YhpcwBAG15aXCKN1KS1s6aA8y3oSULBMF/TAchbKNUnzM/7orXHsbPXa90GSX/NL07v6953f/53nupUFBj5cAWNL6xp6V4dYiqcWqZoPE+oEqTgVkuLVdhk8CW/DPGuFYsdHAmYDUMrnEtgCWpuFOgs3g1wpgSOKCyRTQAhgXEv4WwPwtwbbAsfMmLwEMSZSYDAEhkKwcBiy9mzsJtgUQKepRSKrDIbHG4oVQOZzKiUBClRlEXaOsy8lwa47fBSTGCWLKEyr7QWaxUrZJzVYQqUYhuWPkoYhUo8S+nAsk/TRAyeGjeXqQGCZWi7Swlza/6eAXmrgVQIGi4AVl14izKGwZgtiMbjhe0e/eJy5L67NAbJaOW4GUK2PEgYWK66t9/VwvcdbJ78K2YeAXudY9DH5RL7EvtylkniRSJvaMFgTlfSBqHwaRagRSusYCp4glhglI+KHPnSqeNbCpBcS6cYj7Wkd8og6S3DpEzEZChTkwulDK/RpAgRPrLK6UElwwBUYXkpE1kNEN/LO9EJ+vdxV18/XA6EIysgYqzK78L9BTgt/8XQhfBc1CUsMgi8U7ya2ARO8q5E0n4FCHvu28EppKojRmARPqDKVwsaeJoEz/K2SaB7gTcHaFiQHfAo/KcnMEOOp3Esw27oGM/kFuBFY0IRoUQEluDJySJjIGjUPjnZ1hbgFEiV7B0Qx0P61FAbz/yfcbBo1fUVEFSvVyr0BPWX4n1pPpRtL1S5rCnh2VupaF7F1iKH4hZFMJtKgLKPuQLObyYI4f7cXCGV7rphLoUGUyErCl8bQ+C2y4BvJifBIowDWgMOXBzc598EfnO27+Ub4Gtppo+93z2xdJ7N/smJ+X8m7Zs3l8nwUelfUE7uGhtOPoZmSpIfK/dQP3FDiZWQyC1AYvYmLLITallnab5ESGuwutJ/AgcQeNAIKxAHmzFf+tkXhwIb9/9FU5fClqpb0x+5Rf73MNGHAMrJZ9MKXfC3/2vO7GLt8Ndy5FLd27GLm4ynMzjLsQcav7nRFEl0dArB0HQVkfRSAuRweJ9QMuanHA0pkJ+L0LYRwIdPizC/k7hRAlBjncaNkPN1veo/Bv4Uu2eRlvkcJJnv1uPk/oswAKko4PvyiFGEEj7bZDcbWMBNrwTNpCdnqMJXH+ttX3FEJnmo4PDhUSEnTbPj5cyUhAhUsYCSy3bmWYQuka4vGQeEQ8TZNC5Nu5+59MUijfpANFTz5M9VC70EzTq2Cr5tkpXahm+7xDHnHL2R7u+4UMBXS8evVNA3r08yxiqWkCkhoHQXx1jLHAQsOLtGeZrnjnEnYxv5ARZ/a0BuJzewiwDO8ZELa6nmfRC16mAg+6YM3RCfCjN3YhY3MGqrovWdb+V2xWYlM3FPtnp+Vv2ablb8wj/pbvvX37xO47NinPvrYDLWRGzTiV4WK4Fub7hexIqppxDRw8WgsHPs+jFVj+8fl3PY8F+BYp611o5WpIM/qRobZXoKXqoBeV5w5DU/lnXuvbqg+A+eeXYVq9zRVERzj1hqw2ao+3QHAO610ILodvW9E9Nb6if3J2w2hD/nI0RGqW6neqEY66Hem0x8KfeBPwYBVYgtVrcaqfGXHII2Y98K0LPV6CuF3+B8f/sGXXjwScAAAAAElFTkSuQmCC"></img>
                                            </div>
                                            <h5 className="mb-0">Real-time Quote Generator</h5>
                                        </div>
                                        <span>Instant shipping cost estimates for efficiency.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0 btn-square me-3">
                                                <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO2Yz08TQRTHN3jTm/cOiaggHgSPED3oRdCbmuhB+QcIiUQSfxy2CTFd2moVPFAVEzAGhZNREflZQEuljTFevGrSbUl1aWJb2sbDM2+WWZtKu7t0u1uSfclLutuZzvcz832vyXCcHXbYYYcdRgcZEI8TV3TZ4RJzRBDBynSgBld0ud4VbdUs3iGIeauFk2IQQcxrgkBaq8WSUumKBlQBasE2pIyd1E+gggUOe+PQMSZB99sU8IFN8KzmaOLn7qkUdI5KdEwla3DVADjgjsHF8SS4gzm4v5Yvm+5gFi6Mb9A5pBYAmn1xuDmfUQRem05D55gExwbXocETo9kytA5nxyTonU4r43BOsy9uLQAK6F/JUkFok7bhhOqc9uEE8EubdE7/SlY3hGEAaAG289dn0oq3G+/G4PJEEm4vZJQauDWfoe+a7sljcGzfrHwaN+YyuuxkGAB6nu08E3/66S8quLT/c3Bq5KcC4QzIJ3F+fMNcAFwcixEXZ7ZB8b4toT1TKWjzJ5QaQNv0vEvR73yf8gpE+3CCvhsIZjV3J0MAsFWygmW2YTuPHUbt1BCe2an3vWyljlHJPADs87godht8Rn+znVeby07i0sskfT73TN4M/E3TAND3uCi2SnzGgqV28v/rQl1PQhD76KF59XFIed/ul22DhU0EkbZYVkumAbA/rIPe2LbPmCgcIk6a4geP8h5rAsei5Ygg0jmswE0D8IZkwaz99c2kaVssHMPEsyz8rnB8QxGQaRZCiHL9uxxAYR7yxmlnMtVCR31xxf+VAhBBhBOPEtA6tG4egJbUA0B0pA1AdngCpdoq2S0nUNxWdwrEWQVgFBBXKwBqQGS3AYDGrmX4rcSZh19h8vVzeDD5Cho9P6oK4NB0K6HjXuiI9ztIq4KyaGjWD01bEFU5AZeGeyG8/dJ6M3dy8Nt/CzMIowEceDPnjraoAjAIIkSX1OxUL0RhcXpkWwijABzy3WhAs3i9ARF+L0T4hUoFQ1FWRayZEJzZAV88+yDsXDIGgP9tOoDBEIuWABgI0WUZgAIR4d/s0D4BAL7OUgAKAXwdhJ13IOL8o8c6EOT3c7UU8JlvhjD/AsL8RgnREoT5OVhzXoGJiT1W67XDDm6XxV9R1Q8xkAZHBQAAAABJRU5ErkJggg==" />
                                            </div>
                                            <h5 className="mb-0">Personalized Portal</h5>
                                        </div>
                                        <span>Personalized portals for clients and vendors.</span>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="flex-shrink-0 btn-square me-3">
                                                <img alt='' src="data:image/png;base64,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"></img>
                                            </div>
                                            <h5 className="mb-0">Vechile Towing Service</h5>
                                        </div>
                                        <span>Streamline tow service with diverse bookings.</span>
                                    </div>
                                </div>
                                <div className="row g-4 sm:h-28 :mt-2">
                                    <div className="col-sm-6 self-end">
                                        <a className="btn bg-indigo-800 text-white py-3 px-5 hover:bg-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 " href="/">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src={about2} alt="" style={{ objectFit: 'cover' }} />
                                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src={about1} alt="" style={{ width: '200px', height: '200px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================== */}


            {/* ========================================= Fleet Types Section =================================== */}
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="display-5 fontAlt font-semibold mb-4">
                            Diverse Vehicle Fleet Selection
                        </h2>
                        <p className="w-full text-base">Explore our 'Diverse Vehicle Fleet Selection' to find the perfect match for your needs. From compact cars to heavy-duty trucks, our extensive range ensures you'll find the ideal vehicle for any purpose.</p>
                    </div>

                    <div className="container mx-auto">
                        <div className="flex flex-wrap m-4">

                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ========================================= Testmonials Section ====================================== */}
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="display-5 fontAlt font-semibold mb-4">
                            Customer Stories and Feedback
                        </h2>
                        <p className="w-full text-base">Explore our 'Diverse Vehicle Fleet Selection' to find the perfect match for your needs. From compact cars to heavy-duty trucks, our extensive range ensures you'll find the ideal vehicle for any purpose.</p>
                    </div>

                    <div className="container mx-auto">
                        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 border rounded-lg dark:border-gray-700">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 border border-transparent rounded-lg bg-indigo-800">
                                <p className="leading-loose text-white">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-white">Jeny Doe</h1>
                                        <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border rounded-lg dark:border-gray-700">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ========================================= FAQs Section ========================================== */}
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 p-12 sm:px-6 md:pt-16 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h2 className="display-5 fontAlt font-semibold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="w-full text-base">Explore our 'Frequently Asked Questions' to find answers to common queries about our services, booking process, and more. We're here to provide clarity and support for your transportation needs.</p>
                    </div>

                    <div
                        className="mx-auto my-20 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white"
                    >
                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-lg font-medium">
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

                            <p className="mt-4 leading-relaxed text-gray-700">
                                We've made booking easier for you by streamlining the process. Simply visit our website, input your needs, and we'll connect you with a suitable vendor. Additionally, you can reach us on WhatsApp for further assistance.!
                            </p>
                        </details>

                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-lg font-medium">
                                    How would I know my fare charges & bill amount?
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

                            <p className="mt-4 leading-relaxed text-gray-700">
                                We'll offer an online quote generator that not only provides you with an estimated price but also generates digital invoices for your convenience.
                            </p>
                        </details>
                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-lg font-medium">
                                    Where can we find the Daily Truck Rates information for the long-haul intercity Transportation?
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

                            <p className="mt-4 leading-relaxed text-gray-700">
                                We inform our registered customers about daily market rate updates for long-distance routes, both between cities and within cities.
                            </p>
                        </details>
                        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                            >
                                <h2 className="text-lg font-medium">
                                    Can the shipper fully automate their truck bookings through FreightEase System?
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

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Indeed, our system offers seamless, automated workflows that empower you to book a truck and have complete control over the entire cargo journey. You have the option to centralize your request, and our FreightEase team will handle all aspects, from matching your request to connecting you with a suitable truck listed in our system.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ========================================= Contact Section ========================================== */}
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
                            <h6 className="text-indigo-800 fontAlt text-xl mb-2">Features</h6>
                            <h1 className="display-6 fontAlt font-semibold mb-4"><span className='text-indigo-800'>#Explore </span>Our Exceptional
                                <br className="hidden lg:inline-block" />Features That Set Us Apart!</h1>
                            <p className="mb-4">Explore our Feature Highlights and Service Offerings to unlock the full potential of your logistics and transportation needs. Discover a comprehensive range of solutions that drive efficiency and excellence in the industry.</p>
                            <form>
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
                                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                        <button className="text-white bg-indigo-800 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            Send a Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================== */}


        </>
    )
}

export default HomePage
