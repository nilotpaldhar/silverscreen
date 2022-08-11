import { Container, Logo, VisuallyHidden } from '@components/general';
import { MobileMenu } from '@components/layout';
import { Search } from '@icons';
import menus from '@public/misc/menus.json';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';
import styles from './styles.module.scss';

/**
 * Render the Navbar component.
 *
 * @return {Element} The Navbar component.
 */
const Navbar = () => (
	<header className={styles.navbar}>
		<Container className="h-full">
			<div className={styles.navbar_body}>
				<MobileMenu menus={menus} btnClassName={styles.toggle_m_menu} />
				<Logo />
				<NavMenu menus={menus} />
				<NavSearch />
				<button className={`${styles.toggle_btn} ${styles.toggle_search}`} type="button">
					<Search />
					<VisuallyHidden>Toggle Search</VisuallyHidden>
				</button>
			</div>
		</Container>
	</header>
);

export default Navbar;
