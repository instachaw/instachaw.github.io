/**
 * Formats a opening time string.
 * 
 * @param {Number} span - Width of a single column.
 * @param {Number} gridSize - Total capacity of columns in the grid.
 * 
 * @returns {String}
 */
export function formatServiceHour (time:string) {
  return time.split(':')[0][1]
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
 * Truncates a string to a maximum number of characters
 * 
 * @param  {string} text
 * @param  {number} maxCharsCount - Maximum length of truncated string
 * 
 * @return number
 */
export function truncateText(text:string, maxCharsCount:number = 100):string {
  return text ? text.substring(0, maxCharsCount).concat('...'): ''
}

/**
 * Creates a random string of determined length
 * 
 * @param  {number} stringLength - Maximum length of string
 * @return {string}
 */
export function generateRandString(stringLength:number = 30):string {
  return Math
          .random()
          .toString(36)
          .substring(2)
          .substring(0, stringLength);
}