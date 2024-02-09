export enum DotaTypes {
	GET_DOTA_HEROES = 'GET_DOTA_HEROES',
	GET_DOTA_HERO_LAST_MATCHES = 'GET_DOTA_HERO_LAST_MATCHES'
}

export interface InitialState {
	dotaLoading: boolean;
	dotaHeroes: DotaHero[];
	dotaHero: DotaHero;
	dotaHeroMatches: DotaHeroLastMatch[];
}

export interface DotaHero {
	id: number;
	name: string;
	localized_name: string;
	primary_attr: string;
	attack_type: string;
	roles: string[];
	img: string;
	icon: string;
	base_health: number;
	base_health_regen: number;
	base_mana: number;
	base_mana_regen: number;
	base_armor: number;
	base_mr: number;
	base_attack_min: number;
	base_attack_max: number;
	base_str: number;
	base_agi: number;
	base_int: number;
	str_gain: number;
	agi_gain: number;
	int_gain: number;
	attack_range: number;
	projectile_speed: number;
	attack_rate: number;
	base_attack_time: number;
	attack_point: number;
	move_speed: number;
	turn_rate: number;
	cm_enabled: string;
	legs: number;
	day_vision: number;
	night_vision: number;
	hero_id: number;
	turbo_picks: number;
	turbo_wins: number;
	pro_ban: number;
	pro_win: number;
	pro_pick: number;
}

export interface DotaHeroLastMatch {
	account_id: number;
	assists: number;
	deaths: number;
	duration: number;
	kills: number;
	league_name: string;
	leagueid: number;
	match_id: number;
	player_slot: number;
	radiant: boolean;
	radiant_win: boolean;
	start_time: number;
}

export type GetDotaHeroes = {
	type: typeof DotaTypes.GET_DOTA_HEROES;
};

export type GetDotaHeroLastMatches = {
	type: typeof DotaTypes.GET_DOTA_HERO_LAST_MATCHES;
	payload: number;
};
