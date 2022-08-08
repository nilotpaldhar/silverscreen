import { MEDIA_GENRES } from '@constants';

/**
 * Map media genres by name.
 *
 * @param {string} mediaType Media Type.
 * @param {array} genreNames Media Names.
 *
 * @returns Media IDs.
 */
const mapMediaGenresByName = (mediaType, genreNames = []) => {
	const genres = MEDIA_GENRES[mediaType] || [];
	const genreNamesLower = genreNames?.map((n) => n?.toLowerCase());
	return genres
		?.filter((g) => genreNamesLower?.includes(g?.name?.toLowerCase()))
		?.map((g) => g?.id);
};

export default mapMediaGenresByName;
