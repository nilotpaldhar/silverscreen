import { MenuAlt1Icon } from '@heroicons/react/outline';

/**
 * Render the Menu icon.
 *
 * @return {Element} The Menu icon.
 */
const Menu = ({ ...props }) => (
	<span className="icon" role="img">
		<MenuAlt1Icon {...props} />
	</span>
);

export default Menu;
