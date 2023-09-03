import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the OnAirTVShowsPage component.
 *
 * @return {Element} The OnAirTVShowsPage component.
 */
const OnAirTVShowsPage = ({ data }) => (
	<>
		<Seo title="Watch TV Shows that are Currently on TV" />
		<MediaGroupTmpl
			type={MEDIA_TYPE}
			excludeFilters={['release']}
			data={data}
			breadcrumbs={[
				{ label: 'TV Shows', href: '/tv' },
				{ label: 'On TV', href: null },
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
	return getMediaGroupPage(MEDIA_TYPE, 'on_the_air', query);
};

/**
 * Prop Types.
 */
OnAirTVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default OnAirTVShowsPage;
