import { ChevronLeftIcon } from '@heroicons/react/outline';

/**
 * Render the ChevronLeft icon.
 *
 * @return {Element} The ChevronLeft icon.
 */
const ChevronLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<ChevronLeftIcon {...props} />
	</span>
);

export default ChevronLeft;
