import PropTypes from 'prop-types';
import { Popovers } from '@components/feedback';
import MediaFiltersSort from './MediaFiltersSort';
import MediaFiltersReset from './MediaFiltersReset';
import MediaFiltersRating from './MediaFiltersRating';
import MediaFiltersDrawer from './MediaFiltersDrawer';
import MediaFiltersGenres from './MediaFiltersGenres';
import MediaFiltersHeading from './MediaFiltersHeading';
import MediaFiltersRelease from './MediaFiltersRelease';
import MediaFiltersLanguage from './MediaFiltersLanguage';
import MediaFiltersAgeRating from './MediaFiltersAgeRating';
import styles from './styles.module.scss';

/**
 * Render the MediaFilters component.
 *
 * @return {Element} The MediaFilters component.
 */
const MediaFilters = ({ type }) => (
	<div className={styles.media_filters}>
		<div className={styles.media_filters_toggle}>
			<MediaFiltersDrawer />
		</div>
		<div className={styles.media_filters_icon_label}>
			<MediaFiltersHeading />
		</div>
		<div className={styles.media_filters_leftbar}>
			<Popovers label="Realease Year">
				<div className={styles.media_filters_block}>
					<MediaFiltersRelease />
				</div>
			</Popovers>
			<Popovers label="Genres">
				<div className={styles.media_filters_block}>
					<MediaFiltersGenres type={type} />
				</div>
			</Popovers>
			<Popovers label="Language">
				<div className={styles.media_filters_block}>
					<MediaFiltersLanguage />
				</div>
			</Popovers>
			<Popovers label="Rating">
				<div className={styles.media_filters_block}>
					<MediaFiltersRating />
				</div>
			</Popovers>
			<Popovers label="Age Rating">
				<div className={styles.media_filters_block}>
					<MediaFiltersAgeRating />
				</div>
			</Popovers>
		</div>
		<div className={styles.media_filters_rightbar}>
			<MediaFiltersSort />
			<div className={styles.media_filters_reset}>
				<MediaFiltersReset />
			</div>
		</div>
	</div>
);

/**
 * Default Props.
 */
MediaFilters.defaultProps = {
	type: 'movie',
};

/**
 * Prop Types.
 */
MediaFilters.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
};

export default MediaFilters;
