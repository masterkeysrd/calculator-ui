import { reactive, readonly, toRefs, watch } from "vue";
import { Profile } from "../types";
import { useGetMe, useGetMyBalance } from "../services/user.service";

const state = reactive<Profile>({
  id: 0,
  username: "",
  balance: {
    amount: 0,
    inFlightAmount: 0,
  },
});

export function useLoadProfile() {
  const { me, getMe } = useGetMe();

  async function loadProfile() {
    await getMe();
  }

  watch(me, (newMe) => {
    state.id = newMe?.id as number;
    state.username = newMe?.username as string;
  });

  return loadProfile;
}

export function useProfile() {
  const readonlyState = readonly(state);

  return {
    profile: readonlyState,
  };
}

export function useLoadProfileBalance() {
  const { balance, loadMyBalance } = useGetMyBalance();

  async function loadProfileBalance() {
    await loadMyBalance();
  }

  watch(balance, (newBalance) => {
    state.balance = newBalance;
  });

  return loadProfileBalance;
}

export function useRefreshBalance() {
  const loadProfileBalance = useLoadProfileBalance();

  async function refreshBalance() {
    await loadProfileBalance();
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
