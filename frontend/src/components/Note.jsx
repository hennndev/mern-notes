import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md"


const Note = ({judul, tanggal, isi, tema, deleteNote, handleOpenModal}) => {
    return (
        <article className={`flex justify-between rounded-[20px] p-6 min-h-[250px] bg-${tema}-400`}>
            <section className='flex flex-col self-start'>
                <h1 className="text-[#1e201e] font-medium tracking-tight text-2xl self-start">
                    {judul}
                </h1>
                <p className='mt-2 text-[#1e201e]'>{new Date(tanggal).toLocaleDateString()}</p>
                <p className='mt-2 text-[#1e201e]'>{isi}</p>
            </section>
            <section className="flex self-end justify-end w-max">
                <div className="flexx flex-col space-y-3">
                    <div className="group bg-[#1e201e] rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in" onClick={handleOpenModal}>
                        <MdEdit className="text-2xl text-white group-hover:text-[#1e201e] transition duration-200 ease-in"/>
                    </div>
                    <div className="group bg-[#1e201e] rounded-full p-2.5 flex-center cursor-pointer hover:bg-white transition duration-200 ease-in" onClick={deleteNote}>
                        <MdDelete className="text-2xl text-white group-hover:text-[#1e201e] transition duration-200 ease-in"/>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Note