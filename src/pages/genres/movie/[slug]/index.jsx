import PropTypes from 'prop-types';
import { MediaGroupTmpl } from '@templates';
import { getSingleGenrePage } from '@libs/tmdb';

/** Genre Type. */
const GENRE_TYPE = 'movie';

/**
 * Render the SingleMovieGenrePage component.
 *
 * @return {Element} The SingleMovieGenrePage component.
 */
const SingleMovieGenrePage = ({ data }) => {
	/** Get genre name. */
	const genreName = data?.meta?.query?.name;

	/** Media Group Tmpl Config. */
	const conf = {
		type: GENRE_TYPE,
		heading: `Genre "${genreName ?? 'unknown'}"`,
		excludeFilters: ['genres'],
		data,
	};

	return <MediaGroupTmpl {...conf} />;
};

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
	data: PropTypes.shape({
		meta: PropTypes.shape({
			query: PropTypes.shape({
				name: PropTypes.string,
			}),
		}),
	}).isRequired,
};

export default SingleMovieGenrePage;
