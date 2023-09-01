import isEmpty from 'lodash/isEmpty';

/**
 * Parse media(movie/tv) uid.
 *
 * @param {Array} arr Array with duplicate objects
 * @returns Unique array without duplicate objects.
 */
const removeDuplicatesObj = (arr = []) => {
	if (isEmpty(arr)) return [];

	const jsonObject = arr.map(JSON.stringify);
	const uniqueSet = new Set(jsonObject);
	const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

	return uniqueArray;
};

export default removeDuplicatesObj;
