import PropTypes from 'prop-types';
import { BlurImage, Link } from '@components/general';
import styles from './styles.module.scss';

/**
 * Render the GenreCard component.
 *
 * @return {Element} The GenreCard component.
 */
const GenreCard = ({ type, data }) => {
	const { name, slug, backdrop } = data;

	/** Genre type & href */
	const genreType = type === 'tv' ? 'tv' : 'movie';
	const href = `/genres/${genreType}/${slug}`;

	/** Genre Backdrop Config. */
	const backdropConf = { src: backdrop, alt: name, width: 320, height: 200 };

	return (
		<Link href={href} className={styles.genre_card}>
			<figure className={styles.genre_card_poster}>
				<BlurImage {...backdropConf} />
			</figure>
			<h2 className={styles.genre_card_title}>{name}</h2>
		</Link>
	);
};

/**
 * Default Props.
 */
GenreCard.defaultProps = {
	type: 'movie',
	data: {},
};

/**
 * Prop Types.
 */
GenreCard.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	data: PropTypes.shape({
		name: PropTypes.string,
		slug: PropTypes.string,
		backdrop: PropTypes.string,
	}),
};

export default GenreCard;
