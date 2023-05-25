import { useHttp } from "../common/http";
import config from "../common/config";
import { PaginatedResponse, Record, Searchable } from "../types";
import { Ref, isRef, ref, unref, watch } from "vue";
import { useGet } from "../common/http/http-client";

const API_URL = `${config.apiUrl}/v1/records`;

type Response = PaginatedResponse<Record>;

export function useListRecords(search: Searchable | Ref<Searchable>) {
  const url = ref(createUrl(API_URL, unref(search)));

  if (isRef(search)) {
    watch(search, () => {
      url.value = createUrl(API_URL, search.value);
    });
  }

  return useGet<Response>(url);
}

export function useDeleteRecord() {
  const http = useHttp();

  async function deleteRecord(id: number) {
    await http.value.delete(`${API_URL}/${id}`);
  }

  return deleteRecord;
}

function createUrl(url: string, params: any) {
  return `${url}?${new URLSearchParams(params)}`;
}
