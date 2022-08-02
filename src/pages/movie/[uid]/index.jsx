import PropTypes from 'prop-types';
import { SingleMediaTmpl } from '@templates';
import { getMediaPaths, getSingleMediaPage } from '@libs/tmdb';

/** Media Type. */
const MEDIA_TYPE = 'movie';

/**
 * Render the SingleMoviePage component.
 *
 * @return {Element} The SingleMoviePage component.
 */
const SingleMoviePage = ({ media }) => <SingleMediaTmpl type={MEDIA_TYPE} media={media} />;

/**
 * Get single movie page paths.
 *
 * @return {object} Page paths.
 */
export const getStaticPaths = async () => getMediaPaths(MEDIA_TYPE);

/**
 * Get single movie page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async ({ params }) => getSingleMediaPage(params?.uid, MEDIA_TYPE);

/**
 * Prop Types.
 */
SingleMoviePage.propTypes = {
	media: PropTypes.shape({}).isRequired,
};

export default SingleMoviePage;
