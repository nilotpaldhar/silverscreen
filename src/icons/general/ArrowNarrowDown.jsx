import { ArrowNarrowDownIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowNarrowDown icon.
 *
 * @return {Element} The ArrowNarrowDown icon.
 */
const ArrowNarrowDown = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowNarrowDownIcon {...props} />
	</span>
);

export default ArrowNarrowDown;
