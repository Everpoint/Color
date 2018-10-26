/**
 * Returns true if n is a finite number, otherwise false
 * @param n
 */
export const isNumber = function(n: any): boolean {
    return typeof n === 'number' && isFinite(n);
};

/**
 * Returns true if s is a string, otherwise false
 * @param s
 */
export const isString = function(s: any): boolean {
    return typeof s === 'string';
};
