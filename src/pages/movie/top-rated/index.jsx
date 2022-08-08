import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the TopRatedMoviesPage component.
 *
 * @return {Element} The TopRatedMoviesPage component.
 */
const TopRatedMoviesPage = ({ data }) => (
	<MediaGroupTmpl type={MEDIA_TYPE} heading="Top Rated Movies" data={data} />
);

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, query }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getMediaGroupPage(MEDIA_TYPE, 'top_rated', query);
};

/**
 * Prop Types.
 */
TopRatedMoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default TopRatedMoviesPage;
