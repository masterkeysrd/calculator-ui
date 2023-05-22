export interface Profile extends User {
  balance: UserBalance;
}

export interface User {
  id: number;
  username: string;
}

export interface UserBalance {
  amount: number;
  inFlightAmount: number;
}

export type OperationWidget = Operation & OperationWidgetMeta;

export type Operation = {
  id: number;
  type: string;
  cost: number;
};

export interface OperationWidgetMapping {
  [key: string]: OperationWidgetMeta;
}

export interface OperationWidgetMeta {
  symbol: string;
  btnColor: string;
  size: string;
  rules: {
    [key: string]: Array<(value: string) => boolean | string>;
  }
}

export interface CalculatorResult {
  recordId: number;
  amount: number;
  userBalance: number;
  result: number | string;
  date: string;
}

export interface Record {
  id: number;
  userId: number;
  operationId: number;
  amount: number;
  userBalance: number;
  result: number;
  date: string;
}
