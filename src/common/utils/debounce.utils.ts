export const debounce = (func: Function, wait: number) => {
  let timeout: number;
  return (...args: any[]) => {
    const context: any = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
