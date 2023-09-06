import removeTrailingSlash from '@utils/removeTrailingSlash';

/**
 * Create canonical URL for seo.
 *
 * @param {string} asPath
 * @param {string} baseUrl
 *
 * @returns Canonical URL.
 */
const createCanonicalUrl = (asPath = '', baseUrl = process.env.NEXT_PUBLIC_SITE_URL) => {
	const baseUrlNoSlash = removeTrailingSlash(baseUrl);
	if (asPath === '/') return baseUrlNoSlash;
	return `${baseUrlNoSlash}${asPath}`.split('?')[0];
};

export default createCanonicalUrl;
