import PropTypes from 'prop-types';
import { Link } from '@components/general';
import { MediaBlock, MediaCasts, MediaSlider, MediaEpisodes } from '@components/media';
import SeasonLoader from './SeasonLoader';
import styles from './styles.module.scss';

/**
 * Render the MediaDetailsInfo component.
 *
 * @return {Element} The MediaDetailsInfo component.
 */
const MediaDetailsInfo = ({ type, media, season }) => {
	const { uid, seasons, overview, tagline, genres, directors, creators, writers, topCasts } = media;
	const { episodes, overview: seasonOverview } = season;

	/** Media Overview. */
	const mediaOverview = type === 'tvSeason' ? seasonOverview : overview;

	/** Media Creator. */
	const mediaCreator = type === 'tv' || type === 'tvSeason' ? creators : directors;

	/** Genre href prefix. */
	const genreHrefPrefix = type === 'tv' || type === 'tvSeason' ? 'genres/tv' : 'genres/movie';

	/** Media slider config. */
	const sliderConf = {
		spaceBetween: 10,
		slidesPerView: 1.3,
		loader: SeasonLoader,
		collection: seasons?.collection,
		componentProps: {
			type: 'tvSeason',
			hrefPrefix: `tv/${uid}`,
		},
		breakpoints: {
			320: {
				slidesPerView: 2.3,
				spaceBetween: 10,
			},
			420: {
				slidesPerView: 3.3,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 4.3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 4.3,
				spaceBetween: 16,
			},
		},
	};

	return (
		<div className={styles.media_details_info}>
			{/* TV Seasons. */}
			{type === 'tv' && seasons?.count > 0 && (
				<MediaBlock>
					<MediaBlock.Header>
						{seasons?.count} {seasons?.label}
					</MediaBlock.Header>
					<MediaBlock.Body>
						<MediaSlider {...sliderConf} />
					</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* TV Season Episodes. */}
			{type === 'tvSeason' && episodes?.count > 0 && (
				<MediaBlock>
					<MediaBlock.Header>
						{episodes?.count}&nbsp;{episodes?.label}
					</MediaBlock.Header>
					<MediaBlock.Body>
						<MediaEpisodes episodes={episodes?.collection} />
					</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Overview. */}
			{mediaOverview && (
				<MediaBlock>
					<MediaBlock.Header>OVERVIEW</MediaBlock.Header>
					<MediaBlock.Body>{mediaOverview}</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Tagline. */}
			{tagline && (
				<MediaBlock align="horizontal">
					<MediaBlock.Header>TAGLINE:</MediaBlock.Header>
					<MediaBlock.Body>{tagline}</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Genres. */}
			{genres?.length > 0 && (
				<MediaBlock align="horizontal">
					<MediaBlock.Header>GENRE(s):</MediaBlock.Header>
					<MediaBlock.Body>
						<ul className={styles.media_details_list}>
							{genres?.map((genre) => (
								<li key={genre?.id}>
									<Link href={`/${genreHrefPrefix}/${genre?.slug}`}>{genre?.name}</Link>
								</li>
							))}
						</ul>
					</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Director. */}
			{mediaCreator?.length > 0 && (
				<MediaBlock align="horizontal">
					<MediaBlock.Header>{type === 'tv' ? 'CREATOR(s):' : 'DIRECTOR(s):'}</MediaBlock.Header>
					<MediaBlock.Body>
						<ul className={styles.media_details_list}>
							{mediaCreator?.map((creator) =>
								creator?.id ? (
									<li key={creator.id}>
										<Link href={`/cast/${creator.id}`}>{creator?.name}</Link>
									</li>
								) : null
							)}
						</ul>
					</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Writers. */}
			{writers?.length > 0 && (
				<MediaBlock align="horizontal">
					<MediaBlock.Header>WRITER(s):</MediaBlock.Header>
					<MediaBlock.Body>
						<ul className={styles.media_details_list}>
							{writers?.map((writer) =>
								writer?.id ? (
									<li key={writer.id}>
										<Link href={`/cast/${writer.id}`}>{writer?.name}</Link>
									</li>
								) : null
							)}
						</ul>
					</MediaBlock.Body>
				</MediaBlock>
			)}

			{/* Top Cast. */}
			{topCasts?.length > 0 && (
				<MediaBlock>
					<MediaBlock.Header>TOP CAST</MediaBlock.Header>
					<MediaBlock.Body>
						<MediaCasts casts={topCasts} />
					</MediaBlock.Body>
				</MediaBlock>
			)}
		</div>
	);
};

/**
 * Default Props.
 */
MediaDetailsInfo.defaultProps = {
	type: 'movie',
	media: {},
	season: {},
};

/**
 * Prop Types.
 */
MediaDetailsInfo.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	media: PropTypes.shape({
		uid: PropTypes.string,
		seasons: PropTypes.shape({
			collection: PropTypes.arrayOf(PropTypes.shape({})),
			count: PropTypes.number,
			label: PropTypes.string,
		}),
		overview: PropTypes.string,
		tagline: PropTypes.string,
		genres: PropTypes.arrayOf(PropTypes.shape({})),
		directors: PropTypes.arrayOf(PropTypes.shape({})),
		creators: PropTypes.arrayOf(PropTypes.shape({})),
		writers: PropTypes.arrayOf(PropTypes.shape({})),
		topCasts: PropTypes.arrayOf(PropTypes.shape({})),
	}),
	season: PropTypes.shape({
		overview: PropTypes.string,
		episodes: PropTypes.shape({
			count: PropTypes.number,
			label: PropTypes.string,
			collection: PropTypes.arrayOf(PropTypes.shape({})),
		}),
	}),
};

export default MediaDetailsInfo;
