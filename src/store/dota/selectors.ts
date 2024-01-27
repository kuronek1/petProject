import { RootState } from "../index";

export const dotaLoading = (state: RootState): boolean =>
  state.dota.dotaLoading;
export const dotaHeroes = (state: RootState): any => state.dota.dotaHeroes;
