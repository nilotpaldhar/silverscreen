import getMediaCollection from '@libs/tmdb/media/getMediaCollection';

/**
 * Watchlist Handler.
 */
const handler = async (req, res) => {
	const { watchlist } = req?.body || {};

	const watchlistMovie = watchlist?.filter((w) => w?.type === 'movie')?.map((w) => w?.id);
	const watchlistTv = watchlist?.filter((w) => w?.type === 'tv')?.map((w) => w?.id);

	/** Default error message. */
	const defaultMesg = 'Failed to fetch resource.';

	/** Validate request method. */
	if (req?.method !== 'POST') {
		res.status(500).json({
			message: defaultMesg,
			success: false,
		});
	}

	/** Fetch watchlist. */
	const [movies, tv] = await Promise.all([
		getMediaCollection(watchlistMovie, 'movie'),
		getMediaCollection(watchlistTv, 'tv'),
	]);

	res.status(200).json({ movies, tv });
};

export default handler;
