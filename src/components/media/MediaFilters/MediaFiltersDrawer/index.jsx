import PropTypes from 'prop-types';
import { useState } from 'react';
import { Drawer, Button } from '@components/general';
import { Filter } from '@icons';
import MediaFiltersReset from '../MediaFiltersReset';
import MediaFiltersHeading from '../MediaFiltersHeading';
import mapMediaFilters from '../utils/mapMediaFilters';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersDrawer component.
 *
 * @return {Element} The MediaFiltersDrawer component.
 */
const MediaFiltersDrawer = ({ type, filters }) => {
	const [open, setOpen] = useState(false);

	/** Open mobile menu. */
	const handleOpen = () => {
		setOpen(true);
	};

	/** Close mobile menu. */
	const handleClose = () => {
		setOpen(false);
	};

	/** Button config. */
	const btnConf = {
		className: '!min-h-[30px] !px-3',
		icon: <Filter />,
		onClick: handleOpen,
	};

	/** Drawer config. */
	const drawerConf = {
		open,
		onClose: handleClose,
		className: styles.media_filters_drawer,
	};

	return (
		<>
			<Button {...btnConf}>Filters</Button>
			<Drawer {...drawerConf}>
				<div className={styles.media_filters_drawer_heading}>
					<MediaFiltersHeading />
					<MediaFiltersReset />
				</div>
				<div className={styles.media_filters_drawer_body}>
					{filters?.map((filter) => {
						const FilterComponent = mapMediaFilters(filter);
						return FilterComponent ? (
							<div key={filter} className={styles.media_filters_drawer_block}>
								{filter === 'genres' ? <FilterComponent type={type} /> : <FilterComponent />}
							</div>
						) : null;
					})}
				</div>
			</Drawer>
		</>
	);
};

/**
 * Default Props.
 */
MediaFiltersDrawer.defaultProps = {
	type: 'movie',
	filters: [],
};

/**
 * Prop Types.
 */
MediaFiltersDrawer.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	filters: PropTypes.arrayOf(PropTypes.string),
};

export default MediaFiltersDrawer;
