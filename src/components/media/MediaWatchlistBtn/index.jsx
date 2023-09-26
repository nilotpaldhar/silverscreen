import PropTypes from 'prop-types';

import BookmarkIcon from '@icons/general/Bookmark';
import BookmarkSolidIcon from '@icons/general/BookmarkSolid';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useWatchlist } from '@context/watchlistContext';

import cx from 'classnames';

/**
 * Render the MediaWatchlistBtn component.
 *
 * @return {Element} The MediaWatchlistBtn component.
 */
const MediaWatchlistBtn = ({ id, type, title, ...props }) => {
	const [domLoaded, setDomLoaded] = useState(false);
	const { toggleWatchlist, isBookmarked } = useWatchlist();
	const bookmarked = isBookmarked(id);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	const handleClick = () => {
		if (bookmarked) {
			toast.success(`${title} removed from watchlist`);
		} else {
			toast.success(`${title} added to watchlist`);
		}
		toggleWatchlist({ id, type });
	};

	return domLoaded ? (
		<button
			type="button"
			onClick={handleClick}
			{...props}
			className={cx({ '!bg-yellow-500 !bg-opacity-80': bookmarked })}
		>
			{bookmarked ? <BookmarkSolidIcon /> : <BookmarkIcon />}
			<span>{bookmarked ? 'Remove From Watchlist' : 'Add To Watchlist'}</span>
		</button>
	) : null;
};

/**
 * Prop Types.
 */
MediaWatchlistBtn.propTypes = {
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default MediaWatchlistBtn;
