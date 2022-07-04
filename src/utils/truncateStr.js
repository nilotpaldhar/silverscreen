/**
 * Truncates string.
 *
 * @param {string} str String to truncate.
 * @param {number} maxChar Maximum characters.

* @returns {string} Truncated string.
 */
const truncateStr = (str = '', maxChar = 70) => {
	if (!str || maxChar <= 0) {
		return str;
	}

	if (str.length < maxChar) {
		return str;
	}

	return str.substring(0, maxChar) + '...';
};

export default truncateStr;
