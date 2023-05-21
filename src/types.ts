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
