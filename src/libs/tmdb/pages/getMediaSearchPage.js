import { isEmpty } from 'lodash';
import searchMedia from '@libs/tmdb/media/searchMedia';

/**
 * Get media(movie/tv) root page props.
 *
 * @param {string} type Media Type.
 *
 * @return {object} Object containing page props.
 *
 */
const getMediaSearchPage = async (term = '', page = 1) => {
	/** Deafult props. */
	const defaultProps = { props: { data: null } };

	/** Get home page props. */
	const data = await searchMedia(term, page);

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getMediaSearchPage;
