import { MenuIcon } from '@heroicons/react/outline';

/**
 * Render the Menu icon.
 *
 * @return {Element} The Menu icon.
 */
const Menu = ({ ...props }) => (
	<span className="icon" role="img">
		<MenuIcon {...props} />
	</span>
);

export default Menu;
