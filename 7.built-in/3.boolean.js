// Boolean
// 객체로 사용하게 되면 메모리를 더 많이 사용한다.
const isTrue = new Boolean(true);
console.log(isTrue.valueOf());

/**
 * Falshy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */
