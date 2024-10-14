import { currencies } from "@/app/(apps)/banking/support/db/dbUtils"


export type FormatOptions = Intl.NumberFormatOptions

export function formatNumber(options:FormatOptions) {
   const format = Intl.NumberFormat(undefined, options).format
   return (value:number):string  => format(value)
}

export function formatUSD() {
   const options:FormatOptions = {
      style:      'currency',
      currency:   'USD',
      currencyDisplay:  'narrowSymbol'
   }
   return formatNumber(options)
}

export function formatDecimal(options:FormatOptions) {
   const format = formatNumber(Object.assign({
      style:            'decimal',
      useGrouping:      true,
      compactDisplay:   "short",
   }, options))
   return (val:number) => format(val).replaceAll(',', ' ')
}

export function formatPercent(options:FormatOptions) {
   const format = formatNumber(Object.assign({
      style:            'percent',
      useGrouping:      true,
      compactDisplay:   "short",
   }, options))
   return (val:number) => format(val).replaceAll(',', ' ')
}

export function formatCurrency(options:FormatOptions) {
   const format = formatNumber(Object.assign({
      style:            'currency',
      currency:         'USD',
      useGrouping:      true,
      compactDisplay:   "short",
   }, options))
   return (val:number) => format(val).replaceAll(',', ' ')
}


