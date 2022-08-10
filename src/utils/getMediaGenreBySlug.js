import { MEDIA_GENRES } from '@constants';
import { isEmpty } from 'lodash';
import slugify from 'slugify';

/**
 * Get media genre by slug.
 *
 * @param {*} mediaType Media Type.
 * @param {*} slug Genre Slug
 *
 * @returns Genre Object.
 */
const getMediaGenreBySlug = (mediaType = 'movie', slug = null) => {
	if (isEmpty(slug)) return null;
	const filterGenre = (genre) => slugify(genre?.name, { lower: true }) === slug;
	return MEDIA_GENRES[mediaType]?.filter(filterGenre)[0] ?? null;
};

export default getMediaGenreBySlug;
