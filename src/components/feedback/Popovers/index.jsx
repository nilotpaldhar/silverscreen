import { useState } from 'react';
import PropTypes from 'prop-types';
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import cx from 'classnames';
import { ChevronUp, ChevronDown } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the Popovers component.
 *
 * @return {Element} The Popovers component.
 */
const Popovers = ({ label, selected, children }) => {
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);

	/** Popper modifiers. */
	const modifiers = [
		{ name: 'offset', options: { offset: [0, 12] } },
		{ name: 'arrow', options: { element: arrowElement, padding: 5 } },
	];

	/** Setup popper-react. */
	const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers,
	});

	/** Popovers button class names. */
	const btnClassNames = cx(styles.popovers_btn, { [styles.selected]: selected });

	/** Popovers body/panel config. */
	const bodyConf = {
		className: styles.popovers_body,
		ref: setPopperElement,
		style: popperStyles.popper,
		...attributes.popper,
	};

	/** Popovers arrow config. */
	const arrowConf = {
		ref: setArrowElement,
		style: popperStyles.arrow,
		className: styles.popovers_arrow,
	};

	return (
		<Popover className={styles.popovers}>
			{({ open }) => (
				<>
					<Popover.Button className={btnClassNames} ref={setReferenceElement}>
						<span>{label}</span>
						{open ? <ChevronUp /> : <ChevronDown />}
					</Popover.Button>
					<Popover.Overlay className={styles.popovers_overlay} />
					<Popover.Panel {...bodyConf}>
						<div {...arrowConf} />
						{children}
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
};

/**
 * Default Props.
 */
Popovers.defaultProps = {
	label: 'Popover Label',
	selected: false,
	children: '',
};

/**
 * Prop Types.
 */
Popovers.propTypes = {
	label: PropTypes.node,
	selected: PropTypes.bool,
	children: PropTypes.node,
};

export default Popovers;
