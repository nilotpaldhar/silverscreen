import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { Container } from '@components/general';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import MediaTabRec from './MediaTabRec';
import MediaTabVideos from './MediaTabVideos';
import styles from './styles.module.scss';

/**
 * Render the MediaTab component.
 *
 * @return {Element} The MediaTab component.
 */
const MediaTab = ({ type, media }) => {
	const { videos, recommendations } = media;

	/** Tab Headers. */
	const tabHeaders = [
		{
			id: 'cd3ea4aa-28a1-48d9-b68d-872ffefcb341',
			label: 'Trailers & Teasers',
			empty: isEmpty(videos),
		},
		{
			id: '05ab820e-56ef-4b77-bb6c-645cb1114401',
			label: 'Recommendations',
			empty: isEmpty(recommendations),
		},
	];

	return (
		<Tab.Group as="div" className={styles.media_tab}>
			<Tab.List className={styles.media_tab_header}>
				<Container className={styles.media_tab_header_wrapper}>
					{tabHeaders.map(
						({ id, label, empty }) =>
							!empty && (
								<Tab as={Fragment} key={id}>
									{({ selected }) => (
										<button
											type="button"
											className={cx(styles.media_tab_btn, {
												[styles.active]: selected,
											})}
										>
											{label}
										</button>
									)}
								</Tab>
							)
					)}
				</Container>
			</Tab.List>
			<Tab.Panels className={styles.media_tab_body}>
				{!isEmpty(videos) && (
					<Tab.Panel>
						<MediaTabVideos videos={videos} />
					</Tab.Panel>
				)}
				{!isEmpty(recommendations) && (
					<Tab.Panel>
						<MediaTabRec type={type} recommendations={recommendations} />
					</Tab.Panel>
				)}
			</Tab.Panels>
		</Tab.Group>
	);
};

/**
 * Default Props.
 */
MediaTab.defaultProps = {
	type: 'movie',
	media: {},
};

/**
 * Prop Types.
 */
MediaTab.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	media: PropTypes.shape({
		videos: PropTypes.arrayOf(PropTypes.shape({})),
		recommendations: PropTypes.arrayOf(PropTypes.shape({})),
	}),
};

export default MediaTab;
