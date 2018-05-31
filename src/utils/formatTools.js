import uuid from 'uuid'
import moment from 'moment'
import Moment from 'moment';

/**
 * @description Generates a current timestamp (now) in unix format
 * @returns {number} Current timestamp in unix format
 */
export const unixTimestamp = () => {
  return +moment()
};

/**
 * @description Generate an id for posts, comments and everything else
 * @returns {string} uuid
 */
export const generateId = () => {
  return uuid()
};

export const dateTimeFormat = (time) => Moment(time).format();

export const nFormatter = (num, digits) => {
  let si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "K" },
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

