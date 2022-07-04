import PropTypes from 'prop-types';
import { Link } from '@components/general';
import { Loading } from '@icons';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Button component.
 *
 * @return {Element} The Button component.
 */
const Button = ({
	htmlType,
	shape,
	className,
	children,
	icon: Icon,
	loading,
	block,
	link,
	href,
	...props
}) => {
	const classNames = cx(styles.button, className, {
		[styles.icon]: Boolean(Icon),
		[styles.circle]: shape === 'circle',
		[styles.loading]: loading,
		[styles.block]: block,
	});

	const config = { ...props, className: classNames };

	if (link) {
		return (
			<Link {...config} href={href}>
				{loading && <Loading className="animate-spin" />}
				{Icon && !loading && Icon}
				{children && <span>{children}</span>}
			</Link>
		);
	}

	return (
		// eslint-disable-next-line react/button-has-type
		<button {...config} type={htmlType}>
			{loading && <Loading className="animate-spin" />}
			{Icon && !loading && Icon}
			{children && <span>{children}</span>}
		</button>
	);
};

/**
 * Default Props.
 */
Button.defaultProps = {
	htmlType: 'button',
	shape: 'default',
	className: '',
	children: '',
	icon: '',
	loading: false,
	block: false,
	link: false,
	href: '#',
};

/**
 * Prop Types.
 */
Button.propTypes = {
	htmlType: PropTypes.string,
	shape: PropTypes.oneOf(['default', 'circle']),
	className: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.node,
	loading: PropTypes.bool,
	block: PropTypes.bool,
	link: PropTypes.bool,
	href: PropTypes.string,
};

export default Button;
