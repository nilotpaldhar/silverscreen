/**
 * Prefix for local storage to avoid conflict.
 *
 * @type {string}
 */
export const LOCAL_STORAGE_PREFIX = 'sisn';

/**
 * Media(movie/tv) pages to be generated initially.
 *
 * @type {number}
 */
export const MEDIA_PAGES_COUNT = 20;

/**
 * Media(movie/tv) results per page.
 *
 * @type {number}
 */
export const MEDIA_RESULTS_PER_PAGE = 20;

/**
 * Media(movie/tv) genres.
 *
 * @type {object}
 */
export const MEDIA_GENRES = {
	movie: [
		{
			id: 28,
			name: 'Action',
		},
		{
			id: 12,
			name: 'Adventure',
		},
		{
			id: 16,
			name: 'Animation',
		},
		{
			id: 35,
			name: 'Comedy',
		},
		{
			id: 80,
			name: 'Crime',
		},
		{
			id: 99,
			name: 'Documentary',
		},
		{
			id: 18,
			name: 'Drama',
		},
		{
			id: 10751,
			name: 'Family',
		},
		{
			id: 14,
			name: 'Fantasy',
		},
		{
			id: 36,
			name: 'History',
		},
		{
			id: 27,
			name: 'Horror',
		},
		{
			id: 10402,
			name: 'Music',
		},
		{
			id: 9648,
			name: 'Mystery',
		},
		{
			id: 10749,
			name: 'Romance',
		},
		{
			id: 878,
			name: 'Science Fiction',
		},
		{
			id: 10770,
			name: 'TV Movie',
		},
		{
			id: 53,
			name: 'Thriller',
		},
		{
			id: 10752,
			name: 'War',
		},
		{
			id: 37,
			name: 'Western',
		},
	],
	tv: [
		{
			id: 10759,
			name: 'Action & Adventure',
		},
		{
			id: 16,
			name: 'Animation',
		},
		{
			id: 35,
			name: 'Comedy',
		},
		{
			id: 80,
			name: 'Crime',
		},
		{
			id: 99,
			name: 'Documentary',
		},
		{
			id: 18,
			name: 'Drama',
		},
		{
			id: 10751,
			name: 'Family',
		},
		{
			id: 10762,
			name: 'Kids',
		},
		{
			id: 9648,
			name: 'Mystery',
		},
		{
			id: 10763,
			name: 'News',
		},
		{
			id: 10764,
			name: 'Reality',
		},
		{
			id: 10765,
			name: 'Sci-Fi & Fantasy',
		},
		{
			id: 10766,
			name: 'Soap',
		},
		{
			id: 10767,
			name: 'Talk',
		},
		{
			id: 10768,
			name: 'War & Politics',
		},
		{
			id: 37,
			name: 'Western',
		},
	],
};

/**
 * Media(movie/tv) group keys.
 *
 * @type {object}
 */
export const MEDIA_GROUP_KEYS = {
	movie: ['popular', 'top_rated', 'upcoming', 'now_playing'],
	tv: ['popular', 'top_rated', 'upcoming', 'airing_today', 'on_the_air'],
};

/**
 * Media(movie/tv) group filter keys.
 *
 * @type {array}
 */
export const MEDIA_GROUP_FILTER_KEYS = [
	'sort',
	'certification',
	'genres',
	'language',
	'minRating',
	'maxRating',
	'releaseYearFrom',
	'releaseYearUntil',
];

/**
 * List of the departments used in TMDB.
 */
export const LIST_OF_DEPARTMENTS = [
	{ production: 'production' },
	{ directing: 'directing' },
	{ writing: 'writing' },
	{ editing: 'editing' },
	{ sound: 'sound' },
	{ art: 'art' },
	{ visualEffects: 'visual effects' },
	{ costumeMakeUp: 'costume & make-up' },
	{ lighting: 'lighting' },
	{ camera: 'camera' },
	{ crew: 'crew' },
];

/**
 * List of the social media URLs.
 */
export const SOCIAL_MEDIA_URLS = {
	facebook: 'https://www.facebook.com',
	instagram: 'https://www.instagram.com',
	tiktok: 'https://www.tiktok.com',
	twitter: 'https://twitter.com',
	youtube: 'https://www.youtube.com',
};
