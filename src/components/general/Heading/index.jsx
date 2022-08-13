import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Heading component.
 *
 * @return {Element} The Heading component.
 */
const Heading = ({ align, children, ...props }) => {
	/** ClassNames. */
	const classNames = cx(styles.heading, {
		[styles.left]: align === 'left',
		[styles.right]: align === 'right',
		[styles.center]: align === 'center',
	});

	return (
		<div className={classNames} {...props}>
			<h1>{children}</h1>
		</div>
	);
};

/**
 * Default Props.
 */
Heading.defaultProps = {
	align: 'left',
	children: '',
};

/**
 * Prop Types.
 */
Heading.propTypes = {
	align: PropTypes.oneOf(['left', 'right', 'center']),
	children: PropTypes.node,
};

export default Heading;
