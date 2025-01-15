import React, { useState, useEffect } from 'react'
import Note from './Note'

const Notes = ({handleOpenModal}) => {
    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        try {
            const req = await fetch("http://localhost:5000/api/notes")
            const res = await req.json()
            if(res) {
                setNotes(res.data)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const deleteNote = async (noteId) => {
        const confirmDelete = confirm("Apa kamu mau menghapus note ini?")
        if(confirmDelete) {
            try {
                const req = await fetch(`http://localhost:5000/api/notes/${noteId}`, {
                    method: 'DELETE'
                })
                const res = await req.json()
                if(res) {
                    alert(`Note dengan id = ${noteId} sudah dihapus`)
                    setNotes(notes.filter(note => note.id !== noteId))
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <section className="mt-10 grid grid-cols-notes gap-x-[20px] gap-y-[40px]">
            {notes.length > 0 ? notes.map(note => (
                <Note key={note.id} {...note} deleteNote={() => deleteNote(note.id)} handleOpenModal={() => handleOpenModal(note.id)}/>
            )) : (
                <p>Notes not exist anymore</p>
            )}
        </section>
    )
}

export default Notes