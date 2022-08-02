import getMediaProps from '@libs/tmdb/media/getMediaProps';
import { isEmpty } from 'lodash';
import { parseMediaUid } from '@utils';

/**
 * Get single media page props.
 *
 * @param {string} type Media Type.
 *
 * @return {object} Object containing page props and revalidate setting.
 *
 */
const getSingleMediaPage = async (uid, type = 'movie') => {
	/** Get media id. */
	const mediaId = parseMediaUid(uid)?.id;

	/** Deafult props. */
	const defaultProps = { props: { media: null }, revalidate: 10 };

	/** Get media details props. */
	const media = await getMediaProps(mediaId, type);

	/**
	 *  Return 404 error, if media is empty.
	 */
	if (isEmpty(media)) {
		return { notFound: true };
	}

	defaultProps.props.media = media;
	return defaultProps;
};

export default getSingleMediaPage;
