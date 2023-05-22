import { operationWidgetMapping } from "../../constants/operations.constants";
import { Operation, OperationWidget } from "../../types";

export function mapOperationsToWidget(
  operations: Operation[]
): OperationWidget[] {
  return operations.map((operation) => {
    return {
      ...operation,
      ...(operationWidgetMapping[operation.type] || {}),
    };
  });
}
