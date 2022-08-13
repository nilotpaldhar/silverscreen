import { isNull } from 'lodash';

/**
 * Normalise genres collection.
 *
 * @param {object} data Media Data.
 * @param {string} type Media Type.
 *
 * @returns Normalised genres collection data.
 */
const normaliseTrailersCollection = (type = 'all', data = []) => {
	/** Filter trailers by type. */
	const filterTrailers = (trailerType, trailers) => {
		const filterType = trailerType === 'tv' ? 'tv' : 'movie';
		return trailers?.filter((trailer) => trailer?.type === filterType && !isNull(trailer?.trailer));
	};

	/** Return all trailers. */
	if (type === 'all') {
		const movieCollection = filterTrailers('movie', data);
		const tvCollection = filterTrailers('tv', data);
		return {
			movie: {
				collection: movieCollection,
				meta: { totalResults: movieCollection?.length },
			},
			tv: {
				collection: tvCollection,
				meta: { totalResults: tvCollection?.length },
			},
		};
	}

	/** Return trailers for a specific type. */
	const collection = filterTrailers(type, data);
	return {
		collection,
		meta: { totalResults: collection?.length },
	};
};

export default normaliseTrailersCollection;
