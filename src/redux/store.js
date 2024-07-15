import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/nav/navSlice';
import footerReducer from '../features/footer/footerSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        footer: footerReducer,
    },
})