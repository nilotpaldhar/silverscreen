import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Heading component.
 *
 * @return {Element} The Heading component.
 */
const Heading = ({ as: Component, align, children, ...props }) => {
	/** ClassNames. */
	const classNames = cx(styles.heading, {
		[styles.left]: align === 'left',
		[styles.right]: align === 'right',
		[styles.center]: align === 'center',
	});

	return (
		<div className={classNames} {...props}>
			<Component>{children}</Component>
		</div>
	);
};

/**
 * Default Props.
 */
Heading.defaultProps = {
	as: 'h1',
	align: 'left',
	children: '',
};

/**
 * Prop Types.
 */
Heading.propTypes = {
	as: PropTypes.string,
	align: PropTypes.oneOf(['left', 'right', 'center']),
	children: PropTypes.node,
};

export default Heading;
