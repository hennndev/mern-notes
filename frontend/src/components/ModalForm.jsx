import React, { useState } from 'react'

const ModalForm = ({closeModal}) => {

    const [values, setValues] = useState({
        judul: "",
        tanggal: new Date().toLocaleDateString('en-CA'),
        isi: "",
        tema: ""
    })

    const handleChange = (e) => {
        const value = e.target.value 
        setValues({
            ...values,
            [e.target.id]: value
        })
    }

    const handleChangeTheme = (e) => {
        const value = e.target.value
        setValues({
            ...values,
            tema: value
        })
    }


    console.log(values)

    return (
        <div className='fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 right-0 left-0 bottom-0'>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[600px] min-h-[200px] p-10 bg-white rounded-2xl'>
                    <h2 className='text-center text-3xl font-medium'>Tambah catatan</h2>
                    <form className='mt-7'>
                        <div className='flex flex-col space-y-2 mb-4'>
                            <label className='text-lg text-gray-700'>Judul catatan</label>
                            <input 
                                type="text" 
                                id='judul'
                                value={values.judul}
                                onChange={handleChange}
                                placeholder='Tulis judul catatan disini...' 
                                className='border border-gray-200 rounded-2xl py-2 px-4'/>
                        </div>
                        <div className='flex flex-col space-y-2 mb-4'>
                            <label className='text-lg text-gray-700'>Tanggal catatan</label>
                            <input 
                                type="date" 
                                id='tanggal'
                                value={values.tanggal}
                                onChange={handleChange}
                                className='border border-gray-200 rounded-2xl py-2 px-4'/>
                        </div>
                        <div className='flex flex-col space-y-2 mb-4'>
                            <label className='text-lg text-gray-700'>Isi catatan</label>
                            <textarea 
                                rows={4} 
                                cols={4} 
                                id='isi'
                                value={values.isi}
                                onChange={handleChange}
                                placeholder='Tulis isi catatan disini...'
                                className='border border-gray-200 rounded-2xl py-2 px-4'/>
                        </div>
                        <div className="flex items-center space-x-5 mt-5 mb-6">
                            <div>
                                <label htmlFor="orange" className="w-6 h-6 rounded-full bg-orange-400 inline-block cursor-pointer transition duration-200 ease-in"/>
                                <input 
                                    type="radio" 
                                    id="orange"
                                    value="orange" 
                                    className="hidden" 
                                    onChange={handleChangeTheme}/>
                            </div>
                            <div>
                                <label htmlFor="green" className="w-6 h-6 rounded-full bg-green-400 inline-block cursor-pointer transition duration-200 ease-in"/>
                                <input 
                                    type="radio" 
                                    id="green"
                                    value="green" 
                                    className="hidden" 
                                    onChange={handleChangeTheme}/>
                            </div>
                            <div>
                                <label htmlFor="blue" className="w-6 h-6 rounded-full bg-blue-400 inline-block cursor-pointer transition duration-200 ease-in"/>
                                <input 
                                    type="radio" 
                                    id="blue"
                                    value="blue" 
                                    className="hidden" 
                                    onChange={handleChangeTheme}/>
                            </div>
                            <div>
                                <label htmlFor="pink" className="w-6 h-6 rounded-full bg-pink-400 inline-block cursor-pointer transition duration-200 ease-in"/>
                                <input 
                                    type="radio" 
                                    id="pink"
                                    value="pink" 
                                    className="hidden" 
                                    onChange={handleChangeTheme}/>
                            </div>
                            <div>
                                <label htmlFor="stone" className="w-6 h-6 rounded-full bg-stone-400 inline-block cursor-pointer transition duration-200 ease-in"/>
                                <input 
                                    type="radio" 
                                    id="stone"
                                    value="stone" 
                                    className="hidden" 
                                    onChange={handleChangeTheme}/>
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <button type='button' className='border-none outline-none bg-gray-300 text-black py-2 px-6 rounded-2xl text-lg hover:opacity-85' onClick={closeModal}>
                                Cancel
                            </button>
                            <button type='submit' className='border-none outline-none bg-gray-700 text-white py-2 px-6 rounded-2xl text-lg hover:opacity-85'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalForm