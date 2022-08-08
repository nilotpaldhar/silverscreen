import getMediaGroupProps from '@libs/tmdb/media/getMediaGroupProps';
import { isEmpty } from 'lodash';

/**
 * Get single media page props.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {object} query Query Parameters.
 *
 * @return {object} Object containing page props.
 *
 */
const getMediaGroupPage = async (type = 'movie', groupKey = null, query = { page: 1 }) => {
	/** Deafult props. */
	const defaultProps = { props: { data: null } };

	if (isEmpty(groupKey) || query?.page <= 0) {
		return { notFound: true };
	}

	/** Get media group props. */
	const data = await getMediaGroupProps(type, groupKey, query);

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getMediaGroupPage;
