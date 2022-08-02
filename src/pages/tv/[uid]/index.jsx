import PropTypes from 'prop-types';
import { SingleMediaTmpl } from '@templates';
import { getMediaPaths, getSingleMediaPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'tv';

/**
 * Render the SingleTVShowPage component.
 *
 * @return {Element} The SingleTVShowPage component.
 */
const SingleTVShowPage = ({ media }) => <SingleMediaTmpl type={MEDIA_TYPE} media={media} />;

/**
 * Get single tv-show page paths.
 *
 * @return {object} Page paths.
 */
export const getStaticPaths = async () => getMediaPaths(MEDIA_TYPE);

/**
 * Get single tv-show page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async ({ params }) => getSingleMediaPage(params?.uid, MEDIA_TYPE);

/**
 * Prop Types.
 */
SingleTVShowPage.propTypes = {
	media: PropTypes.shape({}).isRequired,
};

export default SingleTVShowPage;
