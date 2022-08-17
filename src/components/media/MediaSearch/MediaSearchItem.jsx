import PropTypes from 'prop-types';
import { BlurImage } from '@components/general';
import { StarFilled } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaSearchItem component.
 *
 * @return {Element} The MediaSearchItem component.
 */
const MediaSearchItem = ({ data }) => {
	const { type, poster, title, rating, releaseDate } = data;

	/** Poster Config. */
	const posterConf = {
		src: poster,
		alt: title,
		width: 40,
		height: 60,
	};

	return (
		<div className={styles.media_search_item}>
			<div className={styles.poster}>
				<BlurImage {...posterConf} />
			</div>
			<div className={styles.body}>
				<h4 className={styles.title}>{title}</h4>
				<ul className={styles.meta}>
					<li>
						<div className={styles.rating}>
							<StarFilled />
							<span>{rating || 'NR'}</span>
						</div>
					</li>
					{releaseDate?.year && (
						<li>
							<span>{releaseDate?.year}</span>
						</li>
					)}
					<li>
						<span>{type === 'tv' ? 'TV' : 'Movie'}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
MediaSearchItem.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaSearchItem.propTypes = {
	data: PropTypes.shape({
		type: PropTypes.string,
		title: PropTypes.string,
		poster: PropTypes.string,
		rating: PropTypes.number,
		releaseDate: PropTypes.shape({
			dateString: PropTypes.string,
			year: PropTypes.number,
		}),
	}),
};

export default MediaSearchItem;
