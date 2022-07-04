import PropTypes from 'prop-types';
import { Menu } from '@headlessui/react';
import { Link } from '@components/general';
import { ChevronDown } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MenuDropdown component.
 *
 * @return {Element} The MenuDropdown component.
 */
const MenuDropdown = ({ label, items }) => (
	<Menu as="div" className={styles.menu_dropdown}>
		<Menu.Button className={styles.menu_dropdown_btn}>
			<span>{label}</span>
			<ChevronDown />
		</Menu.Button>
		<Menu.Items className={styles.menu_dropdown_items}>
			{items.map((item) => (
				<Menu.Item key={item?.id} className={styles.menu_dropdown_item}>
					<Link href={item?.href}>{item?.label}</Link>
				</Menu.Item>
			))}
		</Menu.Items>
	</Menu>
);

/**
 * Default Props.
 */
MenuDropdown.defaultProps = {
	items: [],
};

/**
 * Prop Types.
 */
MenuDropdown.propTypes = {
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MenuDropdown;
