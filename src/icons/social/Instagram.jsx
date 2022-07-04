import { CgInstagram } from 'react-icons/cg';

/**
 * Render the Instagram icon.
 *
 * @return {Element} The Instagram icon.
 */
const Instagram = ({ ...props }) => (
	<span className="icon">
		<CgInstagram {...props} />
	</span>
);

export default Instagram;
