import { getYear, getMovieDuration, isValidUrl } from './utils';

it('getYear should return year from date', () => {
  expect(getYear('2022-07-01')).toBe('2022');
});

it('getMovieDuration should return time in hours and minutes', () => {
  expect(getMovieDuration(125)).toBe('2h 05m');
});

it('isValidUrl should return true when valid url', () => {
  expect(isValidUrl('https://test.com')).toBeTruthy();
  expect(isValidUrl('http://test.com')).toBeTruthy();
});

it('isValidUrl should return true when invalid url', () => {
  expect(isValidUrl('http//test.com')).toBeFalsy();
  expect(isValidUrl('test.com')).toBeFalsy();
  expect(isValidUrl('httpss://test.com')).toBeFalsy();
});
