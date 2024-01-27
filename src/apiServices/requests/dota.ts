import { DotaHeroesFilters } from "../../constants/types/filters";
import dotaApi from "../api";
import { AxiosResponse } from "axios";

const dota = {
  getHeroes: async (filters: DotaHeroesFilters): Promise<AxiosResponse<any>> =>
    dotaApi.get("/heroes", { params: filters }),
};

export default dota;
