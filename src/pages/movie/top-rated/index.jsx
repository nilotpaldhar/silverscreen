import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the TopRatedMoviesPage component.
 *
 * @return {Element} The TopRatedMoviesPage component.
 */
const TopRatedMoviesPage = ({ data }) => (
	<>
		<Seo title="Watch Top Rated Movies" />
		<MediaGroupTmpl
			type={MEDIA_TYPE}
			data={data}
			breadcrumbs={[
				{ label: 'Movies', href: '/movie' },
				{ label: 'Top Rated', href: null },
			]}
		/>
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
TopRatedMoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default TopRatedMoviesPage;
