import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: 1, label: 'Projects', link: '/projects' },
        { id: 2, label: 'Experience', link: '/experience'},
        { id: 3, label: 'Education', link: '/eduaction' },
        { id: 4, label: 'Home', link: '/' },
        { id: 5, label: 'Contact', link: '/contact' },
    ],
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        addFooterItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeFooterItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateFooterItem: (state, action) => {
            const { id, label, link } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                existingItem.label = label;
                existingItem.link = link;
            }
        },
    },
});

export const { addFooterItem, removeFooterItem, updateFooterItem } = footerSlice.actions;
export default footerSlice.reducer;