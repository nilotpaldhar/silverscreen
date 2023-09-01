import PropTypes from 'prop-types';
import CreditTitle from '@components/cast/Credit/CreditTitle';
import CreditList from '@components/cast/Credit/CreditList';
import CreditItem from '@components/cast/Credit/CreditItem';
import CreditDivider from '@components/cast/Credit/CreditDivider';

/**
 * Render the Credit component.
 *
 * @return {Element} The Credit component.
 */
const Credit = ({ children }) => <div>{children}</div>;

/**
 * Default Props.
 */
Credit.defaultProps = {
	children: '',
};

/**
 * Prop Types.
 */
Credit.propTypes = {
	children: PropTypes.node,
};

/** Credit Sub-Components. */
Credit.Title = CreditTitle;
Credit.List = CreditList;
Credit.Item = CreditItem;
Credit.Divider = CreditDivider;

export default Credit;
