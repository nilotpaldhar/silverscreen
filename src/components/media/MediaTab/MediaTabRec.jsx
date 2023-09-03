import PropTypes from 'prop-types';

import Empty from '@components/feedback/Empty';
import Container from '@components/general/Container';
import MediaSlider from '@components/media/MediaSlider';
import MediaTabRecCard from '@components/media/MediaTab/MediaTabRecCard';

import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.scss';

/**
 * Render the MediaTabRec component.
 *
 * @return {Element} The MediaTabRec component.
 */
const MediaTabRec = ({ type, recommendations }) => {
	/** Slider Config. */
	const sliderConf = {
		overflow: true,
		slidesPerView: 2,
		spaceBetween: 10,
		componentProps: { type },
		component: MediaTabRecCard,
		collection: recommendations,
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
		<div className={styles.media_tab_rec}>
			<Container>
				{isEmpty(recommendations) ? (
					<div className={styles.media_tab_placeholder}>
						<Empty title={<span className="text-lg lg:text-xl">No Recommendations</span>} />
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
