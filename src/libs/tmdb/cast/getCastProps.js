import { tmdbClient } from '@config/tmdb';
import normaliseCastProps from '@libs/tmdb/utils/normaliseCastProps';

/**
 * Get the details of a actor/person.
 *
 * @param {number} castId Cast ID.
 *
 * @return {object} Media details.
 */
const getCastProps = async (castId, append = []) => {
	const appendToRes = `append_to_response=${[...append, 'combined_credits', 'external_ids'].join(
		','
	)}`;
	const language = 'language=en-US';

	if (!castId) return null;

	/** Request URL. */
	const url = `/person/${castId}?${appendToRes}&${language}`;

	/** Fetch person details. */
	try {
		const res = await tmdbClient.get(url);
		return normaliseCastProps(res?.data);
	} catch (error) {
		return null;
	}
};

export default getCastProps;
