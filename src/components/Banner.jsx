import React from 'react'

const Banner = () => {
    return (
        <div className='flex h-[70px] items-center p-8 lg:p-14 lg:pl-24 lg:pr-24 justify-between bg-[#A02279]'>
            <img className='w-[80px] md:w-auto' src='../assets/mbtoken.svg' alt='Mb token' />
            <img className='w-[80px] md:w-auto' src='../assets/meta.svg' alt='Metask' />
            <img className='w-[80px] md:w-auto' src='../assets/opensea.svg' alt='open sea' />
        </div>
    )
}

export default Banner