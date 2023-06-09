import { OperationWidgetMapping } from "../types";

const commonRules = {
  number1: [
    (value: string) => value.length > 0 || "Number 1 is required",
    (value: string) => !isNaN(Number(value)) || "Number 1 must be a number",
  ],
  number2: [
    (value: string) => value.length > 0 || "Number 2 is required",
    (value: string) => !isNaN(Number(value)) || "Number 2 must be a number",
  ],
};

export const operationWidgetMapping: OperationWidgetMapping = {
  addition: {
    symbol: "+",
    btnColor: "warning",
    size: "md-3",
    rules: commonRules,
  },
  subtraction: {
    symbol: "-",
    btnColor: "warning",
    size: "md-3",
    rules: commonRules,
  },
  multiplication: {
    symbol: "*",
    btnColor: "warning",
    size: "md-3",
    rules: commonRules,
  },
  division: {
    symbol: "/",
    btnColor: "warning",
    size: "md-3",
    rules: commonRules,
  },
  square_root: {
    symbol: "√",
    btnColor: "warning",
    size: "md-3",
    rules: {
      number1: commonRules.number1,
    },
  },
  random_string: {
    symbol: "Random String",
    btnColor: "error",
    size: "md-9",
    rules: {},
  },
};
