import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromNotes } from '../redux/noteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import editImg from '../assets/image.png';
import shareImg from '../assets/image1.png';
const Note = () => {
  const notes = useSelector((state) => state.note.notes);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedNotes, setExpandedNotes] = useState({}); // Track expanded notes
  const dispatch = useDispatch();

  // Filter notes based on the search term
  const filteredData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete functionality
  function handleDelete(noteId) {
    dispatch(removeFromNotes(noteId));
    toast.success('Note deleted successfully!');
  }

  // Toggle "Show More" or "Show Less"
  function toggleExpand(noteId) {
    setExpandedNotes((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <input
          className="p-3 rounded-lg w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          type="search"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredData.length > 0 ? (
            filteredData.map((note) => (
              <div
                key={note._id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Note Title */}
                <h2 className="text-xl font-semibold text-amber-500">{note.title}</h2>

                {/* Note Content */}
                <p
                  className="text-gray-300 mt-2 break-words overflow-hidden"
                  style={{
                    maxHeight: expandedNotes[note._id] ? 'none' : '100px', // Limit height when collapsed
                    overflow: expandedNotes[note._id] ? 'visible' : 'hidden', // Hide overflowing content
                  }}
                >
                  {note.content}
                </p>

                {/* Show More / Show Less Button */}
                {note.content.length > 100 && (
                  <button
                    onClick={() => toggleExpand(note._id)}
                    className="text-sm text-blue-500 hover:underline mt-2"
                  >
                    {expandedNotes[note._id] ? 'Show Less' : 'Show More'}
                  </button>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* Edit Button */}
                  <button className="text-sm text-amber-500 hover:underline">
                  {/* hover:bg-amber-500 hover:text-white rounded-lg px-2 py-1 transition duration-300 ease-in-out */}
                    <Link to={`/?noteId=${note._id}`}>Edit
                    {/* <img src={editImg} alt="" className="inline-block w-8 h-8 text-black-200"/>  */}
                    </Link>
                  </button>

                  {/* View Button */}
                  <button className="text-sm text-blue-500 hover:underline">
                    <Link to={`/notes/${note._id}`}>View</Link>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>

                  {/* Copy Button */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(note.content);
                      toast.success('Copied to Clipboard!');
                    }}
                    className="text-sm text-green-500 hover:underline"
                  >
                    Copy
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={() => {
                      const shareableLink = `${window.location.origin}/notes/${note._id}`;
                      navigator.clipboard.writeText(shareableLink);
                      toast.success('Shareable link copied to clipboard!');
                    }}
                    className="text-sm text-purple-500 hover:underline"
                  >
                    Share
                  {/* <img src={shareImg} alt="Share" className="inline-block w-8 h-8 text-black-200" /> */}
                  </button>
                </div>

                {/* Note Creation Date */}
                <div className="text-gray-400 text-sm mt-2">
                  {new Date(note.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No notes found. Try creating one!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;