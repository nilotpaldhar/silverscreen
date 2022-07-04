import PropTypes from 'prop-types';
import NextBreadcrumb from 'nextjs-breadcrumbs';
import { Container } from '@components/general';
import { ChevronRight, Home } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the Breadcrumb component.
 *
 * @return {Element} The Breadcrumb component.
 */
const Breadcrumb = ({ heading }) => {
	/** Breadcrumb background image. */
	const bgImg = { backgroundImage: 'url("/breadcrumb-bg.jpg")' };

	/** Render breadcrumb label. */
	const renderLabel = (title) => {
		if (title.toLowerCase() === 'home') {
			return (
				<>
					<Home />
					{title}
				</>
			);
		}

		return (
			<>
				<ChevronRight />
				{title}
			</>
		);
	};

	return (
		<div className={styles.breadcrumb} style={bgImg}>
			<Container>
				<div className={styles.breadcrumb_content}>
					<h1 className={styles.breadcrumb_heading}>{heading}</h1>
					<NextBreadcrumb
						containerClassName={styles.breadcrumb_links}
						transformLabel={renderLabel}
						activeItemClassName={styles.active}
					/>
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
};

/**
 * Prop Types.
 */
Breadcrumb.propTypes = {
	heading: PropTypes.string,
};

export default Breadcrumb;
