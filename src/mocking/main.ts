export function processWithUtil(num: number, util: (n: number) => void) {
  util(num);
}

export function serviceUsingExternalValue(getExternalValue: () => string) {
  return getExternalValue();
}
