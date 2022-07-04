import { StarIcon } from '@heroicons/react/solid';

/**
 * Render the StarFilled icon.
 *
 * @return {Element} The StarFilled icon.
 */
const StarFilled = ({ ...props }) => (
	<span className="icon" role="img">
		<StarIcon {...props} />
	</span>
);

export default StarFilled;
