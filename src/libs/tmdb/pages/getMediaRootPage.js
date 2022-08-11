import { isEmpty } from 'lodash';
import getMediaRootProps from '@libs/tmdb/media/getMediaRootProps';

/**
 * Get media(movie/tv) root page props.
 *
 * @param {string} type Media Type.
 *
 * @return {object} Object containing page props and revalidate setting.
 *
 */
const getMediaRootPage = async (type = 'movie') => {
	/** Deafult props. */
	const defaultProps = { props: { data: null }, revalidate: 10 };

	/** Get home page props. */
	const data = await getMediaRootProps(type);

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getMediaRootPage;
