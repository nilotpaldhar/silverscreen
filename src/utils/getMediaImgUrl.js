import { isEmpty } from 'lodash';
import removeTrailingSlash from '@utils/removeTrailingSlash';
import removeSlashes from '@utils/removeSlashes';

/**
 * Get media image url.
 *
 * @param {string} path Image Source Path.
 * @param {string} dimension Image Dimension.
 *
 * @returns Media Image URL.
 */
const getMediaImgUrl = (path = '', dimension = 'original') => {
	const imgBaseUrl = removeTrailingSlash(process.env.NEXT_PUBLIC_TMDB_IMAGE_URL);
	const imgPath = removeSlashes(path);

	/** Return if empty. */
	if (isEmpty(imgPath)) return null;

	return `${imgBaseUrl}/${dimension}/${imgPath}`;
};

export default getMediaImgUrl;
