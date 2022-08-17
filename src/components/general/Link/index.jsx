import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

/**
 * Render the Link component.
 *
 * @return {Element} The Link component.
 */
const Link = forwardRef((props, ref) => {
	const { href, children, className, newWindow = false, ...rest } = props;

	/** Link config */
	const linkConf = {
		ref,
		className,
		target: newWindow ? '_blank' : undefined,
		rel: newWindow ? 'noopener noreferrer' : undefined,
		...rest,
	};

	return (
		<NextLink href={href} passHref>
			<a {...linkConf}>{children}</a>
		</NextLink>
	);
});

/**
 * Default Props.
 */
Link.defaultProps = {
	className: '',
	children: '',
	newWindow: false,
};

/**
 * Prop Types.
 */
Link.propTypes = {
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
	newWindow: PropTypes.bool,
};

export default Link;
