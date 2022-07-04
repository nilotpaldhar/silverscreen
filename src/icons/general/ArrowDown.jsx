import { ArrowDownIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowDown icon.
 *
 * @return {Element} The ArrowDown icon.
 */
const ArrowDown = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowDownIcon {...props} />
	</span>
);

export default ArrowDown;
