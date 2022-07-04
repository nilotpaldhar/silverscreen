import { FilterIcon } from '@heroicons/react/solid';

/**
 * Render the Filter icon.
 *
 * @return {Element} The Filter icon.
 */
const Filter = ({ ...props }) => (
	<span className="icon" role="img">
		<FilterIcon {...props} />
	</span>
);

export default Filter;
