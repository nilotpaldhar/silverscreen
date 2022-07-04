import { XIcon } from '@heroicons/react/outline';

/**
 * Render the Close icon.
 *
 * @return {Element} The Close icon.
 */
const Close = ({ ...props }) => (
	<span className="icon" role="img">
		<XIcon {...props} />
	</span>
);

export default Close;
