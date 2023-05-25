import { camelToSnakeCase } from "./strings.utils";

export function getSort(sortBy: { key: string; order: string }) {
    return camelToSnakeCase(sortBy.key) + " " + sortBy.order;
  }
  