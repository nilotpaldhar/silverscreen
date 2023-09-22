import { BookmarkIcon } from '@heroicons/react/outline';

/**
 * Render the Bookmark icon.
 *
 * @return {Element} The Bookmark icon.
 */
const Bookmark = ({ ...props }) => (
	<span className="icon" role="img">
		<BookmarkIcon {...props} />
	</span>
);

export default Bookmark;
