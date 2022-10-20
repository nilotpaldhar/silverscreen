import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { Seo } from '@components/general';
import { getMediaGroupPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the NowPlayingMoviesPage component.
 *
 * @return {Element} The NowPlayingMoviesPage component.
 */
const NowPlayingMoviesPage = ({ data }) => (
	<>
		<Seo title="Watch Now Playing Movies" />
		<MediaGroupTmpl type={MEDIA_TYPE} heading="Now Playing Movies" data={data} />
	</>
);

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, query }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getMediaGroupPage(MEDIA_TYPE, 'now_playing', query);
};

/**
 * Prop Types.
 */
NowPlayingMoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default NowPlayingMoviesPage;
