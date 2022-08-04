import PropTypes from 'prop-types';
import { BlurImage, VisuallyHidden } from '@components/general';
import { Play } from '@icons';
import { useMediaPlayer } from '@context';
import styles from './styles.module.scss';

/**
 * Render the MediaHeader component.
 *
 * @return {Element} The MediaHeader component.
 */
const MediaHeader = ({ backdrop, title, trailer }) => {
	const { dispatch } = useMediaPlayer();

	/** Image Config. */
	const imageConf = {
		src: backdrop,
		alt: title,
		orientation: 'landscape',
		layout: 'fill',
		objectFit: 'cover',
		objectPosition: 'center',
		priority: true,
	};

	/** Open Media Player. */
	const openMediaPlayer = () => {
		dispatch({ type: 'OPEN_PLAYER', payload: trailer?.key });
	};

	return (
		<section className={styles.media_header}>
			<BlurImage {...imageConf} />
			<button type="button" className={styles.media_header_btn} onClick={openMediaPlayer}>
				<Play />
				<VisuallyHidden>Play {title} Trailer</VisuallyHidden>
			</button>
		</section>
	);
};

/**
 * Default Props.
 */
MediaHeader.defaultProps = {
	title: 'Media Title',
	trailer: {},
};

/**
 * Prop Types.
 */
MediaHeader.propTypes = {
	backdrop: PropTypes.string.isRequired,
	title: PropTypes.string,
	trailer: PropTypes.shape({
		key: PropTypes.string,
	}),
};

export default MediaHeader;
