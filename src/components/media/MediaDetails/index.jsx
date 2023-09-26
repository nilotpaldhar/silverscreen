import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Link from '@components/general/Link';
import Container from '@components/general/Container';
import BlurImage from '@components/general/BlurImage';

import MediaMeta from '@components/media/MediaMeta';
import MediaDetailsInfo from '@components/media/MediaDetails/MediaDetailsInfo';

import createCanonicalUrl from '@utils/createCanonicalUrl';
import styles from './styles.module.scss';

const MediaWatchlistBtn = dynamic(() => import('@components/media/MediaWatchlistBtn'));

/**
 * Render the MediaDetails component.
 *
 * @return {Element} The MediaDetails component.
 */
const MediaDetails = ({ type, media, season }) => {
	const router = useRouter();

	/** Media "HREF". */
	const mediaHref = `/${type === 'tv' || type === 'tvSeason' ? 'tv' : 'movie'}/${media?.uid}`;

	/** Media Release Year. */
	const releaseYear = type === 'tvSeason' ? season?.releaseDate?.year : media?.releaseDate?.year;

	/** Media Poster Source. */
	const posterSrc = type === 'tvSeason' ? season?.poster : media?.poster;

	/** Media Poster Config. */
	const posterConf = {
		src: posterSrc,
		alt: media?.title,
		width: 500,
		height: 750,
	};

	/** Media Meta Config. */
	const metaConf = {
		language: media?.language?.englishName,
		runtime: media?.runtime,
		releaseDate: media?.releaseDate?.dateString,
		rating: media?.rating,
		share: {
			url: createCanonicalUrl(router.asPath),
			title: type === 'tvSeason' ? `${media?.title} - ${season?.title}` : media?.title,
		},
	};

	/** Watchlist Button. */
	const watchlistBtn = <MediaWatchlistBtn id={media?.id} title={media?.title} type={type} />;

	return (
		<section className={styles.media_details}>
			<div className={styles.media_details_watchlist}>{watchlistBtn}</div>
			<Container fluidLarge={false}>
				<div className="justify-center row">
					<div className="col-12 xl:col-10">
						<div className={styles.media_details_body}>
							<div className="row">
								<div className="col-12 md:col-4">
									<div className={styles.media_details_poster}>
										<figure className={styles.media_details_poster_img}>
											<BlurImage {...posterConf} />
										</figure>
										{watchlistBtn}
									</div>
								</div>
								<div className="col-12 md:col-8">
									<h1 className={styles.media_details_title}>
										<Link href={mediaHref}>
											<span>{media?.title}</span>
											{type === 'tvSeason' && <span>&nbsp;-&nbsp;{season?.title}&nbsp;</span>}
											{releaseYear && <span>&#40;{releaseYear}&#41;</span>}
										</Link>
									</h1>
									<MediaMeta {...metaConf} />
									<MediaDetailsInfo type={type} media={media} season={season} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

/**
 * Default Props.
 */
MediaDetails.defaultProps = {
	type: 'movie',
	media: {},
	season: {},
};

/**
 * Prop Types.
 */
MediaDetails.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	media: PropTypes.shape({
		id: PropTypes.number,
		uid: PropTypes.string,
		title: PropTypes.string,
		overview: PropTypes.string,
		tagline: PropTypes.string,
		genres: PropTypes.arrayOf(PropTypes.shape({})),
		poster: PropTypes.string,
		releaseDate: PropTypes.shape({
			dateString: PropTypes.string,
			year: PropTypes.number,
		}),
		runtime: PropTypes.string,
		language: PropTypes.shape({
			englishName: PropTypes.string,
		}),
		rating: PropTypes.string,
	}),
	season: PropTypes.shape({
		title: PropTypes.string,
		poster: PropTypes.string,
		releaseDate: PropTypes.shape({
			dateString: PropTypes.string,
			year: PropTypes.number,
		}),
	}),
};

export default MediaDetails;
