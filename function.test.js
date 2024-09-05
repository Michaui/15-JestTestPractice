// functions.test.js
import { capitalize } from './function.js';

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});

test('returns empty string if input is not a string', () => {
  expect(capitalize(123)).toBe('');
  expect(capitalize(null)).toBe('');
});