import { default as productsReducer } from './products.slice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducers = {
    products: productsReducer,
};

export const store = configureStore({
    reducer: combineReducers(reducers),
    devTools: true,
});
