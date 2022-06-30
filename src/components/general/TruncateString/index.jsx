import PropTypes from 'prop-types';
import { truncateStr } from '@utils';

/**
 * Render the TruncateString Component.
 *
 * @returns {Element} TruncateString Component.
 */
const TruncateString = ({ text, maxLength, ...props }) => (
	<span {...props}>{truncateStr(text, maxLength)}</span>
);

/**
 * Default Props
 */
TruncateString.defaultProps = {
	text: '',
	maxLength: 50,
};

/**
 * PropTypes
 */
TruncateString.propTypes = {
	text: PropTypes.string,
	maxLength: PropTypes.number,
};

export default TruncateString;
