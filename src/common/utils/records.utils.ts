import { Record } from "../../types";
import { formatCurrency } from "./currency.util";
import { formatDateString } from "./date.utils";

export function mapRecord(record: Record) {
  return {
    ...record,
    id: record.id,
    createdAt: formatDateString(record.createdAt),
    userBalance: formatCurrency(record.userBalance),
    amount: formatCurrency(record.amount),
    result: formatResult(record.result as string),
  }
}

export function formatResult(result: string) {
  const number = parseFloat(result);

  if (isNaN(number)) {
    return result;
  }

  const [integer, decimal] = result.split(".");

  if (!decimal) {
    return integer;
  }

  if (decimal.length === 1) {
    return `${integer}.${decimal}0`;
  }

  if (decimal.length > 6) {
    return `${integer}.${decimal.slice(0, 6)}`;
  }

  return result;
}
