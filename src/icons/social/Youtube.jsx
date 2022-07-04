import { CgYoutube } from 'react-icons/cg';

/**
 * Render the Youtube icon.
 *
 * @return {Element} The Youtube icon.
 */
const Youtube = ({ ...props }) => (
	<span className="icon">
		<CgYoutube {...props} />
	</span>
);

export default Youtube;
