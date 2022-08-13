import PropTypes from 'prop-types';
import { Container, Heading, Tabs } from '@components/general';
import { MediaSlider, MediaTrailer } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the SectionTrailer component.
 *
 * @return {Element} The SectionTrailer component.
 */
const SectionTrailer = ({ heading, data }) => {
	const { movie, tv } = data || {};
	const movieCollection = movie?.collection?.map((m) => m?.trailer);
	const tvCollection = tv?.collection?.map((t) => t?.trailer);

	/** Slider Config. */
	const sliderConf = {
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

	/** Tab Items. */
	const tabItems = [
		{
			label: 'Movies',
			content: <MediaSlider collection={movieCollection} {...sliderConf} />,
		},
		{
			label: 'TV Shows',
			content: <MediaSlider collection={tvCollection} {...sliderConf} />,
		},
	];

	return (
		<section className={styles.home_page_tmpl_section}>
			<Container>
				<Tabs
					items={tabItems}
					prepend={<Heading>{heading}</Heading>}
					headerClassName={styles.header}
				/>
			</Container>
		</section>
	);
};
/**
 * Default Props.
 */
SectionTrailer.defaultProps = {
	heading: 'Default Heading',
	data: { movie: {}, tv: {} },
};

/**
 * Prop Types.
 */
SectionTrailer.propTypes = {
	heading: PropTypes.node,
	data: PropTypes.shape({
		movie: PropTypes.shape({
			collection: PropTypes.arrayOf(PropTypes.shape({})),
		}),
		tv: PropTypes.shape({
			collection: PropTypes.arrayOf(PropTypes.shape({})),
		}),
	}),
};

export default SectionTrailer;
