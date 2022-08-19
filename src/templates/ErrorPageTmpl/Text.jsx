import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Render the ErrorPageText component.
 *
 * @return {Element} The ErrorPageText component.
 */
const ErrorPageText = ({ children, ...props }) => (
	<div className={styles.error_page_tmpl_text} {...props}>
		<p>{children}</p>
	</div>
);

/**
 * Default Props.
 */
ErrorPageText.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
ErrorPageText.propTypes = {
	children: PropTypes.node,
};

export default ErrorPageText;
