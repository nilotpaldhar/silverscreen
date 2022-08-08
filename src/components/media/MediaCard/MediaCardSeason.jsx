import PropTypes from 'prop-types';
import { Link, BlurImage } from '@components/general';
import { PlayCircle } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaCardSeason component.
 *
 * @return {Element} The MediaCardSeason component.
 */
const MediaCardSeason = ({ href, data }) => {
	/** Media Poster Config. */
	const posterConf = {
		src: data?.poster,
		alt: data?.title,
		width: 342,
		height: 513,
	};

	return (
		<>
			<Link href={href} className={styles.media_card_header}>
				<figure className={styles.media_card_poster}>
					<BlurImage {...posterConf} />
				</figure>
				<span className={styles.media_card_playicon}>
					<PlayCircle />
				</span>
			</Link>
			<div className={styles.media_card_content}>
				<h2 className={styles.media_card_title}>
					<Link href={href}>{data?.title}</Link>
				</h2>
			</div>
		</>
	);
};

/**
 * Default Props.
 */
MediaCardSeason.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaCardSeason.propTypes = {
	href: PropTypes.string.isRequired,
	data: PropTypes.shape({
		title: PropTypes.string,
		poster: PropTypes.string,
	}),
};

export default MediaCardSeason;
