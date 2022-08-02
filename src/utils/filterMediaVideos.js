import { orderBy } from 'lodash';
import getYouTubeThumbnail from '@utils/getYouTubeThumbnail';

/**
 * Filter Media Videos.
 *
 * @param {array} videos Media Videos.
 *
 * @returns Filtered Media Videos.
 */
const filterMediaVideos = (videos = []) => {
	if (!videos?.length) return null;

	/** Video Types. */
	const videoTypes = ['trailer', 'teaser', 'featurette', 'behind the scenes', 'bloopers', 'clip'];

	/** Filter Video. */
	const filterVideo = ({ official, site, type } = {}) => {
		const isOfficial = official;
		const isOnYoutube = site?.toLowerCase() === 'youtube';
		const isCompatibleType = videoTypes?.includes(type?.toLowerCase());
		return isOfficial && isOnYoutube && isCompatibleType;
	};

	const filteredVideos = videos?.filter(filterVideo)?.map((v) => ({
		id: v?.id,
		key: v?.key,
		name: v?.name,
		size: v?.size,
		thumbnail: getYouTubeThumbnail(v?.key, 'medium') ?? '/poster-placeholder.jpg',
		language: v?.iso_639_1,
		published: v?.published_at,
	}));

	return orderBy(filteredVideos, [(v) => v?.published], ['asc']);
};

export default filterMediaVideos;
