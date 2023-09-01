import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../styles.module.scss';

/**
 * Render the CreditTitle component.
 *
 * @return {Element} The CreditTitle component.
 */
const CreditTitle = ({ as: Component, children, className, ...props }) => (
	<Component className={cx(styles.credit_title, className)} {...props}>
		{children}
	</Component>
);

/**
 * Default Props.
 */
CreditTitle.defaultProps = {
	as: 'h2',
	className: '',
	children: '',
};

/**
 * Prop Types.
 */
CreditTitle.propTypes = {
	as: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default CreditTitle;
