import PropTypes from 'prop-types';
import { Image } from '@components/general';
import placeholderPort from '@public/images/placeholders/poster.jpg';
import placeholderLand from '@public/images/placeholders/backdrop.jpg';

/**
 * Render the BlurImage component.
 *
 * @return {Element} The BlurImage component.
 */
const BlurImage = ({ orientation, ...props }) => {
	const placeholder = orientation === 'landscape' ? placeholderLand : placeholderPort;
	return <Image placeholder="blur" blurDataURL={placeholder?.blurDataURL} {...props} />;
};

/**
 * Default Props.
 */
BlurImage.defaultProps = {
	orientation: 'portrait',
};

/**
 * Prop Types.
 */
BlurImage.propTypes = {
	orientation: PropTypes.oneOf(['portrait', 'landscape']),
};

export default BlurImage;
