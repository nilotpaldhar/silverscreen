import PropTypes from 'prop-types';
import { SingleGenreTmpl } from '@templates';
import { getSingleGenrePage } from '@libs/tmdb';

/** Genre Type. */
const GENRE_TYPE = 'movie';

/**
 * Render the SingleMovieGenrePage component.
 *
 * @return {Element} The SingleMovieGenrePage component.
 */
const SingleMovieGenrePage = ({ data }) => <SingleGenreTmpl type={GENRE_TYPE} data={data} />;

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, params, query }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getSingleGenrePage(GENRE_TYPE, params?.slug, query);
};

/**
 * Prop Types.
 */
SingleMovieGenrePage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default SingleMovieGenrePage;
