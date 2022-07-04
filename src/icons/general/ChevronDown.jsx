import { ChevronDownIcon } from '@heroicons/react/outline';

/**
 * Render the ChevronDown icon.
 *
 * @return {Element} The ChevronDown icon.
 */
const ChevronDown = ({ ...props }) => (
	<span className="icon" role="img">
		<ChevronDownIcon {...props} />
	</span>
);

export default ChevronDown;
