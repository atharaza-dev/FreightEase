// import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// importing Assets 
import './HomePage.css';
import whatsapp from '../../../assets/imgs/whatsapp.png'
import truck1 from '../../../assets/imgs/truck1.jpg'
import truck2 from '../../../assets/imgs/truck2.jpg'
import truck3 from '../../../assets/imgs/truck3.jpeg'
import hero from '../../../assets/imgs/heroo.png';
import service from '../../../assets/imgs/service.png'
import about from '../../../assets/imgs/about.png'

function HomePage() {
    document.title = 'Home - FreightEase'

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
            {/* ======================================== Top Gradient ======================================== */}
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-80 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-64 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            {/* ============================================================================================== */}


            {/* ======================================== Hero Section ======================================== */}

            <section class="relative mx-16 text-gray-600 body-font">
                <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg className="h-[80rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
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
                <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                    <div class="mt-8 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                        <p class="flex text-sm uppercase text-blue-600 fontAlt">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                            </svg>
                            Connecing Miles, Delivering Smiles
                        </p>
                        <h1 className="text-3xl font-light fontAlt leading-snug text-gray-900 sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-snug">
                            The highway to seamless freight with <br className="sm:hidden" />
                            <span class="inline-block border-b-8 border-primColor1 bg-primColor2 px-4 font-bold text-white">freightease</span>
                        </h1>
                        <p className="mx-auto mt-2 max-w-4xl text-base leading-7 text-gray-600">FreightEase is the city's leading solution, setting new standards for logistics and transportation excellence.
                            It empowers freight and logistics services to excel.</p>
                        <div class="flex w-full md:justify-start justify-center items-end">
                            <Link to='/quote-generator'>
                                <button class="activeBtn mt-6 inline-flex text-white bg-primColor1 border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg focus:outline-none focus:ring active:bg-indigo-800">Click to Generate Quote</button>
                            </Link>
                        </div>
                        <div class="mt-6 flex justify-center -space-x-4 lg:justify-start">
                            <img alt='' class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            <img alt='' class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            <img alt='' class="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
                            <div class="">
                                <span class="pl-8 font-semibold">Customer Reviews</span>
                                <div class="flex w-auto items-center justify-center space-x-1 pl-8">
                                    <svg class="h-auto w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                    </svg>
                                    <span class="text-sm font-medium text-slate-400"> 4.9 • <span class="text-sm font-normal underline">003 reviews</span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
            {/* ============================================================================================== */}


            {/* ======================================== About Us Section ======================================== */}
            <section class="container-xxl text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col gap-20 items-center">

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <h6 className="text-primColor2 fontAlt text-xl mb-2">About Us</h6>
                            <h1 className="display-6 fontAlt text-black font-semibold mb-4"><span className='text-primColor1'>#1 </span>Nationwide Freight and
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
                                    <Link to='/about-us' className=" btn text-white bg-primColor1 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={service} />
                    </div>
                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ======================================== Statistics Section ====================================== */}

            <div className="xl:px-20 px-6 pt-16 pb-5 xl:mx-20 ">
                <h1 className="xl:text-5xl md:text-4xl text-2xl fontAlt font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    Our Unmatched Statistics
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="momage" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-primColor1">20K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-primColor1">8K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-primColor1">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
                    </div>
                </div>
            </div>

            {/* ================================================================================================== */}


            {/* ========================================= Features Section ====================================== */}

            <section class="container-xxl text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col gap-20 items-center">

                    <div class="lg:max-w-xl lg:w-full md:w-1/1 w-5/6">
                        <img class="object-cover object-center rounded-full" alt="hero" src={about} />
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <h6 className="text-primColor2  fontAlt text-xl mb-2">Features</h6>
                            <h1 className="display-6 fontAlt text-black font-semibold mb-4"><span className='text-primColor1'>#Explore </span>Our Exceptional
                                <br className="hidden lg:inline-block" />Features That Set Us Apart!</h1>
                            <p>Explore our Feature Highlights and Service Offerings to unlock the full potential of your logistics and transportation needs. Discover a comprehensive range of solutions that drive efficiency and excellence in the industry.</p>

                            <div className="row gy-3 gx-4 mt-1">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-square me-3">
                                            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2Yz2/SYBjH+xf4fwDDojEuXkzoLpDJDjOBeqOERKoZc2hU2Mxc2C5kZka9sHgwlETvO3hST/sDhJXp4kHFi5NScEcPr3nf8lJa+uPlx0t26JN8kqYJTz/fpw8tgWG88sorr7yaVrGFxmLosfwrlG8AM6wBWaegc9GdZrAgRxlaFco3ms7ijXHFQRBxBIL5o580AwAKU9fle1APwE576iaoBmCnMPWggzzVACzFqc8wgExl6pC5dQ2KAWRqU8fyEE76O0DXnor6Lyyp7yNS6wJ5gJGnTi4+HKDrQKdPWOo8IQtAcerGAEZZducr8G3UEH5EHfjX6+DSzgngKh14J46JAtAWtwvgs5AP9Li+fwo4SQXhN0pg4gCTy2tSVgH8FvLwM1effdcCSOrTsQNMY+pY3higg8DyAZM8hN08hitEtkY0pz6I+Uvqt5HH/fEacVLLTxxg2lM3BugYCDjIQ5f53R+Aq7ZBWFKc14jm1EkCzFnIQ0KbX1AATmo7rxHNqdsHUB3lIfD9hAKgEA5rRFscAp8yWJzrcXn7xFIevZfyMrhS/NYP4LhGs5DXAqjWVNsOKBqSYr9GtMURG/Xx5asaRAFoyQ8FqJKLEwWgKa5Rm0ieq7bsA0xD3kkcM564guTHDDDJ1GsG4O+eccW50QPA57Mmd+3+AYjdLoJ4agURy2yjc6RTx784rQMoILp3CJZzJZBIZxE3cyV0ziw/QgB9sgsr+4AXREu47GuiqVsHUBBLW29t+y9tvRs1gD51PHm75pj5BweuUx8OoMlH9w5d+0ee4zvxB2EbIFCoN817DdcGN7q79gi8ePkKAY/xebhOblM3BtD3ezlXcu0P1wnLh6VT+3/2fIXPUb8pRDyV7TeCjcvlMgIe4/Px1CqRuFWARHrVtX8ifa8vv1D5HWFGKT6ZOXO9gJDpjtR0hv0ZXhA/Wd3iO2sPBy4gfjiv/ZlbSTHm9iXjU+Liee2PihfEHbvmCUEsMhMWT7k/qoSQucEnMx/RziYzZ/C2TjyZGfb3yiuvvPKKsar/b+dwVEw6xw4AAAAASUVORK5CYII=" />
                                        </div>
                                        <h5 className="mb-0">An Array of Options</h5>
                                    </div>
                                    {/* <span>Effortless transport solutions, diverse vehicle options.</span> */}
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center ">
                                        <div className="flex-shrink-0 me-3">
                                            <img alt='err' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAUlEQVR4nO2ZbUwbdRjA+SD7YJQIsoQ5NulwMTEm0w86NbposhgTjXMTNZplB6Mrg5TSl43BxpuRl0TdgA0YhpcwBAG15aXCKN1KS1s6aA8y3oSULBMF/TAchbKNUnzM/7orXHsbPXa90GSX/NL07v6953f/53nupUFBj5cAWNL6xp6V4dYiqcWqZoPE+oEqTgVkuLVdhk8CW/DPGuFYsdHAmYDUMrnEtgCWpuFOgs3g1wpgSOKCyRTQAhgXEv4WwPwtwbbAsfMmLwEMSZSYDAEhkKwcBiy9mzsJtgUQKepRSKrDIbHG4oVQOZzKiUBClRlEXaOsy8lwa47fBSTGCWLKEyr7QWaxUrZJzVYQqUYhuWPkoYhUo8S+nAsk/TRAyeGjeXqQGCZWi7Swlza/6eAXmrgVQIGi4AVl14izKGwZgtiMbjhe0e/eJy5L67NAbJaOW4GUK2PEgYWK66t9/VwvcdbJ78K2YeAXudY9DH5RL7EvtylkniRSJvaMFgTlfSBqHwaRagRSusYCp4glhglI+KHPnSqeNbCpBcS6cYj7Wkd8og6S3DpEzEZChTkwulDK/RpAgRPrLK6UElwwBUYXkpE1kNEN/LO9EJ+vdxV18/XA6EIysgYqzK78L9BTgt/8XQhfBc1CUsMgi8U7ya2ARO8q5E0n4FCHvu28EppKojRmARPqDKVwsaeJoEz/K2SaB7gTcHaFiQHfAo/KcnMEOOp3Esw27oGM/kFuBFY0IRoUQEluDJySJjIGjUPjnZ1hbgFEiV7B0Qx0P61FAbz/yfcbBo1fUVEFSvVyr0BPWX4n1pPpRtL1S5rCnh2VupaF7F1iKH4hZFMJtKgLKPuQLObyYI4f7cXCGV7rphLoUGUyErCl8bQ+C2y4BvJifBIowDWgMOXBzc598EfnO27+Ub4Gtppo+93z2xdJ7N/smJ+X8m7Zs3l8nwUelfUE7uGhtOPoZmSpIfK/dQP3FDiZWQyC1AYvYmLLITallnab5ESGuwutJ/AgcQeNAIKxAHmzFf+tkXhwIb9/9FU5fClqpb0x+5Rf73MNGHAMrJZ9MKXfC3/2vO7GLt8Ndy5FLd27GLm4ynMzjLsQcav7nRFEl0dArB0HQVkfRSAuRweJ9QMuanHA0pkJ+L0LYRwIdPizC/k7hRAlBjncaNkPN1veo/Bv4Uu2eRlvkcJJnv1uPk/oswAKko4PvyiFGEEj7bZDcbWMBNrwTNpCdnqMJXH+ttX3FEJnmo4PDhUSEnTbPj5cyUhAhUsYCSy3bmWYQuka4vGQeEQ8TZNC5Nu5+59MUijfpANFTz5M9VC70EzTq2Cr5tkpXahm+7xDHnHL2R7u+4UMBXS8evVNA3r08yxiqWkCkhoHQXx1jLHAQsOLtGeZrnjnEnYxv5ARZ/a0BuJzewiwDO8ZELa6nmfRC16mAg+6YM3RCfCjN3YhY3MGqrovWdb+V2xWYlM3FPtnp+Vv2ablb8wj/pbvvX37xO47NinPvrYDLWRGzTiV4WK4Fub7hexIqppxDRw8WgsHPs+jFVj+8fl3PY8F+BYp611o5WpIM/qRobZXoKXqoBeV5w5DU/lnXuvbqg+A+eeXYVq9zRVERzj1hqw2ao+3QHAO610ILodvW9E9Nb6if3J2w2hD/nI0RGqW6neqEY66Hem0x8KfeBPwYBVYgtVrcaqfGXHII2Y98K0LPV6CuF3+B8f/sGXXjwScAAAAAElFTkSuQmCC"></img>
                                        </div>
                                        <h5 className="">Real-time Quote Generator</h5>
                                    </div>
                                    {/* <span>Instant shipping cost estimates for efficiency.</span> */}
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center ">
                                        <div className="flex-shrink-0 btn-square me-3">
                                            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO2Yz08TQRTHN3jTm/cOiaggHgSPED3oRdCbmuhB+QcIiUQSfxy2CTFd2moVPFAVEzAGhZNREflZQEuljTFevGrSbUl1aWJb2sbDM2+WWZtKu7t0u1uSfclLutuZzvcz832vyXCcHXbYYYcdRgcZEI8TV3TZ4RJzRBDBynSgBld0ud4VbdUs3iGIeauFk2IQQcxrgkBaq8WSUumKBlQBasE2pIyd1E+gggUOe+PQMSZB99sU8IFN8KzmaOLn7qkUdI5KdEwla3DVADjgjsHF8SS4gzm4v5Yvm+5gFi6Mb9A5pBYAmn1xuDmfUQRem05D55gExwbXocETo9kytA5nxyTonU4r43BOsy9uLQAK6F/JUkFok7bhhOqc9uEE8EubdE7/SlY3hGEAaAG289dn0oq3G+/G4PJEEm4vZJQauDWfoe+a7sljcGzfrHwaN+YyuuxkGAB6nu08E3/66S8quLT/c3Bq5KcC4QzIJ3F+fMNcAFwcixEXZ7ZB8b4toT1TKWjzJ5QaQNv0vEvR73yf8gpE+3CCvhsIZjV3J0MAsFWygmW2YTuPHUbt1BCe2an3vWyljlHJPADs87godht8Rn+znVeby07i0sskfT73TN4M/E3TAND3uCi2SnzGgqV28v/rQl1PQhD76KF59XFIed/ul22DhU0EkbZYVkumAbA/rIPe2LbPmCgcIk6a4geP8h5rAsei5Ygg0jmswE0D8IZkwaz99c2kaVssHMPEsyz8rnB8QxGQaRZCiHL9uxxAYR7yxmlnMtVCR31xxf+VAhBBhBOPEtA6tG4egJbUA0B0pA1AdngCpdoq2S0nUNxWdwrEWQVgFBBXKwBqQGS3AYDGrmX4rcSZh19h8vVzeDD5Cho9P6oK4NB0K6HjXuiI9ztIq4KyaGjWD01bEFU5AZeGeyG8/dJ6M3dy8Nt/CzMIowEceDPnjraoAjAIIkSX1OxUL0RhcXpkWwijABzy3WhAs3i9ARF+L0T4hUoFQ1FWRayZEJzZAV88+yDsXDIGgP9tOoDBEIuWABgI0WUZgAIR4d/s0D4BAL7OUgAKAXwdhJ13IOL8o8c6EOT3c7UU8JlvhjD/AsL8RgnREoT5OVhzXoGJiT1W67XDDm6XxV9R1Q8xkAZHBQAAAABJRU5ErkJggg==" />
                                        </div>
                                        <h5 className="mb-0">Personalized Portal</h5>
                                    </div>
                                    {/* <span>Personalized portals for clients and vendors.</span> */}
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center ">
                                        <div className="flex-shrink-0 btn-square me-3">
                                            <img alt='' src="data:image/png;base64,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"></img>
                                        </div>
                                        <h5 className="mb-0">Vechile Towing Service</h5>
                                    </div>
                                    {/* <span>Streamline tow service with diverse bookings.</span> */}
                                </div>
                            </div>
                            <div className="row g-4 sm:h-28 :mt-2">
                                <div className="col-sm-6 self-end">
                                    <Link to='/about-us' className=" btn text-white bg-primColor1 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* ================================================================================================== */}


            {/* ========================================= Fleet Types Section =================================== */}
            <section className="py-10">
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
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck1} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font fontAlt font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck2} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
                                    <img className="cardIimg lg:h-48 md:h-36 w-full rounded-lg object-cover object-center p-4" src={truck3} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs fontAlt title-font font-medium text-gray-400 mb-1">VEHICLE TYPE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shehzor 1500cc</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <a href='/' className="text-primColor1 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
            <section className="pb-10">
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

                            <div className="p-8 bg-primColor1 border border-transparent rounded-lg bg-indigo-800">
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
                                        <button onClick={sendEmailHandler} className="activeBtn btn text-white bg-primColor1 border-1 border-indigo-600 rounded px-8 py-3 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">Send a Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================================================================================================== */}

            <div className="fixed-bottom right-100 p-8" style={{ zIndex: "6", left: "initial" }}>
                <a href="https://wa.me/923040193254?text=Hello! I need some queries" target='_blank' rel='noreferrer' className="whatsapp-icon">
                    <img src={whatsapp} alt="error" />
                </a>
            </div>

            <ToastContainer></ToastContainer>

        </>
    )
}

export default HomePage