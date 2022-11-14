import React from 'react'

const Modal = ({ openModal, setOpenModal }) => {
    if (!openModal) return null
    return (
        <div onClick={() => setOpenModal(false)} className='bg-black bg-opacity-50 fixed z-30 w-full h-full'>
            <div onClick={(e) => e.stopPropagation()} className='w-[90%] max-w-[600px] bg-white p-6 h-[326px] rounded-2xl fixed translate-x-[-50%] translate-y-[-50%] top-[55%] left-[50%] '>
                <div className='flex justify-between items-center border-b mb-8'>
                    <h4 className='text-2xl mb-6 text-[#333333] font-bold'>Connect Wallet</h4>
                    <div className='mb-6 cursor-pointer'>
                        <ion-icon onClick={() => setOpenModal(false)} name='close'></ion-icon>
                    </div>

                </div>
                <p>Choose your preferred wallet:</p>
                <div className='flex border border-gray-300 items-center justify-between p-3 pl-5 pr-5 rounded-xl mb-4 mt-4'>
                    <div className='flex items-center space-x-3'>
                        <img src='../assets/meta.png' alt='meta mask' />
                        <h4>Metamask</h4>
                    </div>
                    <ion-icon name="chevron-forward"></ion-icon>
                </div>
                <div className='flex border border-gray-300 items-center justify-between p-3 pl-5 pr-5 rounded-xl'>
                    <div className='flex items-center space-x-3'>
                        <img src='../assets/wc.png' alt='Wallet connect' />
                        <h4>WalletConnect</h4>
                    </div>
                    <ion-icon name="chevron-forward"></ion-icon>
                </div>
            </div>

        </div>
    )
}

export default Modal