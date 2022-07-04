import PropTypes from 'prop-types';
import { Navbar, Footer } from '@components/layout';
import styles from './styles.module.scss';

/**
 * Render the Layout component.
 *
 * @return {Element} The Layout component.
 */
const Layout = ({ children }) => (
	<div className={styles.layout}>
		<Navbar />
		<div className={styles.content}>{children}</div>
		<Footer />
	</div>
);

/**
 * Default Props.
 */
Layout.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
