import styles from './styles.module.scss';

/**
 * Render the MediaCastsLoader component.
 *
 * @return {Element} The MediaCastsLoader component.
 */
const MediaCastsLoader = () => (
	<div className={styles.media_casts_loader}>
		<span>Loading...</span>
	</div>
);

export default MediaCastsLoader;
