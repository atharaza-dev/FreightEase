import React from 'react'
import { Link } from 'react-router-dom';
import './ServicesPage.css'
import poster from '../../../assets/imgs/poster.png';
import about from '../../../assets/imgs/about.png'

function ServicePage() {
    document.title = 'Services - FreightEase'
    return (
        <>
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
                        <h1 class="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#Experience </span>the best seamless Services</h1>
                        <p class="heading2 mb-8 leading-relaxed">At FreightEase, our Services page unveils a spectrum of tailored solutions designed to streamline your logistics needs. Explore our comprehensive offerings, from efficient trucking to seamless freight management. Experience reliability and excellence in every service we deliver.</p>
                    </div>
                </div>
            </section>

            <section class="container-xxl text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col gap-20 items-center">

                    <div class="lg:max-w-xl lg:w-full md:w-1/1 w-5/6">
                        <img class="object-cover object-center rounded-full" alt="hero" src={about} />
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <h6 className="text-primColor2  fontAlt text-xl mb-2">Features</h6>
                            <h1 className="display-6 fontAlt font-semibold mb-4"><span className='text-primColor1'>#Explore </span>Our Exceptional
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
                                            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIsklEQVR4nO2Ye3ATxx3HL01m0knyD31m2pmQNpkklDQMpU0C3r2zzpKR8duWbEl2E0Ig09IGGtMEQp0aCFjCFCM7fnBnCLEBU8QrgRAgDIbwSOwE22dJNtgYy3e27sSkpJ0JEEh12s6edYqwJdnmZTPT38xvdla3d/p+dn+/394tQfzf7oyZTPnPmYz5r+GWuNvMZMzLzDHmBXJz8hFuc3LyM4i7yXKNeXss5hfl1xcVItziPnE3WU5Ovj03J1+eO2c+wi3uE3eTZWT8/ocW80vHzaYX/Lg1Go0/IMabcVzH020uN+Kc7lcjXbda18WvttkRbonxYK0uVzzndC9S+5zLdbzN6RLdbnfE2S0psT+DAVZb1y1DCN1DjKVhkVgs53J9gvtYEOd0XeNcLlus+1Zb7buCENuLioq+R4yVcU7nAhwure3tk0O/uVyfYCin0zkh2n0Y1GazL1Egiu2ziLEG4LiOp4fLgeJi++9WW9ctLisrux/3i4qYBzCAzWZ/gxgvIRQLoKS4LDEYNoVFRRUP2Wzr3sT9kuIyPTGWhuOdc7quqgmpJrEaQjM28D9Tx9qs9i0KhOrWddvGNJEjJ7F7Fed266dv6JkIGf4sZPkr1CbP90MQttK/Bsvo4jGvQjhMBiexaoDldwKW/xqy/B90ddKD43YfiGQk06eBrIAAyy8dfG3cAxgd6F7I8hxghJ7w0LmjAKCKnwCZvmzACNWA5bsAw/cBRjCN6F6G/yOefbKmLyvS9dsCQBWh+0ANPw2w/GLICochK3yLRVznDB+ADL8spvgqfgJg+S8ByzdEG3NrABC6J666bwrJCIsAwx+ELH95iOAwT9goXPrb/v7PD7m8x/h+8R2E0L0RAVjBDhjej599WwBwTEKWr4QsfyGWYMB4/Pn1ni7HafHo2V6JEyXfNVHyoZCLvr2S9F1lwUbWeCYFV66KiGE3BQAYYX400dl1PZ61B7uOHv6i/dS8Ou7qU8UtsuCVvhM9yL2S73Ofz/dT9dmQ5Q9AVviKYrw/uo0A/H5VsP5d/qvCfV2f7v3szPGWNlc/rueqVx5sQ48sb0Efc0JUAAVC9PV4vd6nANuboiQuwy8cTsMNA+jLuu4HDH9JBWh1tkvhosP9RLMLTVzejFZ9dC4mQNAvFrzfd5Jk+86Z6vunWnaISRaHNNu83bfUsl0stziknWaH2GBxSG/cFABke+nw2Y8mXvX4slY5lXXL0YQLXp/Q2CWdqDwhNs3ZJf3H4pBQNDc7pG/m7RZb3m/78skbBgCsYFUBXqj3nB0OoGBbG/rFiuZAtzCQB15Rusj1XPisrlE6+epe0RtLsCXoBfukk/s58XRvv++y8gyfb+HNADSrAIv3nG8cDqD2iPMqzoO39nmcSw/4zuRtFwMjEW0J805e+tegnPnwhgBwZYAsL6sA5Yc7jw0WzDldchPX3rHlxJljC3b2NGtY/puJK1rk6e90hocCytwqopx/iiMC2NUiNqrim7t9PVWnpENvW6u0owYgGcESXjI3NHQexaJbnO3C3k/PHMfVKGlT78XBpfUJmzPwpLXNj8WkbO5HZPD3lDrviADyd0jCa/t8J/N3SKGQW1S1d8GoAQAjbAoXpmGFa1l1vUKszQz7lNJO9MiyFmSo70dZW0WUXNePsuq9ykpYbsDn73ajkq21H4wKgGSEXwNWkKKJnMH0ot+Un0PPVvQMufZcpUfZD7Q1PcOKM64/jZILytDMOW8i/dxClPb3Lci81aNcW/LBCSQ061DA/Rhq+th0eViAYM03Bl/Mos7wVHuXIhD7pJKOiGMefbvV/1v7mZjikwvKEEXSARLSgXhK6ydhgkxCGlGJ6X5D+XH0yq5O5Gwyofoja1Hhtn1yTADI8EvwG+Fw4YH9+SoPeqb0LHq28jz++Ig4ZtLqdvTYSk7Jg0ieuqQGYbGJumRkzDbjM0/FM9INKJ7SypQmSc7d6AyNn1fLBaICgOreX41E+GhcXaWMzX1DxJs2dyOSSpS1CfpAjjEvJF717CwThgskzStCFofotzjEpr+wDcVRAaZXdf9EeW+/hQAzqgfyIH599xCAzOI9yuynpxlDog0GMzKErcTMmSmIJLVXjA5BOWocdh/An3O3ehV+uZLzT1nbPmQjS136rgJgMFgUsXgVKDIB6fWpIYDk5AxlDEVRDw0AlP5pAKBsakQAwPJrYgpa04jIuasQTJ8tkyl5Mpz9FiJXHokJMHlNB3p0RYtsdly/gaUvd3yLxWVl5oYEp6dlK6Gj9vV4BSB9BR/mqudBNpu90eFwRPwoIiArzIwq5vU6vJwBiqRlXUIS0mmTEEXiqkEj8pWSqADTyruVMEp+j0eW7eJ5i0NiLDskY+rLSx6HgP6vPjFlSPxjNxrMeEX8JNDsLLGWam02u81ms7+MjxWjltBpjPcBwApXhwhZfgCRJI1FB4zZA0uuLrt+ZqqyzGTBxqEAjNA7Y72ndvI/2kupinOPD/4/EtBr8L2z9GnKs0K5kG1GtCYRl9NrFEWFzk5HZJDtbZhtP4UqlteghWsODQhJe1GOp3RypGqBXZuQFICaWTKoPv9vyPC78dcbYPufGO6/KIq6D0K6VolzMkFO1M5CuCrh6kNC+hIACSnEaO3A4sKP0JwEhH1r4VoEKzqUGU6elR4SjOM2I80QFrsGZUy8Lilu1H9IEARJ0joSajaTkD5NwYQGEtDF9PP0z2/kWURlUU3WquJtKKuibWD2136hiEtLzQ4JTkxMRpp43XVAShjF0anE+DgdE7rVOAaV50S8pDhOQ5tMthkZg+UPO4bDAHFxmqhHInfUqArPw4AVzHEsrxy8kkDzIa4I4dt9eCIPJJzmPEEQY3tiHM3i4jSTcT2m43VyZnrOddu9ltYHINDIZBydRIxng1BDkpC+EKwYfqVGQxpBQH8NAD2is88xN51O9yAFNC+RQFMNIc1CSP8ZAPDjsdZF3O32P9YiEgWEWssuAAAAAElFTkSuQmCC"></img>
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

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-6xl text-2xl fontH1 font-semibold text-center title-font text-gray-900 mb-4">Benefits for Shipper</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore our Feature Highlights and Service Offerings to unlock the full potential of your logistics and transportation needs for the Shippers.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Access to all type of trucks under Single Roof</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Proof of delivery</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Tracking of mobilized vehicles through our dedicated Driver's App</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Online Invoicing</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Real Time Quote Generator</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Price Flexibility with Same Vechicle </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="intros flex flex-col text-center w-full mb-20">
                        <h1 class="fontH1 sm:text-6xl  font-semibold  mb-4 text-gray-900">Benefits for Vendors</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our Feature Highlights and Service Offerings to unlock the full potential of your logistics and transportation needs for the Vendors.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Access to all Shipper under Single Roof</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Wide range of diversity in Vehicles & Carriages</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Flexible Work Time</span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Generate Online Invoices  </span>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span class="title-font font-medium">Manage Shipper data under one roof</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div class="my-10 mx-auto flex flex-col-reverse max-w-2xl rounded-xl border bg-gray-700 py-10 px-4 text-center sm:px-10 lg:max-w-screen-lg lg:flex-row lg:text-left">
                <div class="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[40rem]">
                    <img class="h-full w-full object-contain" src={poster} alt="" />
                </div>
                <div class="lg:pl-10">
                    <h1 class="mt-8 text-4xl font-bold fontAlt text-white md:text-5xl md:leading-snug">
                        Subscribe to our <br class="hidden sm:block" />
                        Newsletter and Services
                    </h1>
                    <p class="mt-4 text-lg fontAlt text-white">Subscribe to our newsletter for exclusive updates and dive deeper into our premium services for an enhanced experience. Join us on a journey of discovery!!</p>
                    <div class="mt-16 flex flex-col rounded-md border bg-white sm:flex-row">
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter e-mail'/>
                        <button class="m-2 shrink-0 rounded-md bg-red-600 px-8 py-3 font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none">Get Now</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ServicePage
