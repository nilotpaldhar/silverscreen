import { formatMediaListProps } from '@utils';
import { isEmpty } from 'lodash';

/** Get Media List Collection. */
const getMediaListCollection = (type, results = []) => {
	const collection = results?.map((item) => formatMediaListProps(type, item));
	return collection;
};

/**
 * Normalise media list props.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {object} data Media Data.
 *
 * @returns Normalised media list data.
 */
const normaliseMediaListProps = (type = 'movie', groupKey = '', data = null) => {
	if (isEmpty(data)) {
		return null;
	}

	return {
		meta: {
			currentPage: data?.page,
			totalPages: data?.total_pages <= 500 ? data?.total_pages : 500,
			totalResults: data?.total_results,
			query: {
				type: `${groupKey ?? 'unknown'}_${type}`,
				name: groupKey ?? 'unknown',
			},
		},
		collection: getMediaListCollection(type, data?.results),
	};
};

export default normaliseMediaListProps;
