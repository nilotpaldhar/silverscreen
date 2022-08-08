import PropTypes from 'prop-types';
import { Button } from '@components/general';
import { Close } from '@icons';
import { MEDIA_GROUP_FILTER_KEYS } from '@constants';
import { useRouteParams } from '@hooks';

/**
 * Render the MediaFiltersReset component.
 *
 * @return {Element} The MediaFiltersReset component.
 */
const MediaFiltersReset = ({ children, ...props }) => {
	const { removesMultiple } = useRouteParams();

	/** Handle Filter Reset. */
	const handleFilterReset = () => {
		removesMultiple(MEDIA_GROUP_FILTER_KEYS);
	};

	return (
		<Button icon={<Close />} className="!min-h-[30px] !px-3" onClick={handleFilterReset} {...props}>
			{children}
		</Button>
	);
};

/**
 * Default Props.
 */
MediaFiltersReset.defaultProps = {
	children: 'Reset All',
};

/**
 * Prop Types.
 */
MediaFiltersReset.propTypes = {
	children: PropTypes.node,
};

export default MediaFiltersReset;
