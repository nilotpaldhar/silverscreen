import PropTypes from 'prop-types';
import { SingleMediaTmpl } from '@templates';
import { getSingleSeasonPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tvSeason';

/**
 * Render the SingleSeasonPage component.
 *
 * @return {Element} The SingleSeasonPage component.
 */
const SingleSeasonPage = ({ media, season }) => (
	<SingleMediaTmpl type={MEDIA_TYPE} media={media} season={season} />
);

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ params }) => getSingleSeasonPage(params);

/**
 * Prop Types.
 */
SingleSeasonPage.propTypes = {
	media: PropTypes.shape({}).isRequired,
	season: PropTypes.shape({}).isRequired,
};

export default SingleSeasonPage;
