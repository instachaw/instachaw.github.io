'use strict';

/**
 * Returns the id value from a given slug
 * 
 * @param  {string} slug - Dash separated string. Example: `captain-planet-23`
 * @return number
 */
export function extractIdFromSlug(slug:string):number {
  // Dash (-) delimited strings
  const delimitedFragments:string[] = slug.split('-');

  return parseInt(delimitedFragments[delimitedFragments.length - 1], 10)
}

/**
 * Formats a opening time string.
 * 
 * @param {string} time - Format: 09:00:00.
 * 
 * @returns {string}
 */
export function formatServiceHour (time:string) {
  return time.split(':')[0][1]
}

/**
 * Creates a random string of determined length
 * 
 * @param  {number} stringLength - Maximum length of string
 * @return {string}
 */
export function generateRandString(stringLength:number = 30):string {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  for ( var i = 0; i < stringLength; i++ ) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
}

/**
 * Formats a string into a slug.
 * 
 * @param  {string} text
 * @return {string}
 */
export function slugify(text:string) {
  return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * Truncates a string to a maximum number of characters
 * 
 * @param  {string} text
 * @param  {number} maxCharsCount - Maximum length of truncated string
 * 
 * @return {number}
 */
export function truncateText(text:string, maxCharsCount:number = 100):string {
  return (text && text.length > 0)
          ? text
            .substring(0, maxCharsCount)
            .concat('...')
          : ''
}

/**
 * Returns a string with the first character in uppercase.
 * 
 * @param {string} str  - String to operate on.
 * @return {string}
 */
export function uppercaseFirst(str:String) {
  return str ?
    str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1, str.length)):
    str;
}