import slugify from 'slugify';
import { MEDIA_GENRES } from '@constants';
import generateMediaUid from '@utils/generateMediaUid';

/**
 * Map media genres by ID.
 *
 * @param {string} mediaType Media Type.
 * @param {array} genreIds Media Genre Ids.
 *
 * @returns Media Genres.
 */
const mapMediaGenresById = (mediaType, genreIds = []) => {
	const genres = MEDIA_GENRES[mediaType] || [];

	return genres
		?.filter((g) => genreIds?.includes(g?.id))
		?.map((g, idx) => ({
			...g,
			uid: generateMediaUid(g?.id, g?.name),
			slug: `${slugify(g?.name, { lower: true })}`,
			backdrop: mediaType === 'tv' ? `/genres/tv/${idx + 1}.jpg` : `/genres/movie/${idx + 1}.jpg`,
		}));
};

export default mapMediaGenresById;
