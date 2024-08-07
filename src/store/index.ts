import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { operatorSlice, operatorsSaga } from "./slices";
import { spawn } from "typed-redux-saga";
import { sagaMiddleware } from "./middleware";
export * from "./slices";

const rootReducer = combineReducers({
  operators: operatorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
});
function* rootSaga() {
  yield* spawn(operatorsSaga);
}

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
