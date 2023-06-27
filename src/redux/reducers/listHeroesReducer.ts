import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IHeroModel } from "../../model/hero.model";

export interface ListHeroesState {
    value: IHeroModel[];
}

const initialState: ListHeroesState = {
    value: []
}

export const listHeroesSlice = createSlice({
    name: "listHeroes",
    initialState,
    reducers: {
        setListHeroes: (state, action: PayloadAction<IHeroModel[]>) => {
            state.value = {
                ...state.value,
                ...action.payload
            };
        }
    }
});

export const { setListHeroes } = listHeroesSlice.actions;

export const selectCount = (state: RootState) => state.listHeroes;

export default listHeroesSlice.reducer;