/**
 * 日期时间工具库。基于 {@link https://date-fns.org/v2.14.0/docs/Getting-Started | date-fns}。
 *
 * @packageDocumentation
 */

/* istanbul ignore file */

// prettier-ignore
export {
  // 手动导出以解决 @microsoft/api-extractor 的问题
  // @index(['../../node_modules/date-fns/esm/*', '!**/{_*,locale,constants,fp}'], (f, _) => `${f.name.replace(/-/g, '')},`, { onlyDirectories: true })
  add,
  addBusinessDays,
  addDays,
  addHours,
  addISOWeekYears,
  addMilliseconds,
  addMinutes,
  addMonths,
  addQuarters,
  addSeconds,
  addWeeks,
  addYears,
  areIntervalsOverlapping,
  closestIndexTo,
  closestTo,
  compareAsc,
  compareDesc,
  differenceInBusinessDays,
  differenceInCalendarDays,
  differenceInCalendarISOWeeks,
  differenceInCalendarISOWeekYears,
  differenceInCalendarMonths,
  differenceInCalendarQuarters,
  differenceInCalendarWeeks,
  differenceInCalendarYears,
  differenceInDays,
  differenceInHours,
  differenceInISOWeekYears,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInMonths,
  differenceInQuarters,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
  eachDayOfInterval,
  eachHourOfInterval,
  eachMonthOfInterval,
  eachQuarterOfInterval,
  eachWeekendOfInterval,
  eachWeekendOfMonth,
  eachWeekendOfYear,
  eachWeekOfInterval,
  eachYearOfInterval,
  endOfDay,
  endOfDecade,
  endOfHour,
  endOfISOWeek,
  endOfISOWeekYear,
  endOfMinute,
  endOfMonth,
  endOfQuarter,
  endOfSecond,
  endOfToday,
  endOfTomorrow,
  endOfWeek,
  endOfYear,
  endOfYesterday,
  format,
  formatDistance,
  formatDistanceStrict,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatDuration,
  formatISO,
  formatISO9075,
  formatISODuration,
  formatRelative,
  formatRFC3339,
  formatRFC7231,
  fromUnixTime,
  getDate,
  getDay,
  getDayOfYear,
  getDaysInMonth,
  getDaysInYear,
  getDecade,
  getHours,
  getISODay,
  getISOWeek,
  getISOWeeksInYear,
  getISOWeekYear,
  getMilliseconds,
  getMinutes,
  getMonth,
  getOverlappingDaysInIntervals,
  getQuarter,
  getSeconds,
  getTime,
  getUnixTime,
  getWeek,
  getWeekOfMonth,
  getWeeksInMonth,
  getWeekYear,
  getYear,
  intervalToDuration,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isExists,
  isFirstDayOfMonth,
  isFriday,
  isFuture,
  isLastDayOfMonth,
  isLeapYear,
  isMatch,
  isMonday,
  isPast,
  isSameDay,
  isSameHour,
  isSameISOWeek,
  isSameISOWeekYear,
  isSameMinute,
  isSameMonth,
  isSameQuarter,
  isSameSecond,
  isSameWeek,
  isSameYear,
  isSaturday,
  isSunday,
  isThisHour,
  isThisISOWeek,
  isThisMinute,
  isThisMonth,
  isThisQuarter,
  isThisSecond,
  isThisWeek,
  isThisYear,
  isThursday,
  isToday,
  isTomorrow,
  isTuesday,
  isValid,
  isWednesday,
  isWeekend,
  isWithinInterval,
  isYesterday,
  lastDayOfDecade,
  lastDayOfISOWeek,
  lastDayOfISOWeekYear,
  lastDayOfMonth,
  lastDayOfQuarter,
  lastDayOfWeek,
  lastDayOfYear,
  lightFormat,
  max,
  milliseconds,
  min,
  parse,
  parseISO,
  parseJSON,
  roundToNearestMinutes,
  set,
  setDate,
  setDay,
  setDayOfYear,
  setHours,
  setISODay,
  setISOWeek,
  setISOWeekYear,
  setMilliseconds,
  setMinutes,
  setMonth,
  setQuarter,
  setSeconds,
  setWeek,
  setWeekYear,
  setYear,
  startOfDay,
  startOfDecade,
  startOfHour,
  startOfISOWeek,
  startOfISOWeekYear,
  startOfMinute,
  startOfMonth,
  startOfQuarter,
  startOfSecond,
  startOfToday,
  startOfTomorrow,
  startOfWeek,
  startOfWeekYear,
  startOfYear,
  startOfYesterday,
  sub,
  subBusinessDays,
  subDays,
  subHours,
  subISOWeekYears,
  subMilliseconds,
  subMinutes,
  subMonths,
  subQuarters,
  subSeconds,
  subWeeks,
  subYears,
  toDate,
  // @endindex
} from 'date-fns/esm'

// prettier-ignore
export {
  // 手动导出以解决 @microsoft/api-extractor 的问题
  // ref: https://github.com/date-fns/date-fns/blob/master/scripts/_lib/listLocales.js#L13
  // ref: https://github.com/date-fns/date-fns/blob/master/outdatedLocales.json
  // @index(['../../node_modules/date-fns/esm/locale/*', '!**/{_*,ar,fil,fr-CH,nl-BE}'], (f, _) => `${f.name.replace(/-/g, '')},`, { onlyDirectories: true })
  af,
  arDZ,
  arMA,
  arSA,
  az,
  be,
  bg,
  bn,
  ca,
  cs,
  cy,
  da,
  de,
  el,
  enAU,
  enCA,
  enGB,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  fr,
  frCA,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  hu,
  hy,
  id,
  is,
  it,
  ja,
  ka,
  kk,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  ms,
  mt,
  nb,
  nl,
  nn,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sl,
  sr,
  srLatn,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uz,
  vi,
  zhCN,
  zhTW,
  // @endindex
} from 'date-fns/esm/locale'

// @index(['./**/*.ts', '!./**/*.test.*'], f => `export * from '${f.path}'`)
export * from './anyToDate'
export * from './formatDate'
export * from './formatDistanceAgo'
export * from './intervalToRestrictiveDuration'
export * from './numeralDayToChineseDay'
// @endindex
