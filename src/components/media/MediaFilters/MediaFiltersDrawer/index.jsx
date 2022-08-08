import { useState } from 'react';
import { Drawer, Button } from '@components/general';
import { Filter } from '@icons';
import MediaFiltersReset from '../MediaFiltersReset';
import MediaFiltersRating from '../MediaFiltersRating';
import MediaFiltersGenres from '../MediaFiltersGenres';
import MediaFiltersHeading from '../MediaFiltersHeading';
import MediaFiltersRelease from '../MediaFiltersRelease';
import MediaFiltersLanguage from '../MediaFiltersLanguage';
import MediaFiltersAgeRating from '../MediaFiltersAgeRating';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersDrawer component.
 *
 * @return {Element} The MediaFiltersDrawer component.
 */
const MediaFiltersDrawer = () => {
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
					<div className={styles.media_filters_drawer_block}>
						<MediaFiltersRelease />
					</div>
					<div className={styles.media_filters_drawer_block}>
						<MediaFiltersGenres />
					</div>
					<div className={styles.media_filters_drawer_block}>
						<MediaFiltersLanguage />
					</div>
					<div className={styles.media_filters_drawer_block}>
						<MediaFiltersRating />
					</div>
					<div className={styles.media_filters_drawer_block}>
						<MediaFiltersAgeRating />
					</div>
				</div>
			</Drawer>
		</>
	);
};

export default MediaFiltersDrawer;
