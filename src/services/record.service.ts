import { useHttp } from "../common/http";
import config from '../common/config'

const API_URL = `${config.apiUrl}/v1/records`;

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
