import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the AiringTodayTVShowsPage component.
 *
 * @return {Element} The AiringTodayTVShowsPage component.
 */
const AiringTodayTVShowsPage = ({ data }) => (
	<>
		<Seo title="Watch TV Shows that are Airing Today" />
		<MediaGroupTmpl
			type={MEDIA_TYPE}
			heading="TV Shows Airing Today"
			excludeFilters={['release']}
			data={data}
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
	return getMediaGroupPage(MEDIA_TYPE, 'airing_today', query);
};

/**
 * Prop Types.
 */
AiringTodayTVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default AiringTodayTVShowsPage;
