import { isEmpty } from 'lodash';
import getGenresCollection from '@libs/tmdb/genres/getGenresCollection';

/**
 * Get single media page props.
 *
 * @param {string} type Genres Type.
 *
 * @return {object} Object containing page props and revalidate setting.
 */
const getGenresRootPage = async (type = 'all') => {
	/** Deafult props. */
	const defaultProps = { props: { data: null }, revalidate: 10 };

	/** Get media details props. */
	const data = await getGenresCollection(type);

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getGenresRootPage;
