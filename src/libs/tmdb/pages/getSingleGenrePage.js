import getGenreProps from '@libs/tmdb/genre/getGenreProps';
import { isEmpty } from 'lodash';

/**
 * Get single genre page props.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Genre Slug.
 * @param {object} query Query Parameters.
 *
 * @return {object} Object containing page props.
 *
 */
const getSingleGenrePage = async (type = 'movie', slug = null, query = { page: 1 }) => {
	/** Deafult props. */
	const defaultProps = { props: { data: null } };

	if (isEmpty(slug) || query?.page <= 0) {
		return { notFound: true };
	}

	/** Get genre props. */
	const data = await getGenreProps(type, slug, query);

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getSingleGenrePage;
