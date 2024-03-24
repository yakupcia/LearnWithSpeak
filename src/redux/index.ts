import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import {favoriteSlice} from './slices';

//Slices

const reducers = combineReducers({
  favorite: favoriteSlice,
});

const store = configureStore({
  reducer: reducers,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, useAppDispatch, useAppSelector};
export type {RootState, AppDispatch};

export default store;
