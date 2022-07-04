import { BsFillPlayFill } from 'react-icons/bs';

/**
 * Render the Play icon.
 *
 * @return {Element} The Play icon.
 */
const Play = ({ ...props }) => (
	<span className="icon" role="img">
		<BsFillPlayFill {...props} />
	</span>
);

export default Play;
