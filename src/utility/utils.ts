import BigNumber from "bignumber.js";

export function transformIntoNormalNumber(
  num: number | BigInt | string,
  toFixed?: boolean
): string {
  // Convert input to BigNumber
  const value = new BigNumber(num.toString());

  // Perform the transformation
  const transformedValue = value.multipliedBy(new BigNumber(10).pow(-18));

  // Apply toFixed(18) if the option is set, otherwise return the plain value
  return toFixed ? transformedValue.toFixed(18) : transformedValue.toString();
}

export const isLargeNumber = (value: number) => value > 1_000_000;
