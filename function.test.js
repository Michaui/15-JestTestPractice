// function.test.js
import { capitalize } from './function.js';
import { reverseString } from './function.js';
import { calculator } from './function.js';
import { caesarCipher } from './function.js';
import { analyzeArray } from './function.js';

//TESTS MIT JEST (Expect & Tobe)

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


//caesarCipher
test('should shift letters by 5', () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test('should shift letters by 1', () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test('should wrap around the alphabet', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('should handle negative shifts', () => {
  expect(caesarCipher("Hello, World!", -13)).toBe("Uryyb, Jbeyq!");
});


//analyzeArray
/*
toBe: Verwendet den strengen Vergleich und prüft, ob zwei Werte identisch sind (d.h., ob sie dieselbe Referenz oder denselben primitiven Wert haben).
toEqual: Führt einen tiefen Vergleich durch und prüft, ob die Werte in den Objekten oder Arrays übereinstimmen, unabhängig von deren Referenzen.
*/

describe('analyzeArray', () => {
  
  test('correctly analyzes a non-empty array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]); //Funktionsaufruf

    expect(result).toEqual({ //Objekte vergleichen
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('returns null for an empty array', () => {
    const result = analyzeArray([]);
    expect(result).toBeNull();
  });

  test('correctly analyzes an array with a single element', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('correctly analyzes an array with negative numbers', () => {
    const result = analyzeArray([-5, -3, -9, -1]);
    expect(result).toEqual({
      average: -4.5,
      min: -9,
      max: -1,
      length: 4
    });
  });

  test('correctly analyzes an array with mixed positive and negative numbers', () => {
    const result = analyzeArray([3, -3, 7, -7]);
    expect(result).toEqual({
      average: 0,
      min: -7,
      max: 7,
      length: 4
    });
  });

});