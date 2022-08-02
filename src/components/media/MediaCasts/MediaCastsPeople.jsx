import PropTypes from 'prop-types';
import { Link } from '@components/general';
import styles from './styles.module.scss';

/**
 * Render the MediaCastsPeople component.
 *
 * @return {Element} The MediaCastsPeople component.
 */
const MediaCastsPeople = ({ data }) => (
	<Link href="/" className={styles.media_casts_people}>
		<span className={styles.name}>{data?.name}</span>
		<span className={styles.character}>{data?.character}</span>
	</Link>
);

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
		name: PropTypes.string,
		character: PropTypes.string,
	}),
};

export default MediaCastsPeople;
