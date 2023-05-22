import { ref } from "vue";
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


export function usePerformCalculation() {
  const result = ref("");
  const error = ref("");

  const calculate = useCalculate();


  async function performOperation(operationId: number, args: string[]) {
    error.value = "";
    try {
      result.value = await calculate(operationId, args);
    }
    catch (err: any) {
      error.value = err.response?.data?.message;
    }
  }

  return {
    result,
    error,
    performOperation,
  };
}
