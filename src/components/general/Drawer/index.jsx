import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEffect } from 'react';
import styles from './styles.module.scss';

/**
 * Render the Drawer component.
 *
 * @return {Element} The Drawer component.
 */
const Drawer = ({ open, onClose, className, children, ...props }) => {
	/** Drawer ClassNames. */
	const drawerClassNames = cx(styles.drawer, {
		[styles.open]: open,
		[styles.close]: !open,
	});

	useEffect(() => {
		/** Disable background scrolling when drawer is open. */
		if (open) {
			document.body.style.overflow = 'hidden';
		}

		/** Enable background scrolling when drawer is close. */
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	/** Content ClassNames. */
	const contentClassNames = cx(styles.drawer_content, className);

	return (
		<div className={drawerClassNames}>
			<div className={styles.drawer_body}>
				<div className={contentClassNames} {...props}>
					{children}
				</div>
			</div>
			<div role="presentation" className={styles.drawer_close} onClick={onClose} />
		</div>
	);
};

/**
 * Default Props.
 */
Drawer.defaultProps = {
	open: false,
	onClose: () => {},
	className: '',
	children: '',
};

/**
 * Prop Types.
 */
Drawer.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Drawer;
