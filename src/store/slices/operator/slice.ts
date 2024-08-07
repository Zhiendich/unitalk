import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_OperatorState } from "./types";
import { I_Operator, I_OperatorAddon } from "../../../models";
import { PaginationType } from "../../../api";

const initialState: I_OperatorState = {
  operators: [],
  operatorAddons: [],
  loading: false,
};
export const operatorSlice = createSlice({
  name: "operator",
  initialState,
  reducers: {
    onGet: (
      state,
      action: PayloadAction<{ pagination: PaginationType; name: string }>,
    ) => {},
    onGetAddons: () => {},
    onChangePagination: () => {},
    onSetOperators: (state, action: PayloadAction<I_Operator[]>) => {
      state.operators = action.payload;
    },
    onSetAddons: (state, action: PayloadAction<I_OperatorAddon[]>) => {
      state.operatorAddons = action.payload;
    },
    onSetLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default operatorSlice.reducer;
