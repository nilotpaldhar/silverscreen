import PropTypes from 'prop-types';
import { Container, Image } from '@components/general';
import headerBg from '@public/images/backgrounds/header.webp';
import styles from './styles.module.scss';

/**
 * Render the Breadcrumb component.
 *
 * @return {Element} The Breadcrumb component.
 */
const Breadcrumb = ({ heading }) => {
	/** Image Config. */
	const imageConf = {
		layout: 'fill',
		priority: true,
		objectFit: 'cover',
		placeholder: 'blur',
		src: headerBg,
		orientation: 'landscape',
		objectPosition: 'center',
		alt: 'Header Background',
	};

	return (
		<div className={styles.breadcrumb}>
			<Image {...imageConf} />
			<Container>
				<div className={styles.breadcrumb_content}>
					<h1 className={styles.breadcrumb_heading}>{heading}</h1>
					{/* TODO: CREATE BREADCRUMB LINKS */}
				</div>
			</Container>
		</div>
	);
};

/**
 * Default Props.
 */
Breadcrumb.defaultProps = {
	heading: 'Default Heading',
	showBreadcrumb: true,
};

/**
 * Prop Types.
 */
Breadcrumb.propTypes = {
	heading: PropTypes.node,
	showBreadcrumb: PropTypes.bool,
};

export default Breadcrumb;
