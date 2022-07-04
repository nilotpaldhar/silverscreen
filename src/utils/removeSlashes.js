/**
 * Removes slashes from string.
 *
 * @param {string} str String with slashes.
 * @returns {string} String without slash.
 */
const removeSlashes = (str = '') => {
	const result = str
		.split('/')
		.filter((i) => i)
		.join('/');

	return result;
};

export default removeSlashes;
