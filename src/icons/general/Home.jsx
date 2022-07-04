import { HomeIcon } from '@heroicons/react/solid';

/**
 * Render the Home icon.
 *
 * @return {Element} The Home icon.
 */
const Home = ({ ...props }) => (
	<span className="icon" role="img">
		<HomeIcon {...props} />
	</span>
);

export default Home;
