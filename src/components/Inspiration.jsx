import React from 'react'
import Inspo from '../fixtures/inspirationCard.json'
import Card from './Card'

const Inspiration = () => {
    return (
        <div className='p-8 lg:p-14'>
            <h1 className='font-bold text-3xl mb-14 lg:text-5xl text-black text-center'>Inspiration for your next adventure</h1>
            <div className='grid sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                {Inspo.map(({ id, name, price, distance, duration, image }) => (
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

export default Inspiration