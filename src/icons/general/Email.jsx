import { MailIcon } from '@heroicons/react/solid';

/**
 * Render the Email icon.
 *
 * @return {Element} The Email icon.
 */
const Email = ({ ...props }) => (
	<span className="icon" role="img">
		<MailIcon {...props} />
	</span>
);

export default Email;
