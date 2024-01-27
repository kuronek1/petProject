export enum DotaTypes {
  GET_DOTA_HEROES = "GET_DOTA_HEROES",
}

export interface InitialState {
  dotaLoading: boolean;
  dotaHeroes: DotaHero[];
}

export interface DotaHero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
}

export type GetDotaHeroes = {
  type: typeof DotaTypes.GET_DOTA_HEROES;
  payload: any;
};

export {};
