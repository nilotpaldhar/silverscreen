import PropTypes from 'prop-types';
import { Image } from '@components/general';
import placeholderPort from '@public/poster-placeholder.jpg';
import placeholderLand from '@public/backdrop-placeholder.jpg';

/**
 * Render the BlurImage component.
 *
 * @return {Element} The BlurImage component.
 */
const BlurImage = ({ className, orientation, ...props }) => {
	const placeholder = orientation === 'landscape' ? placeholderLand : placeholderPort;
	return <Image placeholder="blur" blurDataURL={placeholder?.blurDataURL} {...props} />;
};

/**
 * Default Props.
 */
BlurImage.defaultProps = {
	className: '',
	orientation: 'portrait',
};

/**
 * Prop Types.
 */
BlurImage.propTypes = {
	className: PropTypes.string,
	orientation: PropTypes.oneOf(['portrait', 'landscape']),
};

export default BlurImage;
