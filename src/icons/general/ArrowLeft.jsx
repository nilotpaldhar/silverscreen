import { ArrowLeftIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowLeft icon.
 *
 * @return {Element} The ArrowLeft icon.
 */
const ArrowLeft = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowLeftIcon {...props} />
	</span>
);

export default ArrowLeft;
