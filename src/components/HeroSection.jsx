import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex flex-col lg:flex-row p-8 lg:p-14 pt-2 md:pt-16 lg:gap-8 justify-between '>
            <div className='flex flex-col lg:w-[60%]'>
                <h1 className=' text-3xl lg:text-[56px] lg:w-[100%] leading-[140%] grow'>Rent a
                    <span className='text-[#A02279] font-bold ml-2 mr-2'>Place</span>
                    away from <span className='text-[#A02279] font-bold mr-2'>Home</span>
                    in the <span className='text-[#A02279] font-bold ml-2 mr-2'>Metaverse</span>
                </h1>
                <p className='lg:w-[70%] mt-5 lg:mt-0'>we provide you access to luxury and affordable
                    houses in the metaverse, get a chance to
                    turn your imagination to reality at your comfort zone
                </p>
                <div className='flex items-center grow  mt-10 lg:mt-0 '>
                    <input
                        className='border h-[54px] border-[#A3A3A3] w-[70%] lg:w-auto rounded-tl-lg rounded-bl-lg pl-4 outline-none '
                        type='text'
                        placeholder='Search for location' />
                    <button
                        className='h-[54px] bg-[#A02279] hover:bg-opacity-80 w-[120px] lg:w-[230px] rounded-tr-lg text-white outline-none rounded-br-lg'>
                        Search
                    </button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-2 mt-20 lg:mt-0 grid-rows-4 items-start lg:w-[40%]'>
                <img className='w-full row-start-2 row-span-4' src='../assets/hero-1.png' alt='' />
                <img className='w-full row-start-4 row-span-6' src='../assets/hero-4.png' alt='' />
                <img className='w-full row-span-3' src='../assets/hero-2.png' alt='' />
                <img className='w-full row-span-3' src='../assets/hero-3.png' alt='' />
            </div>
        </div>
    )
}

export default HeroSection