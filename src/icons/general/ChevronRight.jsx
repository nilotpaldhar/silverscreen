import { ChevronRightIcon } from '@heroicons/react/outline';

/**
 * Render the ChevronRight icon.
 *
 * @return {Element} The ChevronRight icon.
 */
const ChevronRight = ({ ...props }) => (
	<span className="icon" role="img">
		<ChevronRightIcon {...props} />
	</span>
);

export default ChevronRight;
