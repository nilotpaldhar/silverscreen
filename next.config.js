/**
 * Get image domains as an array.
 *
 * @param {string} str Comma separated list of image domains
 * @returns {array}    Array of image domains
 */
const getImageDomains = (str = '') => {
	if (str) {
		return str.split(',').map((s) => s.trim());
	}
	return [];
};

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: false,
	images: {
		domains: getImageDomains(process.env.NEXT_PUBLIC_IMAGE_DOMAINS),
		/** Temp Fix. */
		unoptimized: true,
	},
};

module.exports = nextConfig;
