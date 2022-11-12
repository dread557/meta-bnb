import React, { useState, useEffect } from 'react'

const Navbar = ({ openModal, setOpenModal }) => {
    const [screenSize, setScreenSize] = useState(null)
    const [activeMenu, setActiveMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize <= 912) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const links = [
        { name: 'Home', link: '/' },
        { name: 'Place to stay', link: '/places' },
        { name: 'NFTs', link: '/nfts' },
        { name: 'Community', link: '/community' }
    ]

    return (
        <header className='flex justify-between p-8 lg:p-14 lg:pt-11 pt-7 items-center'>
            <div className='flex space-x-1 items-center'>
                <img className='w-[41.99px] h-[36.37px]' src='../assets/logo.png' alt='logo' />
                {screenSize >= 768 && (<img className='' src='../assets/logo-text.png' alt='meta bnb' />)}
            </div>
            <div className=' text-2xl lg:hidden cursor-pointer relative z-20' onClick={() => setActiveMenu(!activeMenu)}>
                <ion-icon name={activeMenu ? 'close' : 'menu'}></ion-icon>
            </div>
            {activeMenu && (
                <div className='flex flex-col lg:flex-row justify-center lg:justify-end h-screen lg:h-fit items-center absolute lg:relative top-0 bottom-0 lg:top-0 z-10  lg:space-x-16 bg-[#A088EC] w-[100%] left-0 right-0 lg:bg-inherit'>
                    <nav className='flex flex-col lg:flex-row lg:grow lg:justify-center space-y-10 lg:space-y-0 lg:space-x-12 '>
                        {links.map((link) => (
                            <a key={link.name} className='hover:text-[#A02279]' href={link.link}>{link.name}</a>
                        ))}
                    </nav>
                    <button onClick={() => setOpenModal(true)} className='h-[45px] w-[160px] bg-[#A02279] text-white rounded-[10px] hover:bg-opacity-80 mt-4 lg:mt-0'>Connect Wallet</button>
                </div>
            )}
        </header>
    )
}

export default Navbar