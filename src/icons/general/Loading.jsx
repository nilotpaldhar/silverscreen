import { AiOutlineLoading3Quarters } from 'react-icons/ai';

/**
 * Render the Loading icon.
 *
 * @return {Element} The Loading icon.
 */
const Loading = ({ ...props }) => (
	<span className="icon" role="img">
		<AiOutlineLoading3Quarters {...props} />
	</span>
);

export default Loading;
