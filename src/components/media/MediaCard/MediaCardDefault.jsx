import PropTypes from 'prop-types';

import { Link, BlurImage, TruncateString } from '@components/general';
import { PlayCircle } from '@icons';

import { isArray } from 'lodash';

import MediaCardRating from './MediaCardRating';
import MediaCardWatchlist from './MediaCardWatchlist';

import styles from './styles.module.scss';

/**
 * Render the MediaCardDefault component.
 *
 * @return {Element} The MediaCardDefault component.
 */
const MediaCardDefault = ({ href, data, type }) => {
	/** Format grenres. */
	const formatGenres = (genres) => {
		if (!isArray(genres)) return null;
		return genres?.map((g) => g?.name)?.join(', ');
	};

	/** Media Release Date. */
	const releaseDate = data?.releaseDate?.dateString;

	/** Media Genres. */
	const genresStr = formatGenres(data?.genres);

	/** Media Poster Config. */
	const posterConf = {
		src: data?.poster,
		alt: data?.title,
		width: 342,
		height: 513,
	};

	return (
		<>
			<div className={styles.media_card_wrapper}>
				<Link href={href} className={styles.media_card_header}>
					<figure className={styles.media_card_poster}>
						<BlurImage {...posterConf} />
					</figure>
					<span className={styles.media_card_playicon}>
						<PlayCircle />
					</span>
					<MediaCardRating rating={data?.rating} />
				</Link>
				<MediaCardWatchlist id={data?.id} type={type} title={data?.title} />
			</div>

			<div className={styles.media_card_content}>
				<h2 className={styles.media_card_title}>
					<Link href={href}>{data?.title}</Link>
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
	data: {},
	type: 'movie',
};

/**
 * Prop Types.
 */
MediaCardDefault.propTypes = {
	href: PropTypes.string.isRequired,
	data: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		poster: PropTypes.string,
		releaseDate: PropTypes.shape({
			dateString: PropTypes.string,
		}),
		genres: PropTypes.arrayOf(PropTypes.shape({})),
		rating: PropTypes.number,
	}),
	type: PropTypes.oneOf(['tv', 'movie', 'tvSeason']),
};

export default MediaCardDefault;
