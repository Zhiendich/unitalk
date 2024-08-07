import { I_Operator, I_OperatorAddon } from "./types";
import {
  Api,
  ApiRoutesEnum,
  AxiosResponse,
  GetByPageParams,
  PAGE_SIZE,
} from "../../api";

export * from "./types";
export const Operators = {
  getOperators: async ({
    page = 1,
    limit = PAGE_SIZE,
    name,
  }: GetByPageParams): Promise<AxiosResponse<I_Operator[]>> => {
    return await Api.get<unknown, AxiosResponse<I_Operator[]>>(
      ApiRoutesEnum.GetOperators,
      {
        params: { page, limit, name },
      },
    );
  },
  getOperatorAddons: async (): Promise<AxiosResponse<I_OperatorAddon[]>> => {
    return await Api.get<unknown, AxiosResponse<I_OperatorAddon[]>>(
      ApiRoutesEnum.GetOperatorAddons,
    );
  },
};
