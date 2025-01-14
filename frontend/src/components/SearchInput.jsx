import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <div className='flex items-center border-2 border-gray-200 rounded-full py-2 px-4'>
            <IoSearch className='mr-5 text-xl text-gray-500'/>
            <input type="text" placeholder='Cari catatan...' className='border-none outline-none flex-1 text-lg text-gray-600'/>
        </div>
    )
}

export default SearchInput