import { tmdbClient } from '@config/tmdb';
import normaliseMediaProps from '@libs/tmdb/utils/normaliseMediaProps';

/**
 * Get media(movie/tv) props.
 *
 * @param {string} type Media Type.
 * @param {number} mediaId Media ID.
 *
 * @return {object} Media details.
 */
const getMediaProps = async (mediaId, type = 'movie', append = []) => {
	const mediaType = type === 'tv' ? 'tv' : 'movie';
	const appendToRes = `append_to_response=${[
		...append,
		'credits',
		'videos',
		'recommendations',
	].join(',')}`;
	const language = 'language=en-US';

	/** Request URL. */
	const url = `/${mediaType}/${mediaId}?${appendToRes}&${language}`;

	/** Fetch media details. */
	try {
		const res = await tmdbClient.get(url);
		return normaliseMediaProps(res?.data, type);
	} catch (error) {
		return null;
	}
};

export default getMediaProps;
