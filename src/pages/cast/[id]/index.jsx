import PropTypes from 'prop-types';
import getSingleCastPage from '@libs/tmdb/pages/getSingleCastPage';
import SingleCastTmpl from '@templates/SingleCastTmpl';

/**
 * Render the SingleCastPage component.
 *
 * @return {Element} The SingleCastPage component.
 */
const SingleCastPage = ({ cast }) => <SingleCastTmpl cast={cast} />;

/**
 *
 *
 * @return {object} Page props.
 */
export const getServerSideProps = async ({ res, params }) => {
	const { id } = params;
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
	return getSingleCastPage(id);
};

/**
 * Prop Types.
 */
SingleCastPage.propTypes = {
	cast: PropTypes.shape({}).isRequired,
};

export default SingleCastPage;
