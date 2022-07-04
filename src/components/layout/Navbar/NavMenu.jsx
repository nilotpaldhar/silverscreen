import PropTypes from 'prop-types';
import { Link } from '@components/general';
import { isEmpty } from 'lodash';
import MenuDropdown from './MenuDropdown';
import styles from './styles.module.scss';

/**
 * Render the NavMenu component.
 *
 * @return {Element} The NavMenu component.
 */
const NavMenu = ({ menus }) => (
	<nav className={styles.nav_menu}>
		<ul>
			{menus.map((menu) => (
				<li key={menu.id}>
					{isEmpty(menu?.submenus) ? (
						<Link href={menu.href} className={styles.nav_menu_link}>
							{menu.label}
						</Link>
					) : (
						<MenuDropdown label={menu?.label} items={menu?.submenus} />
					)}
				</li>
			))}
		</ul>
	</nav>
);

/**
 * Default Props.
 */
NavMenu.defaultProps = {
	menus: [],
};

/**
 * Prop Types.
 */
NavMenu.propTypes = {
	menus: PropTypes.arrayOf(PropTypes.shape({})),
};

export default NavMenu;
