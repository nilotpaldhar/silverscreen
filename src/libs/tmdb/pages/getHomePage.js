import { isEmpty } from 'lodash';
import getMediaRootProps from '@libs/tmdb/media/getMediaRootProps';

/**
 * Get home/landing page props.
 *
 * @return {object} Object containing page props and revalidate setting.
 *
 */
const getHomePage = async () => {
	/** Deafult props. */
	const defaultProps = { props: { data: null }, revalidate: 10 };

	/** Get home page props. */
	const data = await getMediaRootProps('all');

	/**
	 *  Return 404 error, if data is empty.
	 */
	if (isEmpty(data)) {
		return { notFound: true };
	}

	defaultProps.props.data = data;
	return defaultProps;
};

export default getHomePage;
