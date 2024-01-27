import { PayloadAction } from "@reduxjs/toolkit";
import { saveDotaFailure, saveHeroesSuccess, startLoading } from "./reducer";
import { call, debounce, put } from "redux-saga/effects";
import apiService from "../../apiServices/requests";
import { DotaHeroesFilters } from "../../constants/types/filters";
import { DotaTypes } from "./types";

export function* getDotaHeroes(actions: PayloadAction<DotaHeroesFilters>) {
  yield put(startLoading());

  const { payload } = actions;

  const { data } = yield call(apiService.getHeroes, payload);

  if (data.length) {
    yield put(saveHeroesSuccess(data));
  } else {
    saveDotaFailure();
  }
}

export function* watchAllDota() {
  yield debounce(400, DotaTypes.GET_DOTA_HEROES, getDotaHeroes);
}
