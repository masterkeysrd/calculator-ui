import { Ref, onMounted, ref } from "vue";
import { Operation } from "../types";
import { useHttp } from "../common/http";

const API_URL = "http://localhost:8080/api/v1/operations";

export function useListOperations() {
  const http = useHttp();
  const operations: Ref<Operation[]> = ref([]);

  async function listOperations() {
    const response = await http.value.get(`${API_URL}`);
    const { data } = response.data;
    operations.value = data;
  }

  onMounted(listOperations);

  return {
    operations,
  };
}
