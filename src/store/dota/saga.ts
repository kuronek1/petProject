import { PayloadAction } from '@reduxjs/toolkit';
import {
	saveDotaFailure,
	saveHeroesSuccess,
	startLoading,
	saveDotaHeroMatchesSuccess
} from './reducer';
import { call, debounce, put } from 'redux-saga/effects';
import apiService from '../../apiServices/requests';
import { DotaTypes } from './types';

export function* getDotaHeroes() {
	yield put(startLoading());

	const { data } = yield call(apiService.getHeroes);

	if (data.length) {
		yield put(saveHeroesSuccess(data));
	} else {
		saveDotaFailure();
	}
}

export function* getHeroLastMatches(actions: PayloadAction<number>) {
	yield put(startLoading());

	const { payload } = actions;

	const { data } = yield call(apiService.getHeroLastMatches, payload);

	if (data.length) {
		yield put(saveDotaHeroMatchesSuccess(data));
	} else {
		saveDotaFailure();
	}
}

export function* watchAllDota() {
	yield debounce(400, DotaTypes.GET_DOTA_HEROES, getDotaHeroes);
	yield debounce(400, DotaTypes.GET_DOTA_HERO_LAST_MATCHES, getHeroLastMatches);
}
