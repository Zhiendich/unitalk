import { AppState } from "../../index";

export const selectOperators = (state: AppState) => state.operators.operators;
export const selectLoadingState = (state: AppState) => state.operators.loading;
export const selectAddons = (state: AppState) => state.operators.operatorAddons;
