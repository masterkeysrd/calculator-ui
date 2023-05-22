import { useHttp } from "../common/http";

const API_URL = "http://localhost:8080/api/v1/records";

export function useListRecords() {
  const http = useHttp();

  async function listRecords() {
    const response = await http.value.get(API_URL);
    const { data } = response.data;
    return data;
  }

  return listRecords;
}

export function useDeleteRecord() {
  const http = useHttp();

  async function deleteRecord(id: number) {
    await http.value.delete(`${API_URL}/${id}`);
  }

  return deleteRecord;
}
