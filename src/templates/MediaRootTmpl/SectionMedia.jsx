import PropTypes from 'prop-types';
import { Container, Heading } from '@components/general';
import { MediaSlider } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the SectionMedia component.
 *
 * @return {Element} The SectionMedia component.
 */
const SectionMedia = ({ type, heading, data }) => {
	const hrefPrefix = type === 'tv' ? 'tv' : 'movie';

	/** Slider Config. */
	const sliderConf = {
		collection: data?.collection,
		componentProps: { type, hrefPrefix },
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
			1200: {
				slidesPerView: 6,
				spaceBetween: 16,
			},
			2000: {
				slidesPerView: 8,
				spaceBetween: 16,
			},
			2400: {
				slidesPerView: 10,
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
SectionMedia.defaultProps = {
	type: 'movie',
	heading: 'Default Heading',
	data: {},
};

/**
 * Prop Types.
 */
SectionMedia.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	heading: PropTypes.node,
	data: PropTypes.shape({
		collection: PropTypes.arrayOf(PropTypes.shape({})),
	}),
};

export default SectionMedia;
