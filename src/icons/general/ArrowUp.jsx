import { ArrowUpIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowUp icon.
 *
 * @return {Element} The ArrowUp icon.
 */
const ArrowUp = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowUpIcon {...props} />
	</span>
);

export default ArrowUp;
