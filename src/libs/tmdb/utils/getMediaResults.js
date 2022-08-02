import { tmdbClient } from '@config/tmdb';
import { isEmpty } from 'lodash';

/**
 * Get media(movie/tv) results.
 *
 * @param {string} url Request URL.
 * @param {array} pages Total pages.
 * @returns media results.
 */
const getMediaResults = async (url, pages = 1) => {
	const results = [];
	const pagesArr = Array.from({ length: pages }, (_, i) => i + 1);

	/** Fetch media results. */
	if (!isEmpty(url)) {
		const res = await Promise.all(pagesArr.map((page) => tmdbClient.get(`${url}&page=${page}`)));
		res.forEach((r) => {
			const medias = r?.data?.results;
			results.push(...medias);
		});
	}

	return results;
};

export default getMediaResults;
