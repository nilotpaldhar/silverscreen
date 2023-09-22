import PropTypes from 'prop-types';
import MediaShare from '@components/media/MediaShare';
import StarFilled from '@icons/general/StarFilled';
import styles from './styles.module.scss';

/**
 * Render the MediaMeta component.
 *
 * @return {Element} The MediaMeta component.
 */
const MediaMeta = ({ language, runtime, releaseDate, rating, share, hideShare }) => (
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
			{!hideShare && (
				<li>
					<MediaShare {...share} />
				</li>
			)}
		</ul>
	</div>
);

/**
 * Default Props.
 */
MediaMeta.defaultProps = {
	language: '',
	runtime: '',
	releaseDate: '',
	rating: '',
	share: {
		url: '',
		title: '',
	},
	hideShare: false,
};

/**
 * Prop Types.
 */
MediaMeta.propTypes = {
	language: PropTypes.string,
	runtime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	releaseDate: PropTypes.string,
	rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	share: PropTypes.shape({
		url: PropTypes.string,
		title: PropTypes.string,
	}),
	hideShare: PropTypes.bool,
};

export default MediaMeta;
