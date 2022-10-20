import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import Navbar from '@components/layout/Navbar';
import styles from './styles.module.scss';

/** Dynamic Imports. */
const MediaPlayer = dynamic(() => import('@components/media/MediaPlayer'));
const Footer = dynamic(() => import('@components/layout/Footer'));

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
		<MediaPlayer />
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
