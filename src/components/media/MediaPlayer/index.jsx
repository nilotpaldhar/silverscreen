import { VideoPlayer } from '@components/general';
import { useMediaPlayer } from '@context';
import { getMediaVideoUrl } from '@utils';

/**
 * Render the MediaPlayer component.
 *
 * @return {Element} The MediaPlayer component.
 */
const MediaPlayer = () => {
	const { state, dispatch } = useMediaPlayer();
	const { open, videoKey } = state ?? {};

	/** Media Video URL. */
	const videoUrl = getMediaVideoUrl(videoKey);

	/** Video Player Config. */
	const videoPlayerConf = {
		videoUrl,
		open,
		placeHolder: 'Trailer Not Available',
		onClose: () => {
			dispatch({ type: 'CLOSE_PLAYER' });
		},
	};

	return <VideoPlayer {...videoPlayerConf} />;
};

export default MediaPlayer;
