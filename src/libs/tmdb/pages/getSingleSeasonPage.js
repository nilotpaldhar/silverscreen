import getMediaSeasonProps from '@libs/tmdb/media/getMediaSeasonProps';
import { parseMediaUid, parseMediaSeason } from '@utils';
import { isEmpty, isNull } from 'lodash';

/**
 * Get single season page props.
 *
 * @param {object} params Page Params.
 *
 * @return {object} Object containing page props.
 *
 */
const getSingleSeasonPage = async (params) => {
	const mediaId = parseMediaUid(params?.uid)?.id;
	const seasonNo = parseMediaSeason(params?.season);

	if (isNull(mediaId) || isNull(seasonNo)) {
		return { notFound: true };
	}

	/** Deafult props. */
	const defaultProps = { props: { media: null, season: null } };

	try {
		/** Get media & season props. */
		const { media, season } = await getMediaSeasonProps(mediaId, seasonNo);

		/**
		 *  Return 404 error, if media or season is empty.
		 */
		if (isEmpty(media) || isEmpty(season)) {
			return { notFound: true };
		}

		defaultProps.props.media = media;
		defaultProps.props.season = season;
		return defaultProps;
	} catch (error) {
		return { notFound: true };
	}
};

export default getSingleSeasonPage;
