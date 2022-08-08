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
 * @param {object} data Media Data.
 * @param {string} type Media Type.
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
			queryType: `${groupKey}_${type}`,
		},
		collection: getMediaListCollection(type, data?.results),
	};
};

export default normaliseMediaListProps;
