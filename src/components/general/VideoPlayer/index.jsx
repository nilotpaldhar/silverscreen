import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import VideoPlayerContent from './VideoPlayerContent';
import styles from './styles.module.scss';

/**
 * Render the VideoPlayer component.
 *
 * @return {Element} The VideoPlayer component.
 */
const VideoPlayer = ({ open, videoUrl, placeHolder, onClose }) => {
	/** Root transition config. */
	const rootTransitionConf = {
		appear: true,
		show: open,
		as: Fragment,
	};

	/** Overlay transition config. */
	const overlayTransitionConf = {
		as: Fragment,
		enter: 'ease-out duration-300',
		enterFrom: 'opacity-0',
		enterTo: 'opacity-100',
		leave: 'ease-in duration-200',
		leaveFrom: 'opacity-100',
		leaveTo: 'opacity-0',
	};

	return (
		<Transition {...rootTransitionConf}>
			<Dialog as="div" className={styles.video_player} onClose={onClose}>
				<Transition.Child {...overlayTransitionConf}>
					<div className={styles.video_player_overlay} />
				</Transition.Child>
				<div className={styles.video_player_body}>
					<div className={styles.video_player_body_wrapper}>
						<VideoPlayerContent
							open={open}
							videoUrl={videoUrl}
							placeHolder={placeHolder}
							onClose={onClose}
						/>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

/**
 * Default Props.
 */
VideoPlayer.defaultProps = {
	videoUrl: null,
	open: false,
	placeHolder: 'Video Not Avilable',
	onClose: () => {},
};

/**
 * Prop Types.
 */
VideoPlayer.propTypes = {
	videoUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	open: PropTypes.bool,
	placeHolder: PropTypes.string,
	onClose: PropTypes.func,
};

export default VideoPlayer;
