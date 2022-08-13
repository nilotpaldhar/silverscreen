import PropTypes from 'prop-types';
import { Container } from '@components/general';
import { MediaSlider } from '@components/media';
import MediaCarouselItem from './MediaCarouselItem';
import styles from './styles.module.scss';

/**
 * Render the MediaCarousel component.
 *
 * @return {Element} The MediaCarousel component.
 */
const MediaCarousel = ({ collection }) => {
	/** Initial Carousel Slide. */
	const initialSlide = collection?.length > 1 ? 2 : 0;

	return (
		<div className={styles.media_carousel}>
			<Container>
				<MediaSlider
					collection={collection}
					component={MediaCarouselItem}
					initialSlide={initialSlide}
					slidesPerView={1}
					spaceBetween={20}
					breakpoints={{}}
					overflow
				/>
			</Container>
		</div>
	);
};

/**
 * Default Props.
 */
MediaCarousel.defaultProps = {
	collection: [],
};

/**
 * Prop Types.
 */
MediaCarousel.propTypes = {
	collection: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaCarousel;
