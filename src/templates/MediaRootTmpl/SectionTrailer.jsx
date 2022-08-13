import PropTypes from 'prop-types';
import { Container, Heading } from '@components/general';
import { MediaSlider, MediaTrailer } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the SectionTrailer component.
 *
 * @return {Element} The SectionTrailer component.
 */
const SectionTrailer = ({ heading, data }) => {
	const collection = data?.collection?.map((m) => m?.trailer);

	/** Slider Config. */
	const sliderConf = {
		component: MediaTrailer,
		collection,
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
		<section className={styles.media_root_tmpl_section}>
			<Container>
				<div className={styles.heading_wrapper}>
					<Heading>{heading}</Heading>
				</div>
				<MediaSlider {...sliderConf} />
			</Container>
		</section>
	);
};
/**
 * Default Props.
 */
SectionTrailer.defaultProps = {
	heading: 'Default Heading',
	data: {},
};

/**
 * Prop Types.
 */
SectionTrailer.propTypes = {
	heading: PropTypes.node,
	data: PropTypes.shape({
		collection: PropTypes.arrayOf(PropTypes.shape({})),
	}),
};

export default SectionTrailer;
