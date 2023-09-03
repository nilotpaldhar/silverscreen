import PropTypes from 'prop-types';
import MediaGroupTmpl from '@templates/MediaGroupTmpl';
import { Seo } from '@components/general';

/**
 * Render the SingleGenreTmpl component.
 *
 * @return {Element} The SingleGenreTmpl component.
 */
const SingleGenreTmpl = ({ type, breadcrumbs, data }) => {
	/** Get genre name. */
	const genreName = data?.meta?.query?.name;

	/** Get page title for seo. */
	const pageTitle = `Watch ${genreName} ${type === 'tv' ? 'TV Shows' : 'Movies'}`;

	/** Media Group Tmpl Config. */
	const conf = {
		data,
		type,
		breadcrumbs,
		excludeFilters: ['genres'],
		heading: `Genre "${genreName ?? 'unknown'}"`,
	};

	return (
		<>
			<Seo title={pageTitle} />
			<MediaGroupTmpl {...conf} />
		</>
	);
};

/**
 * Default Props.
 */
SingleGenreTmpl.defaultProps = {
	type: 'movie',
	breadcrumbs: [],
	data: {},
};

/**
 * Prop Types.
 */
SingleGenreTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.shape({
		meta: PropTypes.shape({
			query: PropTypes.shape({
				name: PropTypes.string,
			}),
		}),
	}),
};

export default SingleGenreTmpl;
