import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Container component.
 *
 * @return {Element} The Container component.
 */
const Container = ({ children, fluid = false, className, ...props }) => {
	const classNames = cx(styles.container, className, {
		[styles.container_fluid]: fluid,
	});

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	);
};

/**
 * Default Props.
 */
Container.defaultProps = {
	fluid: false,
	children: '',
	className: '',
};

/**
 * Prop Types.
 */
Container.propTypes = {
	children: PropTypes.node,
	fluid: PropTypes.bool,
	className: PropTypes.string,
};

export default Container;
