import { isEmpty } from 'lodash';
import { tmdbClient } from '@config/tmdb';
import normaliseSearchResults from '@libs/tmdb/utils/normaliseSearchResults';

/**
 * Search for movies and tv shows..
 *
 * @param {string} term Search Term.
 * @param {number} term Page Number.
 *
 * @return {object} Media search results.
 */
const searchMedia = async (term = null, page = 1) => {
	const query = `query=${term}`;
	const pageNum = `page=${page}`;
	const language = 'language=en-US';

	/** Check search term and page number. */
	if (isEmpty(term) || page <= 0) {
		return null;
	}

	/** Request URL. */
	const url = `/search/multi?include_adult=false&${language}&${pageNum}&${query}`;

	try {
		/** Fetch search results. */
		const res = await tmdbClient.get(url);
		return normaliseSearchResults(term, res?.data);
	} catch (error) {
		return null;
	}
};

export default searchMedia;
