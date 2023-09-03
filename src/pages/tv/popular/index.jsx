import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the PopularTVShowsPage component.
 *
 * @return {Element} The PopularTVShowsPage component.
 */
const PopularTVShowsPage = ({ data }) => (
	<>
		<Seo title="Watch Popular TV Shows" />
		<MediaGroupTmpl
			type={MEDIA_TYPE}
			data={data}
			breadcrumbs={[
				{ label: 'TV Shows', href: '/tv' },
				{ label: 'Popular', href: null },
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
	return getMediaGroupPage(MEDIA_TYPE, 'popular', query);
};

/**
 * Prop Types.
 */
PopularTVShowsPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default PopularTVShowsPage;
