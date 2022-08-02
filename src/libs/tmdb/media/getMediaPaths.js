import { MEDIA_PAGES_COUNT, MEDIA_RESULTS_PER_PAGE } from '@constants';
import getMediaResults from '@libs/tmdb/utils/getMediaResults';
import { isEmpty, isArray } from 'lodash';
import { generateMediaUid } from '@utils';

/**
 * Get media(movie/tv) paths.
 *
 * @param {string} type Media Type.
 * @param {number} limit Total Media Pages.
 *
 * @return {object} Object containing paths and fallback setting.
 */
const getMediaPaths = async (type = 'movie', limit = MEDIA_PAGES_COUNT) => {
	/** Request URL. */
	const url = `/discover/${type === 'tv' ? 'tv' : 'movie'}?language=en-US`;

	/** Deafult paths. */
	const defaultPaths = { paths: [], fallback: 'blocking' };

	/** Get Medias.  */
	const medias = await getMediaResults(url, limit / MEDIA_RESULTS_PER_PAGE);

	/** Generate paths. */
	if (!isEmpty(medias) && isArray(medias)) {
		medias.forEach((media) => {
			const uid = generateMediaUid(media?.id, type === 'tv' ? media?.name : media?.title);
			defaultPaths.paths.push({ params: { uid } });
		});
	}

	return defaultPaths;
};

export default getMediaPaths;
