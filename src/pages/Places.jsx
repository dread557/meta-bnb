import React from 'react'
import PlacesData from '../fixtures/PlacesCard.json'
import Card from '../components/Card'

const Places = () => {
    return (
        <div className='p-8 lg:p-14 lg:pl-24 lg:pr-24 '>
            <div className='flex justify-between gap-6 lg:gap-10 items-center mb-8 lg:mb-16 overflow-x-scroll scroll'>
                <button>Restaurant</button>
                <button>Cottage</button>
                <button>Castle</button>
                <button className='whitespace-nowrap'>fantast city</button>
                <button>beach</button>
                <button>Carbins</button>
                <button className='whitespace-nowrap'>Off-grid</button>
                <button>Farms</button>
                <button className='flex ml-[17px] absolute right-[7%] z-10 top-[9%] md:top-[7%] lg:static bg-white gap-3 border justify-between p-3 items-center min-w-[161px] h-12 rounded'>
                    Location
                    <img src='../assets/settings.png' alt='settings' />
                </button>
            </div>
            <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                {PlacesData.map(({ id, name, price, distance, duration, image }) => (
                    <Card
                        key={id}
                        name={name}
                        price={price}
                        distance={distance}
                        duration={duration}
                        image={image}
                    />
                ))}
            </div>
        </div>

    )
}

export default Places