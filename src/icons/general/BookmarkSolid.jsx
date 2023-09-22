import { BookmarkIcon } from '@heroicons/react/solid';

/**
 * Render the BookmarkSolid icon.
 *
 * @return {Element} The BookmarkSolid icon.
 */
const BookmarkSolid = ({ ...props }) => (
	<span className="icon" role="img">
		<BookmarkIcon {...props} />
	</span>
);

export default BookmarkSolid;
