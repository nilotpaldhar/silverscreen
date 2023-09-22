import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useWatchlist } from '@context/watchlistContext';

import BookmarkIcon from '@icons/general/Bookmark';
import BookmarkSolidIcon from '@icons/general/BookmarkSolid';

import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the MediaCardRating component.
 *
 * @return {Element} The MediaCardRating component.
 */
const MediaCardWatchlist = ({ id, type, title }) => {
	const { toggleWatchlist, isBookmarked } = useWatchlist();
	const bookmarked = isBookmarked(id);

	const handleClick = () => {
		if (bookmarked) {
			toast.success(`${title} removed from watchlist`);
		} else {
			toast.success(`${title} added to watchlist`);
		}
		toggleWatchlist({ id, type });
	};

	return (
		<div
			className={cx(styles.media_card_watchlist, {
				[styles.active]: bookmarked,
			})}
		>
			<button type="button" onClick={handleClick}>
				{bookmarked ? <BookmarkSolidIcon /> : <BookmarkIcon />}
				<span>{bookmarked ? 'Remove From Watchlist' : 'Add To Watchlist'}</span>
			</button>
		</div>
	);
};

/**
 * Default Props.
 */
MediaCardWatchlist.defaultProps = {};

/**
 * Prop Types.
 */
MediaCardWatchlist.propTypes = {
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default MediaCardWatchlist;
