import { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

/** Media Player Context. */
export const MediaPlayerContext = createContext();

/** Media Player Reducer. */
export const mediaPlayerReducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_PLAYER': {
			return { open: true, videoKey: action.payload };
		}
		case 'CLOSE_PLAYER': {
			return { open: false, videoKey: null };
		}
		default: {
			return state;
		}
	}
};

/** Media Player Context Provider. */
export const MediaPlayerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mediaPlayerReducer, { open: false, videoKey: null });
	const value = useMemo(() => ({ state, dispatch }), [state]);
	return <MediaPlayerContext.Provider value={value}>{children}</MediaPlayerContext.Provider>;
};

/** Media Player Hook. */
export const useMediaPlayer = () => {
	const context = useContext(MediaPlayerContext);
	if (typeof context === 'undefined') {
		throw new Error('useMediaPlayerContext must be used within a MediaPlayerProvider');
	}
	return context;
};

/** Prop Types. */
MediaPlayerProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MediaPlayerProvider;
