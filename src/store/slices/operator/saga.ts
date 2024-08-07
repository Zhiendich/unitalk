import { call, fork, put, takeLatest, takeLeading } from "typed-redux-saga";
import { operatorSlice } from "./slice";
import { Operators } from "../../../models";
import { PayloadAction } from "@reduxjs/toolkit";
import { PaginationType } from "../../../api";

function* fetchOperatorsWorker(
  action: PayloadAction<{ pagination: PaginationType; name: string }>,
) {
  try {
    yield* put(operatorSlice.actions.onSetLoading(true));
    const { pagination, name } = action.payload;
    const { data } = yield* call(Operators.getOperators, {
      page: pagination.page + 1,
      name,
    });
    yield* put(operatorSlice.actions.onSetOperators(data));
  } catch (error) {
    yield* put(operatorSlice.actions.onSetOperators([]));
    console.log("fetchOperatorsWorker error", error);
  } finally {
    yield* put(operatorSlice.actions.onSetLoading(false));
  }
}

function* fetchOperatorAddonsWorker() {
  const { data } = yield* call(Operators.getOperatorAddons);
  yield* put(operatorSlice.actions.onSetAddons(data));
}

function* operatorsWatcher() {
  yield* takeLeading(operatorSlice.actions.onGet.type, fetchOperatorsWorker);
  yield* takeLatest(
    operatorSlice.actions.onChangePagination.type,
    fetchOperatorsWorker,
  );
  yield* takeLeading(
    operatorSlice.actions.onGetAddons.type,
    fetchOperatorAddonsWorker,
  );
}

export function* operatorsSaga() {
  yield* fork(operatorsWatcher);
}
