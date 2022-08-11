import PropTypes from 'prop-types';
import MediaGroupTmpl from '@templates/MediaGroupTmpl';

/**
 * Render the SingleGenreTmpl component.
 *
 * @return {Element} The SingleGenreTmpl component.
 */
const SingleGenreTmpl = ({ type, data }) => {
	/** Get genre name. */
	const genreName = data?.meta?.query?.name;

	/** Media Group Tmpl Config. */
	const conf = {
		data,
		type,
		excludeFilters: ['genres'],
		heading: `Genre "${genreName ?? 'unknown'}"`,
	};

	return <MediaGroupTmpl {...conf} />;
};

/**
 * Default Props.
 */
SingleGenreTmpl.defaultProps = {
	type: 'movie',
	data: {},
};

/**
 * Prop Types.
 */
SingleGenreTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	data: PropTypes.shape({
		meta: PropTypes.shape({
			query: PropTypes.shape({
				name: PropTypes.string,
			}),
		}),
	}),
};

export default SingleGenreTmpl;
