import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the UpcomingMoviesPage component.
 *
 * @return {Element} The UpcomingMoviesPage component.
 */
const UpcomingMoviesPage = ({ data }) => (
	<>
		<Seo title="Watch New and Upcomming Movies" />
		<MediaGroupTmpl
			type={MEDIA_TYPE}
			data={data}
			breadcrumbs={[
				{ label: 'Movies', href: '/movie' },
				{ label: 'Upcomming', href: null },
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
	return getMediaGroupPage(MEDIA_TYPE, 'upcoming', query);
};

/**
 * Prop Types.
 */
UpcomingMoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default UpcomingMoviesPage;
