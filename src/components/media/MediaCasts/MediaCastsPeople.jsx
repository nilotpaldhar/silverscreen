import PropTypes from 'prop-types';
import { Link } from '@components/general';
import styles from './styles.module.scss';

/**
 * Render the MediaCastsPeople component.
 *
 * @return {Element} The MediaCastsPeople component.
 */
const MediaCastsPeople = ({ data }) => {
	const { id, name, character } = data || {};

	return id ? (
		<Link href={`/cast/${id}`} className={styles.media_casts_people}>
			<span className={styles.name}>{name}</span>
			<span className={styles.character}>{character}</span>
		</Link>
	) : null;
};

/**
 * Default Props.
 */
MediaCastsPeople.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaCastsPeople.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		character: PropTypes.string,
	}),
};

export default MediaCastsPeople;
