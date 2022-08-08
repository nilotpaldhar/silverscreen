import { tmdbClient } from '@config/tmdb';
import { isEmpty } from 'lodash';
import getMediaGroupUrl from '@libs/tmdb/utils/getMediaGroupUrl';
import normaliseMediaListProps from '@libs/tmdb/utils/normaliseMediaListProps';

/**
 * Get media(movie/tv) group props.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {object} query Query Parameters.
 *
 * @return {object} Media group props.
 */
const getMediaGroupProps = async (type = 'movie', groupKey = null, query = {}) => {
	const language = 'en-US';

	/** Request URL. */
	const url = getMediaGroupUrl(type, groupKey, language, query);

	/** Check if url is not empty. */
	if (isEmpty(url)) {
		return null;
	}

	/** Fetch media group props. */
	try {
		const res = await tmdbClient.get(url);
		return normaliseMediaListProps(type, groupKey, res?.data);
	} catch (error) {
		return null;
	}
};

export default getMediaGroupProps;
