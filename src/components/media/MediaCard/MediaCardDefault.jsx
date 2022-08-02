import PropTypes from 'prop-types';
import { Link, BlurImage, TruncateString } from '@components/general';
import { PlayCircle } from '@icons';
import { format } from 'date-fns';
import { isArray } from 'lodash';
import { getMediaImgUrl, mapMediaGenres } from '@utils';
import MediaCardRating from './MediaCardRating';
import styles from './styles.module.scss';

/**
 * Render the MediaCardDefault component.
 *
 * @return {Element} The MediaCardDefault component.
 */
const MediaCardDefault = ({ type, href, title, data }) => {
	/** Format release date. */
	const formatReleaseDate = (date = null) => (date ? format(new Date(date), 'MMM d, y') : null);

	/** Format grenres. */
	const formatGenres = (genres) => {
		if (!isArray(genres)) return null;
		return genres?.map((g) => g?.name)?.join(', ');
	};

	/** Media Release Date. */
	const releaseDate = formatReleaseDate(type === 'tv' ? data?.first_air_date : data?.release_date);

	/** Media Genres. */
	const genresStr = formatGenres(mapMediaGenres(type, data?.genre_ids));

	/** Media Poster Config. */
	const posterConf = {
		src: getMediaImgUrl(data?.poster_path, 'w342') ?? '/poster-placeholder.jpg',
		alt: title,
		width: 342,
		height: 513,
	};

	return (
		<>
			<Link href={href} className={styles.media_card_header}>
				<figure className={styles.media_card_poster}>
					<BlurImage {...posterConf} />
				</figure>
				<span className={styles.media_card_playicon}>
					<PlayCircle />
				</span>
				<MediaCardRating rating={data?.vote_average} />
			</Link>
			<div className={styles.media_card_content}>
				<h2 className={styles.media_card_title}>
					<Link href={href}>{title}</Link>
				</h2>
				<ul className={styles.media_card_meta}>
					{releaseDate && <li>{releaseDate}</li>}
					{genresStr && (
						<li>
							<TruncateString text={genresStr} maxLength={16} />
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

/**
 * Default Props.
 */
MediaCardDefault.defaultProps = {
	type: 'movie',
	data: {},
};

/**
 * Prop Types.
 */
MediaCardDefault.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie', 'tvSeason']),
	title: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	data: PropTypes.shape({
		poster_path: PropTypes.string,
		release_date: PropTypes.string,
		first_air_date: PropTypes.string,
		genre_ids: PropTypes.arrayOf(PropTypes.number),
		vote_average: PropTypes.number,
	}),
};

export default MediaCardDefault;
