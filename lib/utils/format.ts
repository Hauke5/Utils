import { formatLocale } from 'd3-format';
import { timeFormat }   from 'd3-time-format';
import { ReactNode }    from 'react';

export const locale = formatLocale({
   decimal: ".",
   thousands: " ",
   grouping: [3],
   currency: ['$','']
});

const localeUSD = formatLocale({
   decimal: ".",
   thousands: " ",
   grouping: [3],
   currency: ['$','']
});


export const numFormat  = (fmt:string) => locale.format(fmt)
export const dateFormat = (fmt:string) => (date:Date) => date? timeFormat('%m/%d/%y')(date) : '(date)';

export const fUSD2      = (v:number) => v<1? localeUSD.format('$,.3f')(v) : localeUSD.format('$,.3s')
export const fUSD       = (v:number) => v<1? localeUSD.format('$,.5f')(v) : localeUSD.format('$,.3~s')

export const NumFormats = {
   d:    ',d',
   f0:   ',.0~f',
   f1:   ',.1f',
   f2:   ',.2f',
   f4:   ',.4~f',
   SI3:  ',.4~s',
   SI5:  ',.6~s',
   pct0: ',.0~%',
   pct1: ',.1~%',
   pct2: ',.2~%',
   Popup:',.4~s',
}

export const DateFormats = {
   YrDay:   '%m/%d/%y',
   YrHour:  '%m/%d/%y %H:%M'
}

export const fmtd    = locale.format(',d');
export const fmt0    = locale.format(',.0~f');
export const fmt1    = locale.format(',.1f');
export const fmt2    = locale.format(',.2f');
export const fmt4    = locale.format(',.4~f');
export const fmtUSD2 = (v:number) => v<1? locale.format('$,.3f')(v) : locale.format('$,.3s')(v);
export const fmtUSD  = (v:number) => v<1? locale.format('$,.5f')(v) : locale.format('$,.4~s')(v);
export const fmtSI2  = locale.format(',.3~s');
export const fmtSI3  = locale.format(',.4~s');
export const fmtSI5  = locale.format(',.6~s');
export const pct0    = locale.format(',.0~%');
export const pct1    = locale.format(',.1~%');
export const pct2    = locale.format(',.2~%');
export const fmtPopup = locale.format(',.4~s');
export const dateFmt = (date:Date) => date? timeFormat('%m/%d/%y')(date) : '***';
export const dateFmtHM = (date:Date) => date? timeFormat('%m/%d/%y %H:%M')(date) : '***';


export type FmtData = string | number | Date | ReactNode
export interface DataFormat{
   (val:FmtData): string | ReactNode
}