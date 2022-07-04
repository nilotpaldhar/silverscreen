import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { Link } from '@components/general';
import { ChevronUp, ChevronDown } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MenuDisclosure component.
 *
 * @return {Element} The MenuDisclosure component.
 */
const MenuDisclosure = ({ label, items }) => (
	<Disclosure as="div" className={styles.menu_disclosure}>
		{({ open }) => (
			<>
				<Disclosure.Button className={styles.menu_disclosure_btn}>
					<span>{label}</span>
					{open ? <ChevronUp /> : <ChevronDown />}
				</Disclosure.Button>
				<Disclosure.Panel className={styles.menu_disclosure_panel}>
					{items.map((item) => (
						<Link key={item?.id} href={item?.href}>
							{item?.label}
						</Link>
					))}
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
);

/**
 * Default Props.
 */
MenuDisclosure.defaultProps = {
	items: [],
};

/**
 * Prop Types.
 */
MenuDisclosure.propTypes = {
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MenuDisclosure;
