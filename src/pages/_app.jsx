import PropTypes from 'prop-types';
import { RouteProgress } from '@components/feedback';

/** Root Styles */
import '@styles/tailwindcss/core.scss';
import '@styles/global.scss';

/**
 * Render the App component.
 *
 * @return {Element} The App component.
 */
const App = ({ Component, pageProps }) => (
	<>
		<RouteProgress />
		<Component {...pageProps} />
	</>
);

/**
 * Prop Types.
 */
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default App;
