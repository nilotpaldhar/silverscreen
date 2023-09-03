import PropTypes from 'prop-types';

import Seo from '@components/general/Seo';
import Tabs from '@components/general/Tabs';
import Empty from '@components/feedback/Empty';
import Container from '@components/general/Container';
import Pagination from '@components/general/Pagination';
import Breadcrumb from '@components/layout/Breadcrumb';
import MediaCollection from '@components/media/MediaCollection';

import isEmpty from 'lodash/isEmpty';
import emptyImg from '@public/images/placeholders/search-empty.svg';
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
			content: !isEmpty(collection?.movie) && (
				<MediaCollection type="movie" collection={collection?.movie} />
			),
		},
		{
			label: 'TV Shows',
			content: !isEmpty(collection?.tv) && (
				<MediaCollection type="tv" collection={collection?.tv} />
			),
		},
	];

	return (
		<>
			<Seo title={pageTitle} />
			<div className={styles.search_page_tmpl}>
				<Breadcrumb links={[{ label: 'Search', href: null }]} />
				<Container fluidLarge={false}>
					<div className={styles.search_page_tmpl_heading}>
						<span className={styles.label}>Search results for:</span>
						<span className={styles.query}>{query?.name || 'unknown'}</span>
					</div>
				</Container>
				<main className={styles.search_page_tmpl_content}>
					<Container fluidLarge={false}>
						<section className={styles.search_page_tmpl_section}>
							{hasCollection ? (
								<Tabs
									items={tabItems}
									prepend={results}
									headerClassName={styles.search_page_tmpl_tabheader}
								/>
							) : (
								<div className={styles.search_page_tmpl_message}>
									<Empty
										imgSrc={emptyImg}
										imgProps={{ width: 260, height: 210, alt: 'empty' }}
										title="Nothing Found!"
										description="Sorry, but nothing matched your search terms. Please try again with some different keywords."
									/>
								</div>
							)}
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
