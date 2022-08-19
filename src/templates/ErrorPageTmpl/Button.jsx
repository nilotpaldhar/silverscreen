import PropTypes from 'prop-types';
import { Button } from '@components/general';
import styles from './styles.module.scss';

/**
 * Render the ErrorPageButton component.
 *
 * @return {Element} The ErrorPageButton component.
 */
const ErrorPageButton = ({ children, ...props }) => (
	<div className={styles.error_page_tmpl_btn}>
		<Button {...props}>{children}</Button>
	</div>
);

/**
 * Default Props.
 */
ErrorPageButton.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
ErrorPageButton.propTypes = {
	children: PropTypes.node,
};

export default ErrorPageButton;
