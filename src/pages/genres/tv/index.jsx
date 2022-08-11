import PropTypes from 'prop-types';
import { GenresRootTmpl } from '@templates';
import { getGenresRootPage } from '@libs/tmdb';

/** Genre Page Type. */
const GENRE_PAGE_TYPE = 'tv';

/**
 * Render  the TVGenrePage component.
 *
 * @return {Element} The TVGenrePage component.
 */
const TVGenrePage = ({ data }) => <GenresRootTmpl pageType={GENRE_PAGE_TYPE} data={data} />;

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async () => getGenresRootPage(GENRE_PAGE_TYPE);

/**
 * Prop Types.
 */
TVGenrePage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default TVGenrePage;
