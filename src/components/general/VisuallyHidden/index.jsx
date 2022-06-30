import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Render the VisuallyHidden component.
 *
 * @return {Element} The VisuallyHidden component.
 */
const VisuallyHidden = ({ children, ...props }) => (
	<span className={styles.visually_hidden} {...props}>
		{children}
	</span>
);

/**
 * Default Props.
 */
VisuallyHidden.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
VisuallyHidden.propTypes = {
	children: PropTypes.node,
};

export default VisuallyHidden;
