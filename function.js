// functions.js

/**
 * Capitalizes the first character of the given string.
 * @param {string} string - The string to capitalize.
 * @returns {string} - The capitalized string.
 */

export function capitalize(string) {
    if (typeof string !== 'string') return ''; // Checks if input is a string
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitalizes the first character and appends the rest of the string
  }