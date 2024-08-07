export interface I_Operator {
  createdAt: string;
  name: string;
  avatar: string;
  isWorking: boolean;
  id: string;
}

export interface I_OperatorAddon {
  fieldName: string;
  text: string;
  isChecked: boolean;
  id: string;
}
