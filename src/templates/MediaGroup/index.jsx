import PropTypes from 'prop-types';
import { Container, Pagination } from '@components/general';
import { Breadcrumb } from '@components/layout';
import { MediaCollection, MediaFilters } from '@components/media';
import { isEmpty } from 'lodash';
import styles from './styles.module.scss';

/**
 * Render the MediaGroupTmpl component.
 *
 * @return {Element} The MediaGroupTmpl component.
 */
const MediaGroupTmpl = ({ type, heading, data }) => {
	const { currentPage, totalPages } = data?.meta ?? {};
	const hasCollection = !isEmpty(data?.collection);
	const message = `No ${type === 'tv' ? 'tv shows' : 'movies'} found!`;

	return (
		<div className={styles.media_group_tmpl}>
			<Breadcrumb heading={heading} />
			<main className={styles.media_group_tmpl_content}>
				<Container fluidLarge={false}>
					<section className={styles.media_group_tmpl_section}>
						<MediaFilters type={type} />
						{hasCollection ? (
							<MediaCollection type={type} collection={data?.collection} />
						) : (
							<div className={styles.media_group_tmpl_message}>
								<h2>{message}</h2>
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
	data: {},
	heading: '',
};

/**
 * Prop Types.
 */
MediaGroupTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	heading: PropTypes.node,
	data: PropTypes.shape({
		collection: PropTypes.arrayOf(PropTypes.shape({})),
		meta: PropTypes.shape({
			currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	}),
};

export default MediaGroupTmpl;
