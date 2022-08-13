import { getMediaTrailer } from '@utils';
import { tmdbClient } from '@config/tmdb';
import { format, addDays } from 'date-fns';
import normaliseTrailersCollection from '@libs/tmdb/utils/normaliseTrailersCollection';

/** Get request url. */
const getRequestUrl = (mediaType, language) => {
	const type = mediaType === 'tv' ? 'tv' : 'movie';
	const from = format(new Date(), 'yyyy-MM-dd');
	const until = format(addDays(new Date(), 15), 'yyyy-MM-dd');

	/** Query Params. */
	const lang = `language=${language}`;
	const sort = 'sort_by=popularity.desc';
	const page = 'page=1';
	const releaseFrom = `primary_release_date.gte=${from}`;
	const releaseUntil = `primary_release_date.lte=${until}`;

	return `/discover/${type}?&include_adult=false&${lang}&${sort}&${page}&${releaseFrom}&${releaseUntil}`;
};

/** Get Latest Media List. */
const getLatestMediaList = async (mediaType, language) => {
	/** Request urls. */
	const urlMovie = getRequestUrl('movie', language);
	const urlTv = getRequestUrl('tv', language);

	/** Init Media List. */
	let mediaList = [];

	try {
		/** Fetch Latest TV-Shows/Movies. */
		if (mediaType === 'tv') {
			const resTv = await tmdbClient.get(urlTv);
			const results = resTv?.data?.results;
			mediaList = [...mediaList, ...results];
		} else if (mediaType === 'movie') {
			const resMovie = await tmdbClient.get(urlMovie);
			const results = resMovie?.data?.results;
			mediaList = [...mediaList, ...results];
		} else {
			const resAll = await Promise.all([tmdbClient.get(urlMovie), tmdbClient.get(urlTv)]);
			resAll?.forEach((res) => {
				const results = res?.data?.results;
				mediaList = [...mediaList, ...results];
			});
		}

		return mediaList?.map((m) => ({
			id: m?.id,
			type: m?.name ? 'tv' : 'movie',
		}));
	} catch (error) {
		return mediaList;
	}
};

/**
 * Get latest media(movie/tv-show) trailers.
 *
 * @param {string} type Media Type.
 *
 * @return {array} Latest Media trailers.
 */
const getLatestMediaTrailers = async (type = 'all') => {
	const language = 'en-US';

	try {
		/** Fetch Media List. */
		const mediaList = await getLatestMediaList(type, language);

		/** Fetch Latest Trailers. */
		const resArr = await Promise.all(
			mediaList?.map((m) => {
				const appendToRes = 'append_to_response=videos';
				const lang = `language=${language}`;
				return tmdbClient.get(`/${m?.type}/${m?.id}?${appendToRes}&${lang}`);
			})
		);

		/** Normalise Data. */
		const latestTrailers = resArr?.map(({ data }) => ({
			id: data?.id,
			title: data?.name ?? data?.title,
			type: data?.name ? 'tv' : 'movie',
			trailer: getMediaTrailer(data?.videos?.results),
		}));
		return normaliseTrailersCollection(type, latestTrailers);
	} catch (error) {
		return null;
	}
};

export default getLatestMediaTrailers;
