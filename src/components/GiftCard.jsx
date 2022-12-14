import React from 'react'

const GiftCard = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row lg:pl-12 lg:pr-12 xl:pl-24 xl:pr-24 bg-[#A02279] p-8 items-center lg:p-14 relative lg:pt-[100px] text-white'>
            <div className='md:w-[50%] mt-5 md:mt-0'>
                <h1 className='text-5xl font-bold mb-[35px]'>Metabnb NFTs</h1>
                <p className='lg:w-[60%] leading-9'>Discover our NFT gift cards collection.
                    Loyal customers gets amazing gift cards
                    which are traded as NFTs. These NFTs gives
                    our cutomer access to loads of our exclusive services.
                </p>
                <button className='text-[#A02279] hover:bg-opacity-80 bg-white mt-[57px] h-12 w-[156px] rounded'>Learn more</button>
            </div>
            <div className=' md:w-[50%]'>
                <img src='../assets/gift-lg.png' alt='' />
                {/* <img className='hidden md:flex md:w-[35%]  absolute md:top-[22%] lg:top-[28%] left-[39%] z-20' src='../assets/gift-1.png' alt='gift card' />
                <img className='hidden md:flex md:w-[35%] absolute md:top-[5%]  lg:op-[3%] left-[54%] z-10' src='../assets/gift-2.png' alt='gift card' />
                <img className='hidden md:flex md:w-[35%] absolute md:top-[36%]  lg:top-[43%] left-[60%] z-30' src='../assets/gift-3.png' alt='gift card' /> */}
            </div>
        </div>
    )
}

export default GiftCard