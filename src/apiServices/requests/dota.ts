import dotaApi from '../api';
import { AxiosResponse } from 'axios';

const dota = {
	getHeroes: async (): Promise<AxiosResponse<any>> => dotaApi.get('/heroStats'),
	getHeroLastMatches: async (hero_id: number): Promise<AxiosResponse<any>> =>
		dotaApi.get(`/heroes/${hero_id}/matches`)
};

export default dota;
