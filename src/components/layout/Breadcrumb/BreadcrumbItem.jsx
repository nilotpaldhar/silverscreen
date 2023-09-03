import PropTypes from 'prop-types';

import Link from '@components/general/Link';
import ChevronRightIcon from '@icons/general/ChevronRight';

import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the BreadcrumbItem component.
 *
 * @return {Element} The BreadcrumbItem component.
 */
const BreadcrumbItem = ({ label, href, icon: Icon, isLast, className, ...props }) => {
	const content = (
		<>
			{Icon && <Icon />}
			<span>{label}</span>
		</>
	);

	return (
		<li
			className={cx(
				styles.breadcrumb_item,
				{
					[styles.breadcrumb_item_active]: isLast,
				},
				className
			)}
			{...props}
		>
			{!isLast && href ? (
				<>
					<Link href={href}>{content}</Link>
					<ChevronRightIcon />
				</>
			) : (
				<span>{content}</span>
			)}
		</li>
	);
};

/**
 * Default Props.
 */
BreadcrumbItem.defaultProps = {
	href: null,
	icon: null,
	isLast: false,
	className: '',
};

/**
 * Prop Types.
 */
BreadcrumbItem.propTypes = {
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
	icon: PropTypes.elementType,
	isLast: PropTypes.bool,
	className: PropTypes.string,
};

export default BreadcrumbItem;
