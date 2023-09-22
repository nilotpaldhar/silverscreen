import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from '@hooks/useLocalStorage';

/** Watchlist Context. */
export const WatchlistContext = createContext();

/** Watchlist Context Provider. */
export const WatchlistProvider = ({ children }) => {
	const [localWatchlist, setLocalWatchlist] = useLocalStorage('watchlist', []);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [watchlist, setWatchlist] = useState(null);

	/** Check if media is already added to watchlist */
	const isBookmarked = useCallback(
		(id) => localWatchlist?.some((m) => m?.id === id),
		[localWatchlist]
	);

	/** Fetch watchlist */
	const fetchWatchlist = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const res = await axios.post(`/api/watchlist`, {
				watchlist: localWatchlist,
			});
			setWatchlist(res?.data);
		} catch (err) {
			setError('Failed to fetch watchlist');
		} finally {
			setLoading(false);
		}
	}, [localWatchlist]);

	/** Add or remove item from watchlist */
	const toggleWatchlist = useCallback(
		(payload) => {
			setLocalWatchlist((prev) => {
				const alreadyAdded = isBookmarked(payload.id);
				if (alreadyAdded) return prev.filter((m) => m.id !== payload.id);
				return [...prev, payload];
			});
		},
		[setLocalWatchlist, isBookmarked]
	);

	useEffect(() => {
		fetchWatchlist();
	}, [fetchWatchlist]);

	const value = useMemo(
		() => ({
			localWatchlist,
			loading,
			error,
			watchlist,
			toggleWatchlist,
			isBookmarked,
		}),
		[localWatchlist, toggleWatchlist, isBookmarked, loading, error, watchlist]
	);

	return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
};

/** Media Player Hook. */
export const useWatchlist = () => {
	const context = useContext(WatchlistContext);
	if (typeof context === 'undefined') {
		throw new Error('useWatchlist must be used within a WatchlistProvider');
	}
	return context;
};

/** Prop Types. */
WatchlistProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default WatchlistProvider;
