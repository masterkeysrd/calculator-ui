import { Ref, ref, watch } from "vue";
import { operationWidgetMapping } from "../../constants/operations.constants";
import { Operation, OperationWidget } from "../../types";

export function useOperationWidgetMapping(operations: Ref<Operation[]>) {
  const widgets: Ref<OperationWidget[]> = ref([]);

  function mapOperationWidget() {
    widgets.value = operations.value.map((operation) => {
      return {
        ...operation,
        ...(operationWidgetMapping[operation.type] || {}),
      };
    });
  }

  watch(operations, mapOperationWidget, { immediate: true });

  return widgets;
}
