import { BsTiktok } from 'react-icons/bs';

/**
 * Render the Tiktok icon.
 *
 * @return {Element} The Tiktok icon.
 */
const Tiktok = ({ ...props }) => (
	<span className="icon">
		<BsTiktok {...props} />
	</span>
);

export default Tiktok;
