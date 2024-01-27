import axios from "axios";
import { API_DOTA_DOMAINS } from "../constants/api";

const dotaApi = axios.create({
  baseURL: API_DOTA_DOMAINS,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default dotaApi;
