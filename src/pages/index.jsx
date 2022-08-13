import PropTypes from 'prop-types';
import { HomePageTmpl } from '@templates';
import { getHomePage } from '@libs/tmdb';

/**
 * Render  the HomePage component.
 *
 * @return {Element} The HomePage component.
 */
const HomePage = ({ data }) => <HomePageTmpl data={data} />;

/**
 * Get home page props.
 *
 * @return {object} Page props.
 */
export const getStaticProps = async () => getHomePage();

/**
 * Prop Types.
 */
HomePage.propTypes = {
	data: PropTypes.shape({}).isRequired,
};

export default HomePage;
