import { onMounted, ref } from "vue";
import { useHttp } from "../common/http";

const API_URL = "http://localhost:8080/api/v1/records";

export function useListRecords() {
  const http = useHttp();

  const records = ref([]);

  async function listRecords() {
    const response = await http.value.get(API_URL);
    const { data } = response.data;
    records.value = data;
  }

  onMounted(async () => await listRecords());

  return {
    records,
  };
}
