import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the TopRatedTVShowsPage component.
 *
 * @return {Element} The TopRatedTVShowsPage component.
 */
const TopRatedTVShowsPage = ({ data }) => (
	<>
		<Seo title="Watch Top Rated TV Shows" />
		<MediaGroupTmpl type={MEDIA_TYPE} heading="Top Rated TV Shows" data={data} />
	</>
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
TopRatedTVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default TopRatedTVShowsPage;
