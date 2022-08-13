import PropTypes from 'prop-types';
import { Container, Heading } from '@components/general';
import { MediaSlider } from '@components/media';
import { GenreCard } from '@components/genre';
import styles from './styles.module.scss';

/**
 * Render the SectionGenre component.
 *
 * @return {Element} The SectionGenre component.
 */
const SectionGenre = ({ type, heading, data }) => (
	<section className={styles.media_root_tmpl_section}>
		<Container>
			<div className={styles.heading_wrapper}>
				<Heading>{heading}</Heading>
			</div>
			<MediaSlider
				overflow
				component={GenreCard}
				componentProps={{ type }}
				collection={data?.collection}
			/>
		</Container>
	</section>
);

/**
 * Default Props.
 */
SectionGenre.defaultProps = {
	type: 'movie',
	heading: 'Default Heading',
	data: {},
};

/**
 * Prop Types.
 */
SectionGenre.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	heading: PropTypes.node,
	data: PropTypes.shape({
		collection: PropTypes.arrayOf(PropTypes.shape({})),
	}),
};

export default SectionGenre;
