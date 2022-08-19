import PropTypes from 'prop-types';
import { Container } from '@components/general';
import { MediaSlider } from '@components/media';
import MediaCarouselItem from './MediaCarouselItem';
import MediaCarouselLoader from './MediaCarouselLoader';
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
					overflow
					breakpoints={{}}
					slidesPerView={1}
					spaceBetween={20}
					collection={collection}
					initialSlide={initialSlide}
					loader={MediaCarouselLoader}
					component={MediaCarouselItem}
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
