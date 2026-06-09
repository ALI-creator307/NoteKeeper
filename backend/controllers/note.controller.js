import Note from '../models/note.model.js';


// create a new note
export const createNote = async (req, res) => {
    try {

        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: 'Error creating note' });
    }
}


// reterive all notes
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
}

// update a note
export const updateNote = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, content } = req.body;

        if (!title && !content) {
            return res.status(400).json({
                message: 'At least one field is required'
            });
        }

        let obj = {};

        if (title) obj.title = title;
        if (content) obj.content = content;

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            obj,
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: 'Note not found'
            });
        }

        res.status(200).json(updatedNote);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
}

// delete a note
export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting note' });
    }
}