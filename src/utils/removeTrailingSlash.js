import { isEmpty, isString } from 'lodash';

/**
 * Removes trailing slash from string.
 *
 * @param {string} str String.
 *
 *  @returns String without trailing slash.
 */
const removeTrailingSlash = (str = '') => {
	if (isEmpty(str) || !isString(str)) {
		return null;
	}
	return str.replace(/\/+$/, '');
};

export default removeTrailingSlash;
