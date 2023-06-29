import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICharacter, IItemList } from "../../model/hero.model";

export interface HeroState {
    hero: ICharacter;
}

const initialState: HeroState = {
    hero: {
        id: 0,
        name: "",
        description: "",
        modified: null,
        resourceURI: "",
        urls: [],
        thumbnail: {
            extension: "",
            path: "",
        },
        comics: {} as IItemList,
        stories: {} as IItemList,
        events: {} as IItemList,
        series: {} as IItemList,
    }
}

export const heroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {
        setHero: (state, action: PayloadAction<ICharacter>) => {
            state.hero = {
                ...state.hero,
                ...action.payload
            };

            return state;
        }
    }
});

export const { setHero } = heroSlice.actions;

export const selectCount = (state: RootState) => state.hero;

export default heroSlice.reducer;