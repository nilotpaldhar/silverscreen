import PropTypes from 'prop-types';
import isNumber from 'lodash/isNumber';
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

	return (
		<span className={classNames}>
			<span className={styles.media_card_rating_inner}>
				{isNumber(rating) ? rating.toFixed(1) : rating}
			</span>
		</span>
	);
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
