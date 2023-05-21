import { useHttp } from "../common/http";

const API_URL = "http://localhost:8080/api/v1/calculations";

export function useCalculate() {
  const http = useHttp();

  async function calculate(operationId: number, args: string[]) {
    const response = await http.value.post(`${API_URL}/calculate`, {
      operationId,
      arguments: args,
    });

    return response.data;
  }

  return calculate;
}
