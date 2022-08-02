import { isEmpty } from 'lodash';
import { removeTrailingSlash } from '@utils';

/**
 * Get YouTube Thumbnail Image URL.
 *
 * @param {string} videoId YouTube Video ID.
 * @param {string} quality YouTube Image Quality.
 *
 *  @returns YouTube Image Thumbnail URL.
 */
const getYouTubeThumbnail = (videoId = null, quality = 'default') => {
	if (isEmpty(videoId)) return null;

	/** Youtube Base Image URL. */
	const baseImgUrl = removeTrailingSlash(process.env.NEXT_PUBLIC_YOUTUBE_IMAGE_URL);

	/** Image Qualities. */
	const qualityObj = {
		default: 'default',
		medium: 'mqdefault',
		high: 'hqdefault',
		standard: 'sddefault',
	};
	const imgQuality = qualityObj[quality] ?? null;

	if (isEmpty(imgQuality)) return null;

	return `${baseImgUrl}/${videoId}/${imgQuality}.jpg`;
};

export default getYouTubeThumbnail;
