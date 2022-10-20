import PropTypes from 'prop-types';
import { Container, Pagination, Tabs, Seo } from '@components/general';
import { Breadcrumb } from '@components/layout';
import { MediaCollection } from '@components/media';
import { isEmpty } from 'lodash';
import styles from './styles.module.scss';

/**
 * Render the SearchPageTmpl component.
 *
 * @return {Element} The SearchPageTmpl component.
 */
const SearchPageTmpl = ({ data }) => {
	const { meta: { currentPage, totalPages, query } = {}, collection } = data || {};
	const hasCollection = !isEmpty(collection?.movie) || !isEmpty(collection?.tv);

	/** Page Title for SEO. */
	const pageTitle = `Search for '${query?.name || 'unknown'}'`;

	/** Page Heading */
	const heading = (
		<div className={styles.search_page_tmpl_heading}>
			<span className={styles.label}>Search results for:</span>
			<span className={styles.query}>{query?.name || 'unknown'}</span>
		</div>
	);

	/** Total Results. */
	const results = (
		<div className={styles.search_page_tmpl_results}>
			Showing<span>{currentPage}</span>out of<span>{totalPages}</span>
			{totalPages > 1 ? 'pages' : 'page'}
		</div>
	);

	/** Tab Items. */
	const tabItems = [
		{
			label: 'Movies',
			content: isEmpty(collection?.movie) ? (
				<div className={styles.search_page_tmpl_message}>
					<h2>No movies found!</h2>
				</div>
			) : (
				<MediaCollection type="movie" collection={collection?.movie} />
			),
		},
		{
			label: 'TV Shows',
			content: isEmpty(collection?.tv) ? (
				<div className={styles.search_page_tmpl_message}>
					<h2>No tv shows found!</h2>
				</div>
			) : (
				<MediaCollection type="tv" collection={collection?.tv} />
			),
		},
	];

	return (
		<>
			<Seo title={pageTitle} />
			<div className={styles.search_page_tmpl}>
				<Breadcrumb heading={heading} showBreadcrumb={false} />
				<main className={styles.search_page_tmpl_content}>
					<Container fluidLarge={false}>
						<section className={styles.search_page_tmpl_section}>
							<Tabs
								items={tabItems}
								prepend={results}
								headerClassName={styles.search_page_tmpl_tabheader}
							/>
						</section>
						{hasCollection && (
							<div className={styles.search_page_tmpl_pagination}>
								<Pagination initialPage={currentPage} pageCount={totalPages} routePrefix="?page=" />
							</div>
						)}
					</Container>
				</main>
			</div>
		</>
	);
};
/**
 * Default Props.
 */
SearchPageTmpl.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
SearchPageTmpl.propTypes = {
	data: PropTypes.shape({
		meta: PropTypes.shape({
			totalPages: PropTypes.number,
			currentPage: PropTypes.number,
			totalResults: PropTypes.number,
			query: PropTypes.shape({ name: PropTypes.string }),
		}),
		collection: PropTypes.shape({
			movie: PropTypes.arrayOf(PropTypes.shape({})),
			tv: PropTypes.arrayOf(PropTypes.shape({})),
		}),
	}),
};

export default SearchPageTmpl;
