import { AxiosError } from "axios";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware({
  onError: (error: AxiosError) => {
    console.log("[SAGA]", error);
  },
});

export default () => [sagaMiddleware];
