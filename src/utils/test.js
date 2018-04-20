//TODO: Timer test
// const current = 300;
// const minutes = Math.floor((current % (60 * 60)) / 60);
// const seconds = Math.floor((current % 60));
//
// console.log(`${minutes} : ${seconds}`);
//
// const correctValueFormat = (value) => {
//   return value < 10 ? '0' + value : value
// };
//
// const formattedMinutes = correctValueFormat(minutes);
// const formattedSeconds = correctValueFormat(seconds);
//
// console.log(`${formattedMinutes} : ${formattedSeconds}`);

//TODO: lastLogDay test (lastLogDay === yesterday ? DaysInARow++
import Moment from 'moment';
const dateTimeFormat = (time) => Moment(time).format();

let today = new Date();
let yesterday = new Date() - 1;

console.log(dateTimeFormat(today));
console.log(dateTimeFormat(yesterday));
