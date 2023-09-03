import PropTypes from 'prop-types';
import { GenresRootTmpl } from '@templates';
import { getGenresRootPage } from '@libs/tmdb';

/** Genre Page Type. */
const GENRE_PAGE_TYPE = 'movie';

/**
 * Render  the MovieGenrePage component.
 *
 * @return {Element} The MovieGenrePage component.
 */
const MovieGenrePage = ({ data }) => (
	<GenresRootTmpl
		pageType={GENRE_PAGE_TYPE}
		data={data}
		breadcrumbs={[
			{ label: 'Genres', href: '/genres' },
			{ label: 'Movie', href: null },
		]}
	/>
);

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async () => getGenresRootPage(GENRE_PAGE_TYPE);

/**
 * Prop Types.
 */
MovieGenrePage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default MovieGenrePage;
