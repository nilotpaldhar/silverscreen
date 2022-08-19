import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Render the ErrorPageHeading component.
 *
 * @return {Element} The ErrorPageHeading component.
 */
const ErrorPageHeading = ({ children, ...props }) => (
	<div className={styles.error_page_tmpl_heading} {...props}>
		<h1>{children}</h1>
	</div>
);

/**
 * Default Props.
 */
ErrorPageHeading.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
ErrorPageHeading.propTypes = {
	children: PropTypes.node,
};

export default ErrorPageHeading;
