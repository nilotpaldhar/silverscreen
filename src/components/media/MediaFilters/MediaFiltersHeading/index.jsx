import PropTypes from 'prop-types';
import { Filter } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersHeading component.
 *
 * @return {Element} The MediaFiltersHeading component.
 */
const MediaFiltersHeading = ({ children, ...props }) => (
	<div className={styles.media_filters_heading} {...props}>
		<Filter />
		<span className={styles.text}>{children}</span>
	</div>
);

/**
 * Default Props.
 */
MediaFiltersHeading.defaultProps = {
	children: 'Filters',
};

/**
 * Prop Types.
 */
MediaFiltersHeading.propTypes = {
	children: PropTypes.node,
};

export default MediaFiltersHeading;
