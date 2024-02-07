import { DotaTypes, GetDotaHeroLastMatches, GetDotaHeroes } from './types';

export const getDotaHeroes = (): GetDotaHeroes => ({
	type: DotaTypes.GET_DOTA_HEROES
});

export const getDotaHeroLastMatches = (payload: number): GetDotaHeroLastMatches => ({
	type: DotaTypes.GET_DOTA_HERO_LAST_MATCHES,
	payload
});
