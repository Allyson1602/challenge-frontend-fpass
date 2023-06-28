import { configureStore } from "@reduxjs/toolkit";
import listHeroesReducer from "../reducers/listHeroesReducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import heroReducer from "../reducers/heroReducer";

export const store = configureStore({
    reducer: {
        listHeroes: listHeroesReducer,
        hero: heroReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;