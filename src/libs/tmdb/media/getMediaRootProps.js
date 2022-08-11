import { isEmpty, isArray } from 'lodash';
import { tmdbClient } from '@config/tmdb';
import getGenresCollection from '@libs/tmdb/genres/getGenresCollection';
import normaliseMediaRootProps from '@libs/tmdb/utils/normaliseMediaRootProps';

/** Request URLs. */
const REQ_URL_OBJ = [
	/** Movies */
	{ type: 'movie', url: 'trending/movie/day' },
	{ type: 'movie', url: 'movie/upcoming' },
	{ type: 'movie', url: 'movie/popular' },
	{ type: 'movie', url: 'movie/top_rated' },

	/** TV Shows. */
	{ type: 'tv', url: 'trending/tv/day' },
	{ type: 'tv', url: 'tv/on_the_air' },
	{ type: 'tv', url: 'tv/popular' },
	{ type: 'tv', url: 'tv/top_rated' },
];

/**
 * Get media(movie/tv) group props.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {object} query Query Parameters.
 *
 * @return {object} Media group props.
 */
const getMediaRootProps = async (type = 'all', reqUrls = REQ_URL_OBJ) => {
	const language = 'language=en-US';

	/** Get request urls as string . */
	const filteredUrls = reqUrls?.filter((url) => {
		if (type === 'all') return true;
		return url?.type === type;
	});
	const reqUrlStrings = filteredUrls?.map(({ url }) => `/${url}?${language}`);

	try {
		const allMedias = await Promise.all(reqUrlStrings.map((url) => tmdbClient.get(url)));
		const mediaGenres = await getGenresCollection();

		if (isEmpty(allMedias) || !isArray(allMedias)) {
			return null;
		}

		return normaliseMediaRootProps(type, allMedias, mediaGenres);
	} catch (error) {
		return null;
	}
};

export default getMediaRootProps;
