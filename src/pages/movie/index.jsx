import PropTypes from 'prop-types';
import { MediaRootTmpl } from '@templates';
import { getMediaRootPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the MoviesPage component.
 *
 * @return {Element} The MoviesPage component.
 */
const MoviesPage = ({ data }) => <MediaRootTmpl type={MEDIA_TYPE} data={data} />;
/**
 * Get movies page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async () => getMediaRootPage(MEDIA_TYPE);

/**
 * Prop Types.
 */
MoviesPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default MoviesPage;
