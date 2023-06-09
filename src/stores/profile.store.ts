import { reactive, readonly, toRefs, watch } from "vue";
import { Profile } from "../types";
import { useGetMe, useGetMyBalance } from "../services/user.service";

const state = reactive<Profile>({
  id: 0,
  username: "",
  balance: {
    amount: 0,
    amountInFlight: 0,
  },
});

export function useLoadProfile() {
  const { me, error } = useGetMe();

  watch(me, (newMe) => {
    state.id = newMe?.id as number;
    state.username = newMe?.username as string;
  });

  return { error };
}

export function useProfile() {
  const readonlyState = readonly(state);

  return {
    profile: readonlyState,
  };
}

export function useLoadProfileBalance() {
  const { balance, error } = useGetMyBalance();

  watch(balance, (newBalance) => {
    state.balance = newBalance;
  });

  return { error };
}

export function useRefreshBalance() {
  async function refreshBalance() {
    useLoadProfileBalance();
  }

  return refreshBalance;
}

export function useProfileBalance() {
  const stateRefs = toRefs(state);
  const readonlyBalance = readonly(stateRefs.balance);

  return {
    balance: readonlyBalance,
  };
}
