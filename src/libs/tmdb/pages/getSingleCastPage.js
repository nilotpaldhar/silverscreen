import getCastProps from '@libs/tmdb/cast/getCastProps';
import { isEmpty } from 'lodash';

/**
 * Get single cast page props.
 *
 * @param {string} castId Cast ID.
 *
 * @return {object} Object containing page props.
 *
 */
const getSingleCastPage = async (castId) => {
	/** Deafult props. */
	const defaultProps = { props: { cast: null } };

	/** Get cast details props. */
	const cast = await getCastProps(castId);

	/**
	 *  Return 404 error, if cast is empty.
	 */
	if (isEmpty(cast)) {
		return { notFound: true };
	}

	defaultProps.props.cast = cast;
	return defaultProps;
};

export default getSingleCastPage;
