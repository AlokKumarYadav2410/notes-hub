import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
  },
  reducers: {
    addToNotes: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(state.notes))
      // localStorage.setItem('notes', state.notes)
      // toast.success('Note Added Successfully');
    },
    updateToNotes: (state, action) => {
      const note = action.payload;
      const index = state.notes.findIndex((item) => item._id === action.payload._id);
      if(index >= 0){
        state.notes[index] = note;
        localStorage.setItem('notes', JSON.stringify(state.notes))
        // toast.success('Note Updated Successfully');
      }
    },
    resetAllNotes: (state, action) => {
      state.notes = [];
      localStorage.removeItem('notes');
      toast.success('All Notes Removed Successfully');

    },
    removeFromNotes: (state, action) => {
      const noteId = action.payload;
      const index = state.notes.findIndex((item) => item._id === noteId);
      if(index >= 0){
        state.notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(state.notes))
        // toast.success('Note Removed Successfully');
      }else{
        toast.error('Note Not Found!');
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes } = noteSlice.actions

export default noteSlice.reducer