export const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
})

export const moneyFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
})

export const currencyToNumberFormatter = new Intl.Locale('en', {})
