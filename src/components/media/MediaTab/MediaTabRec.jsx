import PropTypes from 'prop-types';
import { Container } from '@components/general';
import { MediaSlider } from '@components/media';
import MediaTabRecCard from './MediaTabRecCard';
import styles from './styles.module.scss';

/**
 * Render the MediaTabRec component.
 *
 * @return {Element} The MediaTabRec component.
 */
const MediaTabRec = ({ type, recommendations }) => {
	/** Slider Config. */
	const sliderConf = {
		collection: recommendations,
		component: MediaTabRecCard,
		componentProps: { type },
		slidesPerView: 2,
		spaceBetween: 10,
		overflow: true,
		breakpoints: {
			576: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 16,
			},
			2000: {
				slidesPerView: 8,
				spaceBetween: 16,
			},
		},
	};

	return (
		<div className={styles.media_tab_rec}>
			<Container>
				<MediaSlider {...sliderConf} />
			</Container>
		</div>
	);
};

/**
 * Default Props.
 */
MediaTabRec.defaultProps = {
	type: 'movie',
	recommendations: [],
};

/**
 * Prop Types.
 */
MediaTabRec.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	recommendations: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaTabRec;
