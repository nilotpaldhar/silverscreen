import { ChevronUpIcon } from '@heroicons/react/outline';

/**
 * Render the ChevronUp icon.
 *
 * @return {Element} The ChevronUp icon.
 */
const ChevronUp = ({ ...props }) => (
	<span className="icon" role="img">
		<ChevronUpIcon {...props} />
	</span>
);

export default ChevronUp;
