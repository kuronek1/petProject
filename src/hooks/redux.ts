import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispath, RootState } from "../store";
import { SelectEffect, select } from "redux-saga/effects";

export const useAppDispatch = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectState = <T>(selector: (s: RootState) => T): SelectEffect =>
  select(selector);
