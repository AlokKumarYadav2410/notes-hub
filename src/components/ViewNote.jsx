import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewNote = () => {
    const { id } = useParams();
    const allNotes = useSelector((state) => state.note.notes);
    const note = allNotes.find((note) => note._id === id);

    if (!note) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <p className="text-gray-400 text-lg">Note not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto">
                {/* Title Heading and Metadata */}
                <div className="flex flex-row items-center justify-between mb-4">
                    <label className="text-lg font-semibold text-amber-500">
                        Title
                    </label>
                    <p className="text-gray-400 text-sm">
                        Created At: {new Date(note.createdAt).toLocaleString()}
                    </p>
                </div>

                {/* Note Title Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        disabled
                        value={note.title}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none cursor-not-allowed"
                    />
                </div>

                {/* Note Content */}
                <div>
                    <label className="block text-lg font-semibold text-amber-500 mb-2">
                        Content
                    </label>
                    <textarea
                        disabled
                        value={note.content}
                        rows={15}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none text-justify cursor-not-allowed"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewNote;