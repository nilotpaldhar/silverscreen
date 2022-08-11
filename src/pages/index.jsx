import PropTypes from 'prop-types';
import {} from '@templates';
import { getHomePage } from '@libs/tmdb';

/**
 * Render  the HomePage component.
 *
 * @return {Element} The HomePage component.
 */
const HomePage = () => <div className="py-10">HomePage</div>;

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
