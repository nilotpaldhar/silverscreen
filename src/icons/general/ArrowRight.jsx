import { ArrowRightIcon } from '@heroicons/react/outline';

/**
 * Render the ArrowRight icon.
 *
 * @return {Element} The ArrowRight icon.
 */
const ArrowRight = ({ ...props }) => (
	<span className="icon" role="img">
		<ArrowRightIcon {...props} />
	</span>
);

export default ArrowRight;
