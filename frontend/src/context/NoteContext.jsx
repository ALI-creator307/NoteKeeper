import React, { createContext, useEffect, useState } from 'react'
import BACKEND_URL from '../api/url'

export const NoteContext = createContext()

export const NoteProvider = ({ children }) => {

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    //fetch all notes
    const getNotes = async () => {
        setLoading(true);
        try {
            const response = await BACKEND_URL.get('/get-notes')
            setNotes(response.data);
        } catch (error) {
            console.error("error fetching notes:", error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getNotes();
    }, []);

    //add a note
    const createNote = async (note) => {
        try {
            const response = await BACKEND_URL.post('/create-note', note);
            setNotes(prevNotes => [response.data, ...prevNotes]);
        } catch (error) {
            console.error("error creating note:", error)
        }
    }

    //update a note
    const updateNote = async (id, updateNote) => {
        try {
            const response = await BACKEND_URL.put(`/update-note/${id}`, updateNote);
            setNotes(prevNotes => prevNotes.map(note => note._id === id ? response.data : note));
        } catch (error) {
            console.error("error updating note:", error)
        }
    }

    //delete a note
    const deleteNote = async (id) => {
        try {
            await BACKEND_URL.delete(`/delete-note/${id}`);
            setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        } catch (error) {
            console.error("error deleting note:", error)
        }
    }

    return (
        <NoteContext.Provider value={{ notes, loading, createNote, getNotes, updateNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    )

}