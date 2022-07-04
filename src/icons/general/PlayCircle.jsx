import { PlayIcon } from '@heroicons/react/outline';

/**
 * Render the PlayCircle icon.
 *
 * @return {Element} The PlayCircle icon.
 */
const PlayCircle = ({ ...props }) => (
	<span className="icon" role="img">
		<PlayIcon {...props} />
	</span>
);

export default PlayCircle;
