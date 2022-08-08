import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the PopularTVShowsPage component.
 *
 * @return {Element} The PopularTVShowsPage component.
 */
const PopularTVShowsPage = ({ data }) => (
	<MediaGroupTmpl type={MEDIA_TYPE} heading="Popular TV Shows" data={data} />
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
PopularTVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default PopularTVShowsPage;
