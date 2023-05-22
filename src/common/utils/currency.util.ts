const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function useFormatCurrency() {
  return formatCurrency;
}

export function formatCurrency(amount: number) {
  return formatter.format(amount);
}
