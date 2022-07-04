import { CgTwitter } from 'react-icons/cg';

/**
 * Render the Twitter icon.
 *
 * @return {Element} The Twitter icon.
 */
const Twitter = ({ ...props }) => (
	<span className="icon">
		<CgTwitter {...props} />
	</span>
);

export default Twitter;
