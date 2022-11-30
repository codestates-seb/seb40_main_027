import {
  formatDistanceToNow,
  format,
  getYear,
  getMonth,
  getDate,
  getDay,
  getHours,
  getMinutes,
  getSeconds,
  getMilliseconds,
} from 'date-fns';
import { ko } from 'date-fns/locale';

// export const Calculate = (date: string) => {
//   const now = new Date();
//   const my = new Date(date);

//   console.log(my);
//   const year = getYear(my);

//   const month = getMonth(my) + 1;
//   console.log(month);
//   const nowday = getDate(my);
//   console.log(nowday);
//   const hour = getHours(my);
//   console.log(hour);
//   const seconde = getSeconds(my);
//   const Mill = getMilliseconds(my);

//   const caltime = formatDistanceToNow(new Date(year, month, nowday, hour, seconde, Mill), {
//     includeSeconds: true,
//     locale: ko,
//   });
//   return caltime;
// };
export const Calculate = (createdAt: string) => {
  const start: Date = new Date(createdAt);
  const end: Date = new Date(); // 현재 날짜
  const milliSeconds = end.getTime() - start.getTime();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};
