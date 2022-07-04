import styles from './styles.module.scss';

/**
 * Render the NavSearch component.
 *
 * @return {Element} The NavSearch component.
 */
const NavSearch = () => (
	<div className={styles.nav_search}>
		<div className={styles.nav_search_wrapper} />
	</div>
);

/**
 * Default Props.
 */
NavSearch.defaultProps = {};

/**
 * Prop Types.
 */
NavSearch.propTypes = {};

export default NavSearch;
