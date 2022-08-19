import styles from './styles.module.scss';

/**
 * Render the SeasonLoader component.
 *
 * @return {Element} The SeasonLoader component.
 */
const SeasonLoader = () => (
	<div className={styles.season_loader}>
		<span className={styles.season_loader_item} />
		<span className={styles.season_loader_item} />
		<span className={styles.season_loader_item} />
		<span className={styles.season_loader_item} />
	</div>
);

export default SeasonLoader;
