import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the MediaCardRating component.
 *
 * @return {Element} The MediaCardRating component.
 */
const MediaCardRating = ({ rating }) => {
	const classNames = cx(styles.media_card_rating, {
		[styles.poor]: rating < 3,
		[styles.average]: rating >= 3 && rating < 7,
		[styles.above_average]: rating >= 7,
	});

	return <span className={classNames}>{rating}</span>;
};

/**
 * Default Props.
 */
MediaCardRating.defaultProps = {
	rating: 'NR',
};

/**
 * Prop Types.
 */
MediaCardRating.propTypes = {
	rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MediaCardRating;
