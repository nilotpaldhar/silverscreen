import PropTypes from 'prop-types';
import { generateMediaHref } from '@utils';
import MediaCardDefault from './MediaCardDefault';
import MediaCardSeason from './MediaCardSeason';
import styles from './styles.module.scss';

/**
 * Render the MediaCard component.
 *
 * @return {Element} The MediaCard component.
 */
const MediaCard = ({ type, hrefPrefix, data }) => {
	/** Media Href. */
	const mediaHref = generateMediaHref(type, data?.id, data?.title, data?.season, hrefPrefix);

	return (
		<div className={styles.media_card}>
			{type === 'tvSeason' ? (
				<MediaCardSeason href={mediaHref} data={data} type={type} />
			) : (
				<MediaCardDefault href={mediaHref} data={data} type={type} />
			)}
		</div>
	);
};

/**
 * Default Props.
 */
MediaCard.defaultProps = {
	type: 'movie',
	hrefPrefix: null,
	data: {},
};

/**
 * Prop Types.
 */
MediaCard.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie', 'tvSeason']),
	hrefPrefix: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	data: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		season: PropTypes.number,
	}),
};

export default MediaCard;
