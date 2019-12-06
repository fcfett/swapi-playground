import { getRomanNumber, getFormattedDateString, toRegularNoun } from '../../../utils/helpers';

test(`1992 in roman numerals is "MCMXCII"`, () => {
  const romanNumber = getRomanNumber(1992);
  expect(romanNumber).toBe('MCMXCII');
});

test('1992-02-03 in US date format is 02/03/1992', () => {
  const formattedDate = getFormattedDateString('1992-02-03');
  expect(formattedDate).toBe('02/03/1992');
});

test(`Should return "1 house"`, () => {
  const houseCase = toRegularNoun('houses', 1);
  expect(houseCase).toBe('house');
});

test(`Should return "2 dogs"`, () => {
  const dogsCase = toRegularNoun('dogs');
  expect(dogsCase).toBe('dogs');
});
