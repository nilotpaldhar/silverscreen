import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Slider component.
 *
 * @return {Element} The Slider component.
 */
const Slider = ({
	className,
	labelClassName,
	range,
	min,
	max,
	defaultValue,
	step,
	onChange,
	...props
}) => {
	/** Slider Label ClassNames. */
	const labelClassNames = cx(styles.slider_label, labelClassName);

	/** Slider Config */
	const sliderConf = {
		...props,
		className: cx(styles.slider, className),
		range,
		min,
		max,
		defaultValue,
		step,
		onChange,
	};

	return (
		<div className={styles.slider}>
			<div className={labelClassNames}>{min}</div>
			<RCSlider {...sliderConf} />
			<div className={labelClassNames}>{max}</div>
		</div>
	);
};

/**
 * Default Props.
 */
Slider.defaultProps = {
	className: '',
	labelClassName: '',
	range: true,
	min: 0,
	max: 10,
	defaultValue: [0, 10],
	step: 0.1,
	onChange: () => {},
};

/**
 * Prop Types.
 */
Slider.propTypes = {
	className: PropTypes.string,
	labelClassName: PropTypes.string,
	range: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
	step: PropTypes.number,
	onChange: PropTypes.func,
};

export default Slider;
