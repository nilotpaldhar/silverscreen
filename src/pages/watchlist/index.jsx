import Seo from '@components/general/Seo';
import WatchlistTmpl from '@templates/WatchlistTmpl';
import { useWatchlist } from '@context/watchlistContext';

/**
 * Render  the WatchlistPage component.
 *
 * @return {Element} The WatchlistPage component.
 */
const WatchlistPage = () => {
	const { loading, error, watchlist } = useWatchlist();
	const empty = !watchlist || (watchlist?.movies?.length === 0 && watchlist?.tv?.length === 0);

	return (
		<>
			<Seo title="My Watchlist" />
			<WatchlistTmpl
				empty={empty}
				error={error}
				collection={watchlist}
				loading={loading || (!loading && !error && !watchlist)}
			/>
		</>
	);
};

/**
 * Prop Types.
 */
WatchlistPage.propTypes = {};

export default WatchlistPage;
