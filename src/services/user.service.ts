import { Ref, ref, watch } from "vue";
import { User, UserBalance } from "../types";
import config from "../common/config";
import { useGet } from "../common/http/http-client";

const baseUrl = `${config.apiUrl}/v1/users`;

export function useGetMe(url = `${baseUrl}/me`) {
  const { result, error } = useGet<User>(url);

  return { me: result, error };
}

export function useGetMyBalance(url = `${baseUrl}/me/balance`) {
  const { result, error } = useGet<UserBalance>(url);
  const balance: Ref<UserBalance> = ref(initialBalance());

  watch(result, (value) => {
    balance.value = value as UserBalance;
  });

  watch(error, () => {
    balance.value = initialBalance();
  });

  return { balance, error };
}

function initialBalance(): UserBalance {
  return {
    amount: 0,
    amountInFlight: 0,
  };
}
