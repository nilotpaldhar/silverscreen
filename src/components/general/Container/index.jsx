import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Container component.
 *
 * @return {Element} The Container component.
 */
const Container = ({ children, fluidLarge, fluid, className, ...props }) => {
	const classNames = cx(styles.container, className, {
		[styles.container_fluid]: fluid,
		[styles.container_fluid_large]: fluidLarge,
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
	fluidLarge: true,
	children: '',
	className: '',
};

/**
 * Prop Types.
 */
Container.propTypes = {
	children: PropTypes.node,
	fluid: PropTypes.bool,
	fluidLarge: PropTypes.bool,
	className: PropTypes.string,
};

export default Container;
