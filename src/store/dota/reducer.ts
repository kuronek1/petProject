import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
	dotaLoading: false,
	dotaHeroes: [],
	dotaHero: []
};

export const dota = createSlice({
	name: 'dota',
	initialState,
	reducers: {
		startLoading: (state): void => {
			state.dotaLoading = true;
		},
		saveDotaFailure: (state): void => {
			state.dotaLoading = false;
		},
		saveHeroesSuccess: (state, action: PayloadAction<any>): any => {
			// TYPES
			state.dotaHeroes = action.payload;
			state.dotaLoading = false;
		},
		saveHeroSuccess: (state, action: PayloadAction<any>): any => {
			// TYPES
			state.dotaHero = action.payload;
			state.dotaLoading = false;
		}
	}
});

export const { startLoading, saveHeroesSuccess, saveDotaFailure, saveHeroSuccess } = dota.actions;

export default dota.reducer;
