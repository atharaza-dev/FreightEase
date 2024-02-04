import React from 'react'
import profile from '../../assets/imgs/profile.png'

function ProfileSettings() {
    return (
        <>
            <section className="overflow-hidden fontAlt">
                {/* <h1 class="fontAlt sm:text-6xl mb-4 font-bold text-start text-gray-900"><span className='text-primColor1'>REVENUE GENERATED</span></h1> */}
                <div class="flex items-center justify-between bg-white px-8 text-white shadow-sm rounded-lg border-1">
                    <div class="my-10 lg:my-8 lg:w-1/2">
                        <h1 class="text-8xl font-bold fontAlt tracking-wide text-primColor1">Profile</h1>
                        <p class="mt-2 text-lg text-gray-700">Manage and edit your personal information  and biodata here.</p>
                    </div>
                    <div class="hidden h-22 w-1/2 flex-shrink-0 justify-end lg:flex">
                        <img class="w-40" src={profile} alt="pic" />
                    </div>
                </div>

                <div class="w-full overflow-x-auto fontAlt rounded-lg shadow-sm border-1 mt-4 border-gray-250">
                    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

                    </div>
                </div>
            </section >
        </>
    )
}

export default ProfileSettings
