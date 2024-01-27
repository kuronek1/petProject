import { combineReducers } from "@reduxjs/toolkit";

import dota from "./dota/reducer";

const rootReduser = () =>
  combineReducers({
    dota,
  });

export default rootReduser;
