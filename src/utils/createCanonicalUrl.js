import removeTrailingSlash from '@utils/removeTrailingSlash';

/**
 * Converts long number into abbreviated string.
 *
 * @param {number} num
 * @param {string} format
 *
 * @returns Formatted Number.
 */
const createCanonicalUrl = (asPath = '', baseUrl = process.env.NEXT_PUBLIC_SITE_URL) => {
	const baseUrlNoSlash = removeTrailingSlash(baseUrl);
	if (asPath === '/') return baseUrlNoSlash;
	return `${baseUrlNoSlash}${asPath}`.split('?')[0];
};

export default createCanonicalUrl;
