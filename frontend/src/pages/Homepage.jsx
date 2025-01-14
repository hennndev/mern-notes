import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import ModalForm from '../components/ModalForm'

const Homepage = () => {
    const [isModal, setIsModal] = useState(false)

    return (
        <main className='max-w-[1200px] mx-auto pt-5'>
            <SearchInput/>
            <div className='mt-14'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-5xl text-gray-800 font-semibold'>Catatanku</h1>
                    <div className='flex items-center space-x-5'>
                        <button className='border border-gray-500 rounded-full py-4 px-6 hover:bg-gray-700 hover:text-white hover:border-transparent transition duration-300 text-lg' onClick={() => setIsModal(true)}>
                            Tambah catatan
                        </button>
                    </div>
                </div>
            </div>

            {isModal && (
                <ModalForm closeModal={() => setIsModal(false)}/>
            )}
        </main>
    )
}

export default Homepage