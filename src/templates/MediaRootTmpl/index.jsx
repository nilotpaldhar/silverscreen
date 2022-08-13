import PropTypes from 'prop-types';
import { MediaCarousel } from '@components/media';
import SectionMedia from './SectionMedia';
import SectionGenre from './SectionGenre';
import SectionTrailer from './SectionTrailer';
import styles from './styles.module.scss';

/**
 * Render the MediaRootTmpl component.
 *
 * @return {Element} The MediaRootTmpl component.
 */
const MediaRootTmpl = ({ type, data }) => {
	const { trending, upcomming, trailers, popular, topRated, genres } = data;
	const trendingMedia = trending?.collection?.map((m) => ({ ...m, type })) ?? [];

	return (
		<div className={styles.media_root_tmpl}>
			<section className={styles.media_root_tmpl_hero}>
				<MediaCarousel collection={trendingMedia} />
			</section>
			<main className={styles.media_root_tmpl_content}>
				<SectionMedia
					heading={type === 'tv' ? 'Latest Shows' : 'New and Upcomming'}
					data={upcomming}
				/>
				<SectionTrailer heading="Latest Trailers" data={trailers} />
				<SectionMedia heading="Most Popular" data={popular} />
				<SectionMedia heading="All Time Hits" data={topRated} />
				<SectionGenre type={type} heading="Genres" data={genres} />
			</main>
		</div>
	);
};

/**
 * Default Props.
 */
MediaRootTmpl.defaultProps = {
	type: 'movie',
	data: {},
};

/**
 * Prop Types.
 */
MediaRootTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	data: PropTypes.shape({
		trending: PropTypes.shape({
			collection: PropTypes.arrayOf(PropTypes.shape({})),
		}),
		upcomming: PropTypes.shape({}),
		trailers: PropTypes.shape({}),
		popular: PropTypes.shape({}),
		topRated: PropTypes.shape({}),
		genres: PropTypes.shape({}),
	}),
};

export default MediaRootTmpl;
