import { ArrowNarrowUpIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowNarrowUp icon.
 *
 * @return {Element} The ArrowNarrowUp icon.
 */
const ArrowNarrowUp = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowNarrowUpIcon {...props} />
	</span>
);

export default ArrowNarrowUp;
