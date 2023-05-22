import { ref, watch } from "vue";
import config from "../common/config";
import { useGet } from "../common/http/http-client";
import { PaginatedResponse, Operation } from "../types";

const baseUrl = `${config.apiUrl}/v1/operations`;

type ListOperationsResponse = PaginatedResponse<Operation>;

export function useListOperations(url = baseUrl) {
  const { result, error } = useGet<ListOperationsResponse>(url);
  const operations = ref<Operation[]>([]);

  watch(result, (value) => {
    operations.value = value?.data as Operation[];
  });

  return { operations, error };
}
