import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICharacter } from "../../model/hero.model";

export interface ListHeroesState {
    heroes: ICharacter[];
}

const initialState: ListHeroesState = {
    heroes: []
}

export const listHeroesSlice = createSlice({
    name: "listHeroes",
    initialState,
    reducers: {
        setListHeroes: (state, action: PayloadAction<ICharacter[]>) => {
            state.heroes = [
                ...state.heroes,
                ...action.payload
            ];

            return state;
        }
    }
});

export const { setListHeroes } = listHeroesSlice.actions;

export const selectCount = (state: RootState) => state.listHeroes;

export default listHeroesSlice.reducer;