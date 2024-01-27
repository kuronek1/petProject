import { DotaTypes, GetDotaHeroes } from "./types";

export const getDotaHeroes = (payload: any): GetDotaHeroes => ({
  type: DotaTypes.GET_DOTA_HEROES,
  payload,
});
