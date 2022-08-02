import normaliseSeasonProps from '@libs/tmdb/utils/normaliseSeasonProps';
import normaliseMediaProps from '@libs/tmdb/utils/normaliseMediaProps';
import { tmdbClient } from '@config/tmdb';
import { isEmpty } from 'lodash';

/**
 * Get media(tv) season props.
 *
 * @param {number} mediaId Media ID.
 * @param {number} seasonNo Media Season Number.
 *
 * @return {object} Media season details.
 */
const getMediaSeasonProps = async (mediaId, seasonNo, appendMedia = [], appendSeason = []) => {
	const appendToMediaRes = `append_to_response=${[...appendMedia, 'credits', 'videos'].join(',')}`;
	const appendToSeasonRes = `append_to_response=${[...appendSeason, 'videos'].join(',')}`;
	const language = 'language=en-US';

	/** Request URL(s). */
	const mediaUrl = `/tv/${mediaId}?${appendToMediaRes}&${language}`;
	const mediaSeasonUrl = `/tv/${mediaId}/season/${seasonNo}?${appendToSeasonRes}&${language}`;

	/** Fetch media and season details. */
	try {
		const [media, season] = await Promise.all([
			tmdbClient.get(mediaUrl),
			tmdbClient.get(mediaSeasonUrl),
		]);

		/** Normalise response data. */
		const response = {
			media: normaliseMediaProps(media?.data, 'tv'),
			season: normaliseSeasonProps(season?.data),
		};

		if (isEmpty(response?.media) || isEmpty(response?.season)) {
			return null;
		}

		return response;
	} catch (error) {
		return null;
	}
};

export default getMediaSeasonProps;
