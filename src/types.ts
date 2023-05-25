export interface Config {
  apiUrl: string;
}

export interface Profile extends User {
  balance: UserBalance;
}

export interface User {
  id: number;
  username: string;
}

export interface UserBalance {
  amount: number;
  amountInFlight: number;
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
  };
}

export interface CalculatorResult {
  recordId: number;
  amount: number;
  userBalance: number;
  result: number | string;
  date: string;
}

export interface Searchable extends Pageable {
  query: string;
}

export interface Record {
  id: number;
  userId: number;
  operationId: number;
  operationType: string;
  amount: number;
  userBalance: number;
  result: number | string;
  createdAt: string;
}

export interface Pageable {
  page: number;
  size: number;
  sort: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  total_count: number;
  totalPages: number;
}
