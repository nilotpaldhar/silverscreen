import PropTypes from 'prop-types';
import { Link, BlurImage } from '@components/general';
import { Play } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaTabRecCard component.
 *
 * @return {Element} The MediaTabRecCard component.
 */
const MediaTabRecCard = ({ type, data }) => {
	const { uid, title, backdrop } = data;

	/** Media HREF. */
	const href = type === 'tv' || type === 'tvSeason' ? `/tv/${uid}` : `/movie/${uid}`;

	/** Media Image Config. */
	const imgConf = {
		src: backdrop,
		alt: title,
		width: 300,
		height: 169,
		orientation: 'landscape',
		className: styles.media_tab_rec_card_img,
	};

	return (
		<div className={styles.media_tab_rec_card}>
			<Link href={href} className={styles.media_tab_rec_card_link}>
				<BlurImage {...imgConf} />
				<div className={styles.media_tab_rec_card_icon}>
					<Play />
				</div>
				<h4 className={styles.media_tab_rec_card_title}>{title}</h4>
			</Link>
		</div>
	);
};

/**
 * Default Props.
 */
MediaTabRecCard.defaultProps = {
	type: 'movie',
	data: {},
};

/**
 * Prop Types.
 */
MediaTabRecCard.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	data: PropTypes.shape({
		uid: PropTypes.string,
		title: PropTypes.string,
		backdrop: PropTypes.string,
	}),
};

export default MediaTabRecCard;
