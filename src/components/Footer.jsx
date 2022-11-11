import React from 'react'

const Footer = () => {
    return (
        <div className='p-8 lg:p-14 bg-[#1D1D1E] text-[#F1F3F9]'>
            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <div className='flex flex-col gap-6'>
                    <img className='w-[60%] md:w-auto' src='../assets/ft-logo.svg' alt='logo' />
                    <div className='flex gap-4 mb-5 md:mb-0'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                </div>
                <div className='mb-3 md:mb-0'>
                    <h4 className='font-bold text-white text-lg mb-4'>Community</h4>
                    <ul className='list-none flex flex-col gap-3'>
                        <li>NFTs</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div className='mb-3 md:mb-0'>
                    <h4 className='font-bold text-white text-lg mb-4'>Places</h4>
                    <ul className='list-none flex flex-col gap-3'>
                        <li>Castle</li>
                        <li>Farm</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div className='mb-3 md:mb-0'>
                    <h4 className='font-bold text-white text-lg mb-4'>About us</h4>
                    <ul className='list-none flex flex-col gap-3'>
                        <li>Roadmaps</li>
                        <li>Creators</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
            <p className='mt-5 md:m-auto'>&copy; 2022 Metabnb </p>
        </div>
    )
}

export default Footer