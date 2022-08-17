import PropTypes from 'prop-types';
import { MediaSearch } from '@components/media';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the NavSearch component.
 *
 * @return {Element} The NavSearch component.
 */
const NavSearch = ({ desktop, ...props }) => {
	const classNames = cx(styles.nav_search, {
		[styles.desktop]: desktop,
	});

	return (
		<div className={classNames}>
			<div className={styles.nav_search_wrapper}>
				<MediaSearch {...props} />
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
NavSearch.defaultProps = {
	desktop: false,
};

/**
 * Prop Types.
 */
NavSearch.propTypes = {
	desktop: PropTypes.bool,
};

export default NavSearch;
