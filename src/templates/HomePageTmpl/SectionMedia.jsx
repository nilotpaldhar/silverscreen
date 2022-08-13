import PropTypes from 'prop-types';
import { Container, Heading, Tabs } from '@components/general';
import { MediaSlider } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the SectionMedia component.
 *
 * @return {Element} The SectionMedia component.
 */
const SectionMedia = ({ heading, data }) => {
	const { movie, tv } = data || {};

	/** Slider Config. */
	const sliderConf = {
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

	/** Tab Items. */
	const tabItems = [
		{
			label: 'Movies',
			content: (
				<MediaSlider
					{...sliderConf}
					collection={movie?.collection}
					componentProps={{ type: 'movie', hrefPrefix: 'movie' }}
				/>
			),
		},
		{
			label: 'TV Shows',
			content: (
				<MediaSlider
					{...sliderConf}
					collection={tv?.collection}
					componentProps={{ type: 'tv', hrefPrefix: 'tv' }}
				/>
			),
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
SectionMedia.defaultProps = {
	heading: 'Default Heading',
	data: { movie: {}, tv: {} },
};

/**
 * Prop Types.
 */
SectionMedia.propTypes = {
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

export default SectionMedia;
