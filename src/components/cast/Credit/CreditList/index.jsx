import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../styles.module.scss';

/**
 * Render the CreditList component.
 *
 * @return {Element} The CreditList component.
 */
const CreditList = ({ children, className }) => (
	<ul className={cx(styles.credit_list, className)}>{children}</ul>
);

/**
 * Default Props.
 */
CreditList.defaultProps = {
	children: '',
	className: '',
};

/**
 * Prop Types.
 */
CreditList.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default CreditList;
