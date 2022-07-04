import { FiSearch } from 'react-icons/fi';

/**
 * Render the Search icon.
 *
 * @return {Element} The Search icon.
 */
const Search = ({ ...props }) => (
	<span className="icon" role="img">
		<FiSearch {...props} />
	</span>
);

export default Search;
