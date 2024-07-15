import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Projects', link: '/projects' },
    { id: 3, label: 'Experience', link: '/experience' },
    { id: 4, label: 'Education', link: '/eduaction' },
    { id: 5, label: 'Contact', link: '/contact' },
  ],
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, label, link } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.label = label;
        existingItem.link = link;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = navSlice.actions;

export default navSlice.reducer;
