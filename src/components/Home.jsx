import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addToNotes, updateToNotes } from '../redux/noteSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearcParams] = useSearchParams();
    const noteId = searchParams.get('noteId');
    const dispatch = useDispatch();
    const allNotes = useSelector((state) => state.note.notes);

    useEffect(() => {
        if (noteId) {
            const note = allNotes.find((note) => note._id === noteId);
            if (note) {
                setTitle(note.title);
                setValue(note.content);
            }
        } else {
            setTitle('');
            setValue('');
        }
    }, [noteId]);

    function createNote() {
        if (!title.trim() || !value.trim()) {
            toast.error('Please enter both title and content!');
            return;
        }

        const note = {
            title: title,
            content: value,
            _id: noteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };

        if (noteId) {
            dispatch(updateToNotes(note));
        } else {
            dispatch(addToNotes(note));
        }

        setTitle('');
        setValue('');
        setSearcParams({});
        toast.success(noteId ? 'Note updated successfully!' : 'Note created successfully!');
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">
                    {noteId ? 'Update Your Note ' : `Create a New Note 📝`}
                </h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Enter Title Here..."
                        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <textarea
                        placeholder="Enter Content Here..."
                        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        rows={10}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <button
                        onClick={createNote}
                        className="w-full py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg hover:bg-amber-600 transition duration-300"
                    >
                        {noteId ? 'Update Note' : 'Create Note'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;