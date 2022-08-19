import PropTypes from 'prop-types';
import { Container, Heading, Tabs } from '@components/general';
import { MediaSlider } from '@components/media';
import { GenreCard } from '@components/genre';
import styles from './styles.module.scss';

/**
 * Render the SectionGenre component.
 *
 * @return {Element} The SectionGenre component.
 */
const SectionGenre = ({ heading, data }) => {
	const { movie, tv } = data || {};

	/** Tab Items. */
	const tabItems = [
		{
			label: 'Movies',
			content: (
				<MediaSlider
					overflow
					component={GenreCard}
					collection={movie?.collection}
					componentProps={{ type: 'movie' }}
					loaderProps={{ orientation: 'landscape' }}
				/>
			),
		},
		{
			label: 'TV Shows',
			content: (
				<MediaSlider
					overflow
					component={GenreCard}
					collection={tv?.collection}
					componentProps={{ type: 'tv' }}
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
SectionGenre.defaultProps = {
	heading: 'Default Heading',
	data: { movie: {}, tv: {} },
};

/**
 * Prop Types.
 */
SectionGenre.propTypes = {
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

export default SectionGenre;
