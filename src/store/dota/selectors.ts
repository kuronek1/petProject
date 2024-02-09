import { RootState } from '../index';
import { DotaHero } from './types';

export const dotaLoading = (state: RootState): boolean => state.dota.dotaLoading;
export const dotaHeroes = (state: RootState): DotaHero[] => state.dota.dotaHeroes;
export const dotaHeroMatches = (state: RootState): any => state.dota.dotaHeroMatches;
