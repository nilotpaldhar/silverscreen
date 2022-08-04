import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import ReactPlayer from 'react-player/youtube';
import { VisuallyHidden } from '@components/general';
import { Close } from '@icons';
import { isNull } from 'lodash';
import styles from './styles.module.scss';

/**
 * Render the VideoPlayerContent component.
 *
 * @return {Element} The VideoPlayerContent component.
 */
const VideoPlayerContent = ({ open, videoUrl, placeHolder, onClose }) => {
	/** Body transition config. */
	const contentTransitionConf = {
		as: Fragment,
		enter: 'ease-out duration-300',
		enterFrom: 'opacity-0 scale-95',
		enterTo: 'opacity-100 scale-100',
		leave: 'ease-in duration-200',
		leaveFrom: 'opacity-100 scale-100',
		leaveTo: 'opacity-0 scale-95',
	};

	/** Video transition config. */
	const videoTransitionConf = {
		as: Fragment,
		enter: 'ease-out duration-300',
		enterFrom: 'opacity-0',
		enterTo: 'opacity-100',
		leave: 'ease-in duration-200',
		leaveFrom: 'opacity-100',
		leaveTo: 'opacity-0',
	};

	/** React Player Config. */
	const reactPlayerConf = {
		className: styles.video_player_video,
		url: videoUrl,
		width: '100%',
		height: '100%',
		controls: true,
	};

	return (
		<Transition.Child {...contentTransitionConf}>
			<Dialog.Panel className={styles.video_player_content}>
				{open && isNull(videoUrl) ? (
					<div className={styles.video_player_placeholder}>
						<h1>{placeHolder}</h1>
					</div>
				) : (
					<Transition.Child {...videoTransitionConf}>
						<div className={styles.video_player_video_wrapper}>
							<ReactPlayer {...reactPlayerConf} />
						</div>
					</Transition.Child>
				)}
				<div className={styles.video_player_closebtn}>
					<button type="button" className="" onClick={onClose}>
						<Close />
						<VisuallyHidden>Close Player</VisuallyHidden>
					</button>
				</div>
			</Dialog.Panel>
		</Transition.Child>
	);
};
/**
 * Default Props.
 */
VideoPlayerContent.defaultProps = {
	videoUrl: null,
	open: false,
	placeHolder: '',
	onClose: () => {},
};

/**
 * Prop Types.
 */
VideoPlayerContent.propTypes = {
	videoUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	open: PropTypes.bool,
	placeHolder: PropTypes.string,
	onClose: PropTypes.func,
};

export default VideoPlayerContent;
