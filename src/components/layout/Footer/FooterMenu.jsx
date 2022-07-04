import { Link } from '@components/general';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './styles.module.scss';

/**
 * Render the FooterMenu component.
 *
 * @return {Element} The FooterMenu component.
 */
const FooterMenu = ({ menus }) => (
	<nav className={styles.footer_menu}>
		<ul>
			{menus.map((menu) => (
				<li key={menu.id}>
					<Link href={menu.href}>{menu.label}</Link>
				</li>
			))}
		</ul>
	</nav>
);

/**
 * Default Props.
 */
FooterMenu.defaultProps = {
	menus: [
		{
			id: uuid(),
			label: 'About us',
			href: '/',
		},
		{
			id: uuid(),
			label: 'Terms of use',
			href: '/',
		},
		{
			id: uuid(),
			label: 'Privacy policy',
			href: '/',
		},
		{
			id: uuid(),
			label: 'FAQ',
			href: '/',
		},
		{
			id: uuid(),
			label: 'Feedback',
			href: '/',
		},
		{
			id: uuid(),
			label: 'Careers',
			href: '/',
		},
	],
};

/**
 * Prop Types.
 */
FooterMenu.propTypes = {
	menus: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FooterMenu;
