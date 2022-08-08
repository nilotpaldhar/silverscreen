import PropTypes from 'prop-types';
import NextImage from 'next/image';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Image component.
 *
 * @return {Element} The Image component.
 */
const Image = ({ src, alt, placeholder, layout, className, ...props }) => {
	/** Image config. */
	const conf = {
		...props,
		src,
		alt,
		placeholder,
		layout,
		className,
	};

	return (
		<div className={cx(styles.image, 'img-wrapper')}>
			<NextImage {...conf} />
		</div>
	);
};

/**
 * Default Props.
 */
Image.defaultProps = {
	placeholder: 'empty',
	layout: 'intrinsic',
	className: '',
};

/**
 * Prop Types.
 */
Image.propTypes = {
	src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	alt: PropTypes.string.isRequired,
	placeholder: PropTypes.oneOf(['empty', 'blur']),
	layout: PropTypes.oneOf(['fixed', 'intrinsic', 'responsive', 'fill']),
	className: PropTypes.string,
};

export default Image;
