import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import Slider from './index';

/**
 * Render the SliderDebounce component.
 *
 * @return {Element} The SliderDebounce component.
 */
const SliderDebounce = ({ delay, onChange, ...props }) => {
	/** Debounce onChange. */
	const debounceChange = debounce((value) => {
		onChange(value);
	}, delay);

	return <Slider onChange={debounceChange} {...props} />;
};

/**
 * Default Props.
 */
SliderDebounce.defaultProps = {
	delay: 500,
	onChange: () => {},
};

/**
 * Prop Types.
 */
SliderDebounce.propTypes = {
	delay: PropTypes.number,
	onChange: PropTypes.func,
};

export default SliderDebounce;
