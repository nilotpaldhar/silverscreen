/* eslint-disable no-unused-expressions */
import { camelCase } from 'lodash';
import { formatMediaListProps } from '@utils';

/**
 * Normalise media root props.
 *
 * @param {string} type Result Type.(all|movie|tv)
 * @param {array} results Media Results.
 * @param {object} genres Media Genres.
 *
 * @returns Normalise media root data.
 */
const normaliseMediaRootProps = (type = 'all', results = [], latestTrailers = [], genres = {}) => {
	const asignDirectly = type !== 'all';

	/** Initialized Props. */
	const props = {
		trending: {},
		upcomming: {},
		popular: {},
		topRated: {},
		trailers: latestTrailers,
		genres: asignDirectly ? genres[type] : genres,
	};

	/** Get data, depending on key & url. */
	results
		?.map((res) => ({
			key: camelCase(res?.config?.url?.split('?')[0]),
			url: res?.config?.url,
			data: res?.data,
		}))
		.forEach(({ key, url, data }) => {
			const mediaType = url?.indexOf('tv') !== -1 ? 'tv' : 'movie';
			const resObj = {
				collection: data?.results
					?.filter((_, idx) => idx <= 9)
					?.map((item) => formatMediaListProps(mediaType, item)),
				meta: {
					currentPage: data?.page,
					totalPages: data?.total_pages,
					totalResults: data?.total_results,
				},
			};

			/** Trending movies & tv shows. */
			if (key === 'trendingMovieDay' || key === 'trendingTvDay') {
				asignDirectly ? (props.trending = resObj) : (props.trending[mediaType] = resObj);
			}

			/** Upcomming movies & tv shows. */
			if (key === 'movieUpcoming' || key === 'tvOnTheAir') {
				asignDirectly ? (props.upcomming = resObj) : (props.upcomming[mediaType] = resObj);
			}

			/** Popular movies & tv shows. */
			if (key === 'moviePopular' || key === 'tvPopular') {
				asignDirectly ? (props.popular = resObj) : (props.popular[mediaType] = resObj);
			}

			/** Top rated movies & tv shows. */
			if (key === 'movieTopRated' || key === 'tvTopRated') {
				asignDirectly ? (props.topRated = resObj) : (props.topRated[mediaType] = resObj);
			}
		});

	return props;
};

export default normaliseMediaRootProps;
