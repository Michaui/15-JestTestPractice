// function.test.js
import { capitalize } from './function.js';
import { reverseString } from './function.js';
import { calculator } from './function.js';

// capitalize
test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});

test('returns empty string if input is not a string', () => {
  expect(capitalize(123)).toBe('');
  expect(capitalize(null)).toBe('');
});


//reverseString
test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe(''); // Test für leere Zeichenkette
  expect(reverseString('a')).toBe('a'); // Test für ein einzelnes Zeichen
}); 


//calculator
test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('handles division by zero', () => {
  expect(calculator.divide(6, 0)).toBe('Error: Division by zero');
});
