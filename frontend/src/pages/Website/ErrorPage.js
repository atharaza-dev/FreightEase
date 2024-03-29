import React from 'react'

function ErrorPage() {
    return (
        <div>
            <div class="h-screen flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
                <div class="w-full lg:w-1/2">
                    <img alt='a' class="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                    <img alt='a' class="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                    <img alt='a' class="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
                </div>
                <div class="w-full lg:w-1/2">
                    <h1 class="py-4 text-3xl lg:text-4xl font-extrabold fontAlt text-gray-800">Looks like you've found the doorway to the great nothing</h1>
                    <p class="py-4 text-base text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link. Sorry about that! Please visit our hompage to get where you need to go.</p>
                    <a href="/">
                        <button class="w-full lg:w-auto my-2 rounded-md px-1 sm:px-16 py-3 px-4 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to Homepage</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage