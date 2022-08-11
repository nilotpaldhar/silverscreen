import normaliseMediaListProps from '@libs/tmdb/utils/normaliseMediaListProps';
import { createQueryParams } from '@libs/tmdb/utils/getMediaGroupUrl';
import { getMediaGenreBySlug } from '@utils';
import { tmdbClient } from '@config/tmdb';
import { isEmpty } from 'lodash';

/**
 * Get media(movie/tv) props.
 *
 * @param {string} type Media Type.
 *
 * @return {object} Media details.
 */
const getGenreProps = async (type = 'movie', slug = null, query = { page: 1 }) => {
	const mediaType = type === 'tv' ? 'tv' : 'movie';
	const language = 'language=en-US';
	const page = `page=${query?.page || 1}`;

	/** Get genre name. */
	const genreName = getMediaGenreBySlug(type, slug)?.name;

	/** Check if is valid genre. */
	if (isEmpty(genreName)) {
		return null;
	}

	/** Create query string. */
	const queryStr = createQueryParams(type, { ...query, genres: `${genreName}` }, null, 'string');

	/** Request URL. */
	const url = `/discover/${mediaType}?${page}&${language}&${queryStr}`;

	/** Fetch genre props. */
	try {
		const res = await tmdbClient.get(url);
		return normaliseMediaListProps(type, genreName, res?.data);
	} catch (error) {
		return null;
	}
};

export default getGenreProps;
