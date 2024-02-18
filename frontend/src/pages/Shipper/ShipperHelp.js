import React from 'react'

function ShipperHelp() {
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white rounded-sm shadow-sm border-1 border-gray-250 fontAlt">
        <div class="max-w-2xl lg:max-w-5xl mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
              Contact us
            </h1>
            <p class="mt-1 text-gray-600">
              We'd love to talk about how we can help you.
            </p>
          </div>

          <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">

            <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 class="mb-8 text-xl font-semibold text-gray-800 ">
                Fill in the form
              </h2>

              <form>
                <div class="grid gap-4">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="relative">
                      <label for="text" class="leading-7 text-sm text-gray-600">First Name</label>
                      <input type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative">
                      <label for="text" class="leading-7 text-sm text-gray-600">Last Name</label>
                      <input type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </div>

                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>

                  <div class="relative">
                    <label for="text" class="leading-7 text-sm text-gray-600">Describe Problem</label>
                    <textarea type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div class="mt-4 grid">
                  <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
                </div>

                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            <div class="divide-y divide-gray-200">

              <div class="flex gap-x-7 py-6">
                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                <div class="grow">
                  <h3 class="font-semibold text-gray-800">Knowledgebase</h3>
                  <p class="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
                  <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                    Contact support
                  </p>
                </div>
              </div>
              <div class="flex gap-x-7 py-6">
                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                <div class="grow">
                  <h3 class="font-semibold text-gray-800">FAQ</h3>
                  <p class="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                  <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                    Visit FAQ
                  </p>
                </div>
              </div>
              <div class=" flex gap-x-7 py-6">
                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
                <div class="grow">
                  <h3 class="font-semibold text-gray-800">Developer APIs</h3>
                  <p class="mt-1 text-sm text-gray-500">Check out our development quickstart guide.</p>
                  <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                    Contact sales
                  </p>
                </div>
              </div>
              <div class=" flex gap-x-7 py-6">
                <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                <div class="grow">
                  <h3 class="font-semibold text-gray-800">Contact us by email</h3>
                  <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                  <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                    example@site.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShipperHelp