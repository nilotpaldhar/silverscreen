import { isEmpty, isNull, trim } from 'lodash';
import removeTrailingSlash from '@utils/removeTrailingSlash';

/**
 * Get media(movie/tv-show/tv-season) video url.
 *
 * @param {string} key Media Video Key(YouTubem ID).
 *
 * @returns Media Video URL.
 */
const getMediaVideoUrl = (key = null) => {
	if (isNull(key) || isEmpty(key)) return null;
	const baseYouTubeUrl = removeTrailingSlash(process.env.NEXT_PUBLIC_YOUTUBE_WEB_URL);
	return `${baseYouTubeUrl}/watch?v=${trim(key)}`;
};

export default getMediaVideoUrl;
