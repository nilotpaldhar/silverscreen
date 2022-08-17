import axios from 'axios';

/** Get TMDB base URL & access token. */
const tmdbBaseUrl = process.env.NEXT_PUBLIC_TMDB_API_URL;
const tmdbAccessToken = process.env.TMDB_ACCESS_TOKEN;

/** Create TMDB client. */
const tmdbClient = axios.create();

/** Add base URL. */
tmdbClient.defaults.baseURL = tmdbBaseUrl;

/** Add default headers & access token. */
tmdbClient.defaults.headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: tmdbAccessToken ? `Bearer ${tmdbAccessToken}` : '',
};

/** Add default request timeout (5 seconds). */
tmdbClient.defaults.timeout = 5000;

export default tmdbClient;
