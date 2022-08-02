import { isEmpty } from 'lodash';

/**
 * Removes slashes from string.
 *
 * @param {string} str String with slashes.
 * @returns {string} String without slash.
 */
const removeSlashes = (str = '') => {
	if (isEmpty(str)) return null;
	return str
		.split('/')
		.filter((i) => i)
		.join('/');
};

export default removeSlashes;
