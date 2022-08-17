import PropTypes from 'prop-types';
import { SearchPageTmpl } from '@templates';
import { getMediaSearchPage } from '@libs/tmdb';

/**
 * Render  the SearchPage component.
 *
 * @return {Element} The SearchPage component.
 */
const SearchPage = ({ data }) => <SearchPageTmpl data={data} />;

/**
 * Get page props.
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, query: { term, page } = {} }) => {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getMediaSearchPage(term, page);
};

/**
 * Prop Types.
 */
SearchPage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default SearchPage;
