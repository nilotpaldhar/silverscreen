import { ShareIcon } from '@heroicons/react/solid';

/**
 * Render the Share icon.
 *
 * @return {Element} The Share icon.
 */
const Share = ({ ...props }) => (
	<span className="icon" role="img">
		<ShareIcon {...props} />
	</span>
);

export default Share;
