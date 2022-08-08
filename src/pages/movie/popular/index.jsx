import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the PopularMoviesPage component.
 *
 * @return {Element} The PopularMoviesPage component.
 */
const PopularMoviesPage = ({ data }) => (
	<MediaGroupTmpl type={MEDIA_TYPE} heading="Popular Movies" data={data} />
);

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, query }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getMediaGroupPage(MEDIA_TYPE, 'popular', query);
};

/**
 * Prop Types.
 */
PopularMoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default PopularMoviesPage;
