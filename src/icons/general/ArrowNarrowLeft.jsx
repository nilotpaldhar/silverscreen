import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowNarrowLeft icon.
 *
 * @return {Element} The ArrowNarrowLeft icon.
 */
const ArrowNarrowLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowNarrowLeftIcon {...props} />
	</span>
);

export default ArrowNarrowLeft;
