import PropTypes from 'prop-types';

import Empty from '@components/feedback/Empty';
import Container from '@components/general/Container';
import MediaSlider from '@components/media/MediaSlider';
import MediaTrailer from '@components/media/MediaTrailer';

import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.scss';

/**
 * Render the MediaTabVideos component.
 *
 * @return {Element} The MediaTabVideos component.
 */
const MediaTabVideos = ({ videos }) => {
	/** Slider Config. */
	const sliderConf = {
		overflow: true,
		spaceBetween: 10,
		slidesPerView: 1,
		collection: videos,
		component: MediaTrailer,
		loaderProps: { orientation: 'landscape' },
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
				{isEmpty(videos) ? (
					<div className={styles.media_tab_placeholder}>
						<Empty title={<span className="text-lg lg:text-xl">No Videos</span>} />
					</div>
				) : (
					<MediaSlider {...sliderConf} />
				)}
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
