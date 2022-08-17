import { Container, Logo, VisuallyHidden } from '@components/general';
import { MobileMenu } from '@components/layout';
import { Search } from '@icons';
import menus from '@public/misc/menus.json';
import { useState } from 'react';
import NavMenu from './NavMenu';
import NavSearch from './NavSearch';
import styles from './styles.module.scss';

/**
 * Render the Navbar component.
 *
 * @return {Element} The Navbar component.
 */
const Navbar = () => {
	const [open, setOpen] = useState(false);

	/** Open Searchbar. */
	const openSearchbar = () => {
		setOpen(true);
	};

	/** Close Searchbar. */
	const closeSearchbar = () => {
		setOpen(false);
	};

	return (
		<header className={styles.navbar}>
			{open ? (
				<div className={styles.navbar_body}>
					<NavSearch onReset={closeSearchbar} borderLess showResetBtn />
				</div>
			) : (
				<Container className="h-full">
					<div className={styles.navbar_body}>
						<MobileMenu menus={menus} btnClassName={styles.toggle_m_menu} />
						<Logo />
						<NavMenu menus={menus} />
						<NavSearch desktop />
						<button
							type="button"
							onClick={openSearchbar}
							className={`${styles.toggle_btn} ${styles.toggle_search}`}
						>
							<Search />
							<VisuallyHidden>Open Searchbar</VisuallyHidden>
						</button>
					</div>
				</Container>
			)}
		</header>
	);
};

export default Navbar;
