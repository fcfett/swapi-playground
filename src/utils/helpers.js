import localStorage from 'local-storage';

export const getEmptyPlaceholder = () => '–';

export const deepCopy = (object) => JSON.parse(JSON.stringify(object));

export const areEqualObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

export const isGreaterThan = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

export const isLowerThan = (a, b) => (a < b ? 1 : a > b ? -1 : 0);

export const sortByKey = (data, key, orderASC = true) =>
  !Array.isArray(data) ? data : data.sort((a, b) => (orderASC ? isGreaterThan : isLowerThan)(a[key], b[key]));

export const getRomanNumber = (number) => {
  const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let roman = '';
  for (let i in lookup) {
    while (number >= lookup[i]) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
};

export const toRegularNoun = (key, count) => (count === 1 ? key.slice(0, -1) : key);

export const getFormattedDateString = (strDate) => {
  const rgxDate = /(\d{4})[-/](\d{2})[-/](\d{2})/;
  return strDate.toString().replace(rgxDate, '$2/$3/$1');
};

export const getLocalStorageObject = (lsId, arrProps = []) => {
  const lsItem = localStorage.get(lsId);

  if (!lsItem) return null;

  if (arrProps.length === 0) return lsItem;

  const lsObject = {};
  for (const item of arrProps) {
    lsObject[item] = lsItem[item];
  }

  return lsObject;
};

export const setLocalStorageObject = (lsId, obj = {}) => {
  const lsObject = getLocalStorageObject(lsId);
  const newObj = lsObject ? lsObject : {};

  for (const [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }

  localStorage.set(lsId, newObj);

  return newObj;
};

export default {
  deepCopy,
  sortByKey,
  isLowerThan,
  isGreaterThan,
  getRomanNumber,
  areEqualObjects,
  toRegularNoun,
  getEmptyPlaceholder,
  getLocalStorageObject,
  setLocalStorageObject,
  getFormattedDateString
};
