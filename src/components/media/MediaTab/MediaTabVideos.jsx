import PropTypes from 'prop-types';
import { Container } from '@components/general';
import { MediaSlider, MediaTrailer } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the MediaTabVideos component.
 *
 * @return {Element} The MediaTabVideos component.
 */
const MediaTabVideos = ({ videos }) => {
	/** Slider Config. */
	const sliderConf = {
		collection: videos,
		component: MediaTrailer,
		slidesPerView: 1,
		spaceBetween: 10,
		overflow: true,
		breakpoints: {
			340: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
			1600: {
				slidesPerView: 6,
				spaceBetween: 16,
			},
			2400: {
				slidesPerView: 8,
				spaceBetween: 16,
			},
		},
	};

	return (
		<div className={styles.media_tab_videos}>
			<Container>
				<MediaSlider {...sliderConf} />
			</Container>
		</div>
	);
};

/**
 * Default Props.
 */
MediaTabVideos.defaultProps = {
	videos: [],
};

/**
 * Prop Types.
 */
MediaTabVideos.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaTabVideos;
