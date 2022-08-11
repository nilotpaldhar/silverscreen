import PropTypes from 'prop-types';
import {} from '@templates';
import { getMediaRootPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the TVShowsPage component.
 *
 * @return {Element} The TVShowsPage component.
 */
const TVShowsPage = () => <div className="py-10">TVShowsPage</div>;

/**
 * Get movies page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async () => getMediaRootPage(MEDIA_TYPE);

/**
 * Prop Types.
 */
TVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default TVShowsPage;
