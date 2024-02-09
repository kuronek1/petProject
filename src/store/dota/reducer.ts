import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
	dotaLoading: false,
	dotaHeroes: [],
	dotaHero: {
		id: 0,
		name: '',
		localized_name: '',
		primary_attr: '',
		attack_type: '',
		roles: [],
		img: '',
		icon: '',
		base_health: 0,
		base_health_regen: 0,
		base_mana: 0,
		base_mana_regen: 0,
		base_armor: 0,
		base_mr: 0,
		base_attack_min: 0,
		base_attack_max: 0,
		base_str: 0,
		base_agi: 0,
		base_int: 0,
		str_gain: 0,
		agi_gain: 0,
		int_gain: 0,
		attack_range: 0,
		projectile_speed: 0,
		attack_rate: 0,
		base_attack_time: 0,
		attack_point: 0,
		move_speed: 0,
		turn_rate: 0,
		cm_enabled: '',
		legs: 0,
		day_vision: 0,
		night_vision: 0,
		hero_id: 0,
		turbo_picks: 0,
		turbo_wins: 0,
		pro_ban: 0,
		pro_win: 0,
		pro_pick: 0
	},
	dotaHeroMatches: []
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
		saveDotaHeroMatchesSuccess: (state, action: PayloadAction<any>): any => {
			// TYPES
			state.dotaHeroMatches = action.payload;
			state.dotaLoading = false;
		}
	}
});

export const { startLoading, saveHeroesSuccess, saveDotaFailure, saveDotaHeroMatchesSuccess } =
	dota.actions;

export default dota.reducer;
