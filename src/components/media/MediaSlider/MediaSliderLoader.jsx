import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the MediaSliderLoader component.
 *
 * @return {Element} The MediaSliderLoader component.
 */
const MediaSliderLoader = ({ orientation }) => {
	/** ClassNames. */
	const classNames = cx(styles.media_slider_loader, {
		[styles.landscape]: orientation === 'landscape',
	});

	return (
		<div className={classNames}>
			<div className={styles.media_slider_loader_grid}>
				{[...Array(8).keys()].map((idx) => (
					<span key={idx} className={styles.media_slider_loader_grid_item} />
				))}
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
MediaSliderLoader.defaultProps = {
	orientation: 'portrait',
};

/**
 * Prop Types.
 */
MediaSliderLoader.propTypes = {
	orientation: PropTypes.oneOf(['portrait', 'landscape']),
};

export default MediaSliderLoader;
