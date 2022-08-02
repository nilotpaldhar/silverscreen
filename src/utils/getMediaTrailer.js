import { orderBy } from 'lodash';
import getYouTubeThumbnail from '@utils/getYouTubeThumbnail';

/**
 * Get Official Media Trailer.
 *
 * @param {array} videos Media Videos.
 *
 * @returns Media Trailer.
 */
const getMediaTrailer = (videos = []) => {
	if (!videos?.length) return null;

	/** Filter Trailer. */
	const filterTrailer = ({ official, site, type } = {}) => {
		const isOfficial = official;
		const isOnYoutube = site?.toLowerCase() === 'youtube';
		const isTrailer = type?.toLowerCase() === 'trailer';
		return isOfficial && isOnYoutube && isTrailer;
	};

	const trailers = videos?.filter(filterTrailer)?.map((v) => ({
		id: v?.id,
		key: v?.key,
		name: v?.name,
		size: v?.size,
		thumbnail: getYouTubeThumbnail(v?.key, 'medium'),
		language: v?.iso_639_1,
		published: v?.published_at,
	}));

	const orderedTrailers = orderBy(trailers, [(t) => t?.published], ['asc']);

	return orderedTrailers[0] ?? null;
};

export default getMediaTrailer;
