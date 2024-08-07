import { I_Operator, I_OperatorAddon } from "../../../models";

export interface I_OperatorState {
  operators: I_Operator[];
  operatorAddons: I_OperatorAddon[];
  loading: boolean;
}
