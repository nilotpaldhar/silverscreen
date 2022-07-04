import { DotsVerticalIcon } from '@heroicons/react/outline';

/**
 * Render the DotsVertical icon.
 *
 * @return {Element} The DotsVertical icon.
 */
const DotsVertical = ({ ...props }) => (
	<span className="icon" role="img">
		<DotsVerticalIcon {...props} />
	</span>
);

export default DotsVertical;
