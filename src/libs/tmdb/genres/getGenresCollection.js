import { MEDIA_GENRES } from '@constants';
import normaliseGenresCollection from '@libs/tmdb/utils/normaliseGenresCollection';

/**
 * Get genres collection.
 *
 * @param {string} type Genres Type.
 *
 * @return {object} Genres collection.
 */
const getGenresCollection = async (type = 'all') => {
	switch (type) {
		case 'movie': {
			return normaliseGenresCollection('movie', MEDIA_GENRES?.movie);
		}
		case 'tv': {
			return normaliseGenresCollection('tv', MEDIA_GENRES?.tv);
		}
		default: {
			return {
				movie: normaliseGenresCollection('movie', MEDIA_GENRES?.movie),
				tv: normaliseGenresCollection('tv', MEDIA_GENRES?.tv),
			};
		}
	}
};

export default getGenresCollection;
