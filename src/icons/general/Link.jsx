import { BsLink } from 'react-icons/bs';

/**
 * Render the Link icon.
 *
 * @return {Element} The Link icon.
 */
const Link = ({ ...props }) => (
	<span className="icon">
		<BsLink {...props} />
	</span>
);

export default Link;
