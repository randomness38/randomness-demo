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
// import Moment from 'moment';
// const dateTimeFormat = (time) => Moment(time).format();
//
// let today = new Date();
// let yesterday = new Date() - 1;
//
// console.log(dateTimeFormat(today));
// console.log(dateTimeFormat(yesterday));


//TODO: randomQuote
// const defaultData = {
//   "quote1": {
//     id: 'quote1',
//     quote: '행복으로 가는 길에는 똥덩어리와 치욕이 널려있다.',
//   },
//   "quote2": {
//     id: 'quote2',
//     quote: '견딜 수 있는 고통을 선택한다.',
//   },
//   "quote3": {
//     id: 'quote3',
//     quote: '매일 덜 틀린 상태로 나아간다.',
//   },
//   "quote4": {
//     id: 'quote4',
//     quote: '삶은 무지와 행위로 이루어진다.',
//   },
//   "quote5": {
//     id: 'quote5',
//     quote: '행복하려면 뭔가를 해결해야 한다.',
//   },
//   "quote6": {
//     id: 'quote6',
//     quote: '나의 문제는 특별하지 않다.',
//   },
//   "quote7": {
//     id: 'quote7',
//     quote: '할 거면 하고 말 거면 만다. \'어떻게\'는 필요 없다.',
//   },
//   "quote8": {
//     id: 'quote8',
//     quote: '기분이 더럽군. 그래서 어쩌라고.',
//   },
//   "quote9": {
//     id: 'quote9',
//     quote: '뭐라도 한다.',
//   },
// };
//
// const quotes = defaultData;
// let keys = Object.keys(quotes)
// let randomKey = keys[Math.floor(Math.random()*keys.length)];
// let randomQuote = quotes[randomKey]
// // let randomKey = Object.keys(quotes)[Math.floor(Math.random()*quotes.length)];
//
// console.log(randomQuote)


// // TODO: user.log 구조파악
// const logs = [
//   {
//     id: 1,
//     activityName:"activity3",
//     timestamp: 1469479767190,
//     runningTime: 5,
//     monkeyGage: 3,
//     egoGage: 3,
//     doNotTryGage: 1,
//     titanGage: 5,
//     completed: false
//   },
//   {
//     id: 2,
//     activityName:"activity3",
//     timestamp: 1469479767190,
//     runningTime: 5,
//     monkeyGage: 3,
//     egoGage: 3,
//     doNotTryGage: 1,
//     titanGage: 5,
//     completed: false
//   }
// ]
//
// console.log(logs.map(log =>  log.id))
//
// //
// function nFormatter(num, digits) {
//   var si = [
//     { value: 1, symbol: "" },
//     { value: 1E3, symbol: "k" },
//     { value: 1E6, symbol: "M" },
//     { value: 1E9, symbol: "G" },
//     { value: 1E12, symbol: "T" },
//     { value: 1E15, symbol: "P" },
//     { value: 1E18, symbol: "E" }
//   ];
//   var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
//   var i;
//   for (i = si.length - 1; i > 0; i--) {
//     if (num >= si[i].value) {
//       break;
//     }
//   }
//   return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
// }
//
// /*
//  * Tests
//  */
// var tests = [
//   { num: 1234, digits: 1 },
//   { num: 100000000, digits: 1 },
//   { num: 299792458, digits: 1 },
//   { num: 759878, digits: 1 },
//   { num: 759878, digits: 0 },
//   { num: 123, digits: 1 },
//   { num: 123.456, digits: 1 },
//   { num: 123.456, digits: 2 },
//   { num: 123.456, digits: 4 }
// ];
// var i;
// for (i = 0; i < tests.length; i++) {
//   console.log("nFormatter(" + tests[i].num + ", " + tests[i].digits + ") = " + nFormatter(tests[i].num, tests[i].digits));
// }

const nFormatter = (num, digits) => {
  let si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};

console.log(nFormatter(32,0))
