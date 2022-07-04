import PropTypes from 'prop-types';
import { Image, Link } from '@components/general';
import logo from '@public/logo.svg';

/**
 * Render the Logo component.
 *
 * @return {Element} The Logo component.
 */
const Logo = ({ className, ...props }) => (
	<Link href="/" className={className} {...props}>
		<Image src={logo} alt="Logo" width={62} height={20} />
	</Link>
);

/**
 * Default Props.
 */
Logo.defaultProps = {
	className: '',
};

/**
 * Prop Types.
 */
Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;
