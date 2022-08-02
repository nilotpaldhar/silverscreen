import PropTypes from 'prop-types';
import { MediaSlider } from '@components/media';
import MediaCastsPeople from './MediaCastsPeople';
import styles from './styles.module.scss';

/**
 * Render the MediaCasts component.
 *
 * @return {Element} The MediaCasts component.
 */
const MediaCasts = ({ casts }) => (
	<div className={styles.media_casts}>
		<MediaSlider
			collection={casts}
			component={MediaCastsPeople}
			slidesPerView={1.5}
			spaceBetween={10}
			breakpoints={{
				320: {
					slidesPerView: 2.5,
					spaceBetween: 10,
				},
				420: {
					slidesPerView: 3.5,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 4.5,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 5.5,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 6.5,
					spaceBetween: 16,
				},
			}}
		/>
	</div>
);

/**
 * Default Props.
 */
MediaCasts.defaultProps = {
	casts: [],
};

/**
 * Prop Types.
 */
MediaCasts.propTypes = {
	casts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaCasts;
