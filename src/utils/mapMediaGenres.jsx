import slugify from 'slugify';
import { MEDIA_GENRES } from '@constants';

/**
 * Generates media(movie/tv-show/tv-season) href.
 *
 * @param {string} mediaType Media Type.
 * @param {array} genreIds Media Genre Ids.
 *
 * @returns Media HREF.
 */
const mapMediaGenres = (mediaType, genreIds = []) => {
	const genres = MEDIA_GENRES[mediaType] || [];
	const slugifyOptions = { lower: true, strict: true };

	return genres
		?.filter((g) => genreIds?.includes(g?.id))
		?.map((g, idx) => ({
			...g,
			href: g?.name
				? `/${mediaType === 'tv' ? 'tv' : 'movie'}/genres/${slugify(g?.name, slugifyOptions)}`
				: null,
			imgPath: mediaType === 'tv' ? `/genres/tv/${idx + 1}.jpg` : `/genres/movie/${idx + 1}.jpg`,
		}));
};

export default mapMediaGenres;
