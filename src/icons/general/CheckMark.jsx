import { GiCheckMark } from 'react-icons/gi';

/**
 * Render the CheckMark icon.
 *
 * @return {Element} The CheckMark icon.
 */
const CheckMark = ({ ...props }) => (
	<span className="icon" role="img">
		<GiCheckMark {...props} />
	</span>
);

export default CheckMark;
