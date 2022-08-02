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
	/** Media Title. */
	const mediaTitle = type === 'tv' || type === 'tvSeason' ? data?.name : data?.title;

	/** Media Href. */
	const mediaHref = generateMediaHref(type, data?.id, mediaTitle, data?.season_number, hrefPrefix);

	return (
		<div className={styles.media_card}>
			{type === 'tvSeason' ? (
				<MediaCardSeason title={mediaTitle} href={mediaHref} data={data} />
			) : (
				<MediaCardDefault type={type} title={mediaTitle} href={mediaHref} data={data} />
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
		name: PropTypes.string,
		title: PropTypes.string,
		season_number: PropTypes.number,
		runtime: PropTypes.number,
	}),
};

export default MediaCard;
