import { CgFacebook } from 'react-icons/cg';

/**
 * Render the Facebook icon.
 *
 * @return {Element} The Facebook icon.
 */
const Facebook = ({ ...props }) => (
	<span className="icon">
		<CgFacebook {...props} />
	</span>
);

export default Facebook;
