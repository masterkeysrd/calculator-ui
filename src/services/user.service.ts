import { Ref, ref } from "vue";
import { useHttp } from "../common/http";
import { User, UserBalance } from "../types";

const API_URL = "http://localhost:8080/api/v1/users/";

export function useGetMe() {
  const http = useHttp();
  const me: Ref<User | undefined> = ref();

  async function getMe() {
    try {
      const response = await http.value.get(API_URL + "me");
      me.value = response.data;
    } catch (err) {
      console.log(err);
    }
  }

  return { me, getMe };
}

export function useGetMyBalance() {
  const http = useHttp();
  const balance: Ref<UserBalance> = ref({
    amount: 0,
    inFlightAmount: 0,
  });

  async function loadMyBalance() {
    const response = await http.value.get(`${API_URL}me/balance`);
    balance.value = response.data;
  }

  return { balance, loadMyBalance };
}
