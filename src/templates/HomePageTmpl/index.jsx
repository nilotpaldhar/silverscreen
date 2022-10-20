import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { MediaCarousel } from '@components/media';
import styles from './styles.module.scss';

/** Dynamic Imports. */
const SectionMedia = dynamic(() => import('./SectionMedia'));
const SectionGenre = dynamic(() => import('./SectionGenre'));
const SectionTrailer = dynamic(() => import('./SectionTrailer'));

/**
 * Render the HomePageTmpl component.
 *
 * @return {Element} The HomePageTmpl component.
 */
const HomePageTmpl = ({ data }) => {
	const { trending, upcomming, trailers, popular, topRated, genres } = data;
	const trendingMovie = trending?.movie?.collection?.map((m) => ({ ...m, type: 'movie' })) ?? [];
	const trendingTv = trending?.tv?.collection?.map((t) => ({ ...t, type: 'tv' })) ?? [];

	return (
		<div className={styles.home_page_tmpl}>
			<section className={styles.home_page_tmpl_hero}>
				<MediaCarousel collection={[...trendingMovie, ...trendingTv]} />
			</section>
			<main className={styles.home_page_tmpl_content}>
				<SectionMedia heading="New and Upcomming" data={upcomming} />
				<SectionTrailer heading="Latest Trailers" data={trailers} />
				<SectionMedia heading="Most Popular" data={popular} />
				<SectionMedia heading="All Time Hits" data={topRated} />
				<SectionGenre heading="Genres" data={genres} />
			</main>
		</div>
	);
};

/**
 * Default Props.
 */
HomePageTmpl.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
HomePageTmpl.propTypes = {
	data: PropTypes.shape({
		trending: PropTypes.shape({
			movie: PropTypes.shape({
				collection: PropTypes.arrayOf(PropTypes.shape({})),
			}),
			tv: PropTypes.shape({
				collection: PropTypes.arrayOf(PropTypes.shape({})),
			}),
		}),
		upcomming: PropTypes.shape({}),
		trailers: PropTypes.shape({}),
		popular: PropTypes.shape({}),
		topRated: PropTypes.shape({}),
		genres: PropTypes.shape({}),
	}),
};

export default HomePageTmpl;
