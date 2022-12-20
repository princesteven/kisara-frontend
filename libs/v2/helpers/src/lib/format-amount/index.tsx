export const formatAmount = (amount: string | number): string => {
  if (typeof amount === 'string')
  {
    amount = Number(amount)
    return Intl.NumberFormat('en-EN').format(amount)
  }

  if (typeof amount === "number")
  {
    return Intl.NumberFormat('en-EN').format(amount)
  }

  return 'NaN'
};
