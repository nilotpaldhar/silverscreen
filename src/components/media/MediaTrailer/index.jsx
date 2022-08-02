import PropTypes from 'prop-types';
import { BlurImage } from '@components/general';
import { Play } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaTrailer component.
 *
 * @return {Element} The MediaTrailer component.
 */
const MediaTrailer = ({ data }) => {
	const { thumbnail, name, language } = data;

	/** Media Trailer Image Config. */
	const imgConf = {
		src: thumbnail,
		alt: name,
		width: 320,
		height: 180,
		orientation: 'landscape',
		className: styles.media_trailer_thumbnail,
	};

	return (
		<div className={styles.media_trailer}>
			<button type="button" className={styles.media_trailer_btn}>
				<BlurImage {...imgConf} />
				<div className={styles.media_trailer_play}>
					<Play />
				</div>
				<div className={styles.media_trailer_content}>
					<h3 className={styles.media_trailer_name}>{name}</h3>
					<span className={styles.media_trailer_lang}>{language}</span>
				</div>
			</button>
		</div>
	);
};

/**
 * Default Props.
 */
MediaTrailer.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaTrailer.propTypes = {
	data: PropTypes.shape({
		thumbnail: PropTypes.string,
		name: PropTypes.string,
		language: PropTypes.string,
	}),
};

export default MediaTrailer;
