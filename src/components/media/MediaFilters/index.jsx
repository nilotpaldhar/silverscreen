import PropTypes from 'prop-types';
import { Popovers } from '@components/feedback';
import MediaFiltersSort from './MediaFiltersSort';
import MediaFiltersReset from './MediaFiltersReset';
import MediaFiltersDrawer from './MediaFiltersDrawer';
import MediaFiltersHeading from './MediaFiltersHeading';
import mapMediaFilters from './utils/mapMediaFilters';
import styles from './styles.module.scss';

const FILTERS_ARRAY = ['release', 'genres', 'language', 'rating', 'certification'];

/**
 * Render the MediaFilters component.
 *
 * @return {Element} The MediaFilters component.
 */
const MediaFilters = ({ type, excludeFilters }) => {
	/** Remove Excluded Filters. */
	const filters = FILTERS_ARRAY.filter((f) => !excludeFilters?.includes(f));

	return (
		<div className={styles.media_filters}>
			{filters?.length > 0 && (
				<>
					<div className={styles.media_filters_toggle}>
						<MediaFiltersDrawer type={type} filters={filters} />
					</div>
					<div className={styles.media_filters_icon_label}>
						<MediaFiltersHeading />
					</div>
					<div className={styles.media_filters_leftbar}>
						{filters?.map((filter) => {
							const FilterComponent = mapMediaFilters(filter);
							const label = filter === 'release' ? 'release year' : filter;
							return FilterComponent ? (
								<Popovers
									key={filter}
									label={<span className="capitalize">{label}</span>}
									fallbackPlacements={['top', 'left']}
								>
									<div className={styles.media_filters_block}>
										{filter === 'genres' ? <FilterComponent type={type} /> : <FilterComponent />}
									</div>
								</Popovers>
							) : null;
						})}
					</div>
				</>
			)}
			<div className={styles.media_filters_rightbar}>
				<MediaFiltersSort />
				<div className={styles.media_filters_reset}>
					<MediaFiltersReset />
				</div>
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
MediaFilters.defaultProps = {
	type: 'movie',
	excludeFilters: [],
};

/**
 * Prop Types.
 */
MediaFilters.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	excludeFilters: PropTypes.arrayOf(PropTypes.string),
};

export default MediaFilters;
