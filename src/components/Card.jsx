import React from 'react'

const Card = ({ name, price, distance, duration, image }) => {
    return (
        <div className='p-[10px] justify-self-center border border-[#D7D7D7] rounded-lg'>
            <img className='h-[256px] w-[260px] mb-4 object-contain' src={image} alt={name} />
            <div className='flex justify-between mb-3'>
                <p className='text-xs'>{name}</p>
                <p className='font-bold text-xs'>{price}</p>
            </div>
            <div className='flex justify-between gap-3 mb-3'>
                <p className='text-xs'>{distance}</p>
                <p className='text-xs'>{duration}</p>
            </div>
            <div className='flex space-x-2 mb-4'>
                <div className='text-[#A02279] h-3 w-3'>
                    <ion-icon name="star"></ion-icon>
                </div>
                <div className='text-[#A02279] h-3 w-3'>
                    <ion-icon name="star"></ion-icon>
                </div>
                <div className='text-[#A02279] h-3 w-3'>
                    <ion-icon name="star"></ion-icon>
                </div>
                <div className='text-[#A02279] h-3 w-3'>
                    <ion-icon name="star"></ion-icon>
                </div>
                <div className='text-[#A02279] h-3 w-3'>
                    <ion-icon name="star"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Card