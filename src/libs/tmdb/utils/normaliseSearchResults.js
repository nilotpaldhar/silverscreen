import { isEmpty } from 'lodash';
import { formatMediaListProps } from '@utils';

/** Get Media List Collection. */
const getMediaListCollection = (results = []) => {
	const filteredResults = results?.filter((item) => item?.media_type !== 'person');
	return filteredResults?.map((item) => ({
		type: item.media_type,
		...formatMediaListProps(item.media_type, item),
	}));
};

/**
 * Normalise media search results.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {object} data Media Data.
 *
 * @returns Normalised media list data.
 */
const normaliseSearchResults = (term = 'unknown term', data = null) => {
	if (isEmpty(data)) return null;

	const collection = getMediaListCollection(data?.results);
	const movieCollection = collection?.filter((c) => c?.type === 'movie');
	const tvCollection = collection?.filter((c) => c?.type === 'tv');

	return {
		meta: {
			currentPage: data?.page,
			totalPages: data?.total_pages <= 500 ? data?.total_pages : 500,
			totalResults: data?.total_results,
			query: { type: `search_query`, name: term },
		},
		collection: {
			all: collection,
			movie: movieCollection,
			tv: tvCollection,
		},
	};
};

export default normaliseSearchResults;
