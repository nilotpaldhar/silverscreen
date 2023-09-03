import PropTypes from 'prop-types';

import Empty from '@components/feedback/Empty';
import Container from '@components/general/Container';
import Breadcrumb from '@components/layout/Breadcrumb';
import Pagination from '@components/general/Pagination';
import MediaFilters from '@components/media/MediaFilters';
import MediaCollection from '@components/media/MediaCollection';

import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.scss';

/**
 * Render the MediaGroupTmpl component.
 *
 * @return {Element} The MediaGroupTmpl component.
 */
const MediaGroupTmpl = ({ type, excludeFilters, breadcrumbs, data }) => {
	const { currentPage, totalPages } = data?.meta ?? {};
	const hasCollection = !isEmpty(data?.collection);
	const message = `No ${type === 'tv' ? 'tv shows' : 'movies'} found!`;

	return (
		<div className={styles.media_group_tmpl}>
			<Breadcrumb links={breadcrumbs} />
			<main className={styles.media_group_tmpl_content}>
				<Container fluidLarge={false}>
					<section className={styles.media_group_tmpl_section}>
						<MediaFilters type={type} excludeFilters={excludeFilters} />
						{hasCollection ? (
							<MediaCollection type={type} collection={data?.collection} />
						) : (
							<div className={styles.media_group_tmpl_message}>
								<Empty title={message} />
							</div>
						)}
					</section>
					{hasCollection && (
						<div className={styles.media_group_tmpl_pagination}>
							<div className={styles.media_group_tmpl_results}>
								Showing<span>{currentPage}</span>out of<span>{totalPages}</span>
								{totalPages > 1 ? 'pages' : 'page'}
							</div>
							<Pagination initialPage={currentPage} pageCount={totalPages} routePrefix="?page=" />
						</div>
					)}
				</Container>
			</main>
		</div>
	);
};
/**
 * Default Props.
 */
MediaGroupTmpl.defaultProps = {
	type: 'movie',
	excludeFilters: [],
	breadcrumbs: [],
	data: {},
};

/**
 * Prop Types.
 */
MediaGroupTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	excludeFilters: PropTypes.arrayOf(PropTypes.string),
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.shape({
		collection: PropTypes.arrayOf(PropTypes.shape({})),
		meta: PropTypes.shape({
			currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	}),
};

export default MediaGroupTmpl;
