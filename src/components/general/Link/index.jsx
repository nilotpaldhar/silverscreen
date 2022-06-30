import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cx from 'classnames';

/**
 * Render the Link component.
 *
 * @return {Element} The Link component.
 */
const Link = ({ href, children, className, activeClassName, newWindow = false, ...props }) => {
	const router = useRouter();

	/**
	 * Check link active state.
	 */
	const isActive = () => {
		/** Check "pathname" property. */
		if (router?.pathname === href) return true;

		/** Check "asPath" property if above condition is false. */
		if (router?.asPath === href) return true;

		return false;
	};

	/** Link className. */
	const classNames = cx(className, {
		[activeClassName]: isActive(),
	});

	/** Link config */
	const linkConf = {
		className: classNames,
		target: newWindow ? '_blank' : undefined,
		rel: newWindow ? 'noopener noreferrer' : undefined,
	};

	return (
		<NextLink href={href} passHref {...props}>
			<a {...linkConf}>{children}</a>
		</NextLink>
	);
};

/**
 * Default Props.
 */
Link.defaultProps = {
	className: '',
	activeClassName: '',
	children: '',
	newWindow: false,
};

/**
 * Prop Types.
 */
Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
	activeClassName: PropTypes.string,
	newWindow: PropTypes.bool,
};

export default Link;
