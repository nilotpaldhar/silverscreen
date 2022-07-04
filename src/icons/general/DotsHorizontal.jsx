import { DotsHorizontalIcon } from '@heroicons/react/outline';

/**
 * Render the DotsHorizontal icon.
 *
 * @return {Element} The DotsHorizontal icon.
 */
const DotsHorizontal = ({ ...props }) => (
	<span className="icon" role="img">
		<DotsHorizontalIcon {...props} />
	</span>
);

export default DotsHorizontal;
