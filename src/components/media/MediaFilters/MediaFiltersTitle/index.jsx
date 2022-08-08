import PropTypes from 'prop-types';
import { Close } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersTitle component.
 *
 * @return {Element} The MediaFiltersTitle component.
 */
const MediaFiltersTitle = ({ title, onReset }) => (
	<div className={styles.media_filters_title}>
		<div className={styles.title}>{title}</div>
		<button type="button" className={styles.reset_btn} onClick={onReset}>
			<Close />
			<span>Reset</span>
		</button>
	</div>
);

/**
 * Default Props.
 */
MediaFiltersTitle.defaultProps = {
	title: 'Default Title',
	onReset: () => {},
};

/**
 * Prop Types.
 */
MediaFiltersTitle.propTypes = {
	title: PropTypes.node,
	onReset: PropTypes.func,
};

export default MediaFiltersTitle;
