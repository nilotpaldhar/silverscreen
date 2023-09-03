import PropTypes from 'prop-types';

import Container from '@components/general/Container';
import BreadcrumbItem from '@components/layout/Breadcrumb/BreadcrumbItem';

import { v4 as uuid } from 'uuid';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Breadcrumb component.
 *
 * @return {Element} The Breadcrumb component.
 */
const Breadcrumb = ({
	links,
	rootLabel,
	rootHref,
	rootIcon,
	omitRootLabel,
	className,
	...props
}) => {
	const linksWithId = links?.map((l) => ({ id: uuid(), ...l }));
	return (
		<nav className={cx(styles.breadcrumb, className)} aria-label="breadcrumb" {...props}>
			<Container fluidLarge={false}>
				<ol>
					{!omitRootLabel && (
						<BreadcrumbItem
							href={rootHref}
							label={rootLabel}
							icon={rootIcon}
							isLast={linksWithId.length === 0}
						/>
					)}
					{linksWithId?.map(({ id, href, label, icon }, index) => (
						<BreadcrumbItem
							key={id}
							href={href}
							label={label}
							icon={icon}
							isLast={index === linksWithId.length - 1}
						/>
					))}
				</ol>
			</Container>
		</nav>
	);
};

/**
 * Default Props.
 */
Breadcrumb.defaultProps = {
	links: [],
	rootLabel: 'Home',
	rootHref: '/',
	rootIcon: '',
	omitRootLabel: false,
	className: '',
};

/**
 * Prop Types.
 */
Breadcrumb.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			href: PropTypes.string,
			icon: PropTypes.elementType,
		})
	),
	rootLabel: PropTypes.string,
	rootHref: PropTypes.string,
	rootIcon: PropTypes.elementType,
	omitRootLabel: PropTypes.bool,
	className: PropTypes.string,
};

export default Breadcrumb;
