import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../styles.module.scss';

/**
 * Render the CreditDivider component.
 *
 * @return {Element} The CreditDivider component.
 */
const CreditDivider = ({ className }) => <div className={cx(styles.credit_divider, className)} />;

/**
 * Default Props.
 */
CreditDivider.defaultProps = {
	className: '',
};

/**
 * Prop Types.
 */
CreditDivider.propTypes = {
	className: PropTypes.string,
};

export default CreditDivider;
