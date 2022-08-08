import PropTypes from 'prop-types';
import { StarFilled } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaMeta component.
 *
 * @return {Element} The MediaMeta component.
 */
const MediaMeta = ({ language, runtime, releaseDate, rating }) => (
	<div className={styles.media_meta}>
		<ul className={styles.media_meta_list}>
			{language && (
				<li className={styles.media_meta_lang}>
					<span>{language}</span>
				</li>
			)}
			{rating && (
				<li className={styles.media_meta_rating}>
					<StarFilled />
					<span>{rating}</span>
				</li>
			)}
			{runtime && <li className={styles.media_meta_runtime}>{runtime}</li>}
			{releaseDate && <li className={styles.media_meta_date}>{releaseDate}</li>}
		</ul>
	</div>
);

/**
 * Prop Types.
 */
MediaMeta.propTypes = {
	language: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]).isRequired,
	runtime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]).isRequired,
	releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]).isRequired,
	rating: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]).isRequired,
};

export default MediaMeta;
