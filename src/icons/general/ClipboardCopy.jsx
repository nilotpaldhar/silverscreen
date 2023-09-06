import { ClipboardCopyIcon } from '@heroicons/react/outline';

/**
 * Render the ClipboardCopy icon.
 *
 * @return {Element} The ClipboardCopy icon.
 */
const ClipboardCopy = ({ ...props }) => (
	<span className="icon" role="img">
		<ClipboardCopyIcon {...props} />
	</span>
);

export default ClipboardCopy;
