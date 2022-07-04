import { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Link, VisuallyHidden } from '@components/general';
import { Menu } from '@icons';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import MenuDisclosure from './MenuDisclosure';
import styles from './styles.module.scss';

/**
 * Render the MobileMenu component.
 *
 * @return {Element} The MobileMenu component.
 */
const MobileMenu = ({ menus, btnClassName, ...props }) => {
	const [open, setOpen] = useState(false);

	/** Open mobile menu. */
	const handleOpen = () => {
		setOpen(true);
	};

	/** Close mobile menu. */
	const handleClose = () => {
		setOpen(false);
	};

	/** Button config. */
	const btnConf = {
		onClick: handleOpen,
		className: cx(styles.mobile_menu_toggle, btnClassName),
	};

	/** Drawer config. */
	const drawerConf = {
		open,
		onClose: handleClose,
		className: styles.mobile_menu_drawer,
	};

	return (
		<div className={styles.mobile_menu} {...props}>
			<button type="button" {...btnConf}>
				<Menu />
				<VisuallyHidden>Toggle Menu</VisuallyHidden>
			</button>
			<Drawer {...drawerConf}>
				<nav className={styles.mobile_menu_nav}>
					<ul>
						{menus.map((menu) => (
							<li key={menu?.id}>
								{isEmpty(menu?.submenus) ? (
									<Link href={menu?.href} className={styles.mobile_menu_nav_link}>
										{menu?.label}
									</Link>
								) : (
									<MenuDisclosure label={menu?.label} items={menu?.submenus} />
								)}
							</li>
						))}
					</ul>
				</nav>
			</Drawer>
		</div>
	);
};

/**
 * Default Props.
 */
MobileMenu.defaultProps = {
	menus: [],
	btnClassName: '',
};

/**
 * Prop Types.
 */
MobileMenu.propTypes = {
	menus: PropTypes.arrayOf(PropTypes.shape({})),
	btnClassName: PropTypes.string,
};

export default MobileMenu;
