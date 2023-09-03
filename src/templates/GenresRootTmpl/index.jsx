import PropTypes from 'prop-types';

import Seo from '@components/general/Seo';
import Tabs from '@components/general/Tabs';
import Container from '@components/general/Container';
import Breadcrumb from '@components/layout/Breadcrumb';
import GenreCollection from '@components/genre/GenreCollection';

import styles from './styles.module.scss';

/**
 * Render the GenresRootTmpl component.
 *
 * @return {Element} The GenresRootTmpl component.
 */
const GenresRootTmpl = ({ pageType, breadcrumbs, data }) => {
	const { movie, tv, collection = [] } = data || {};

	/** Create page title for seo. */
	const createPageTitle = (type) => {
		if (type === 'tv') {
			return 'TV Genres';
		}

		if (type === 'movie') {
			return 'Movie Genres';
		}

		return 'Genres';
	};

	/** Tab Items. */
	const tabItems = [
		{
			label: 'Movie',
			content: <GenreCollection type="movie" collection={movie?.collection} />,
		},
		{
			label: 'TV Show',
			content: <GenreCollection type="tv" collection={tv?.collection} />,
		},
	];

	return (
		<>
			<Seo title={createPageTitle(pageType)} />
			<div className={styles.genres_root_tmpl}>
				<Breadcrumb links={breadcrumbs} />
				<main className={styles.genres_root_tmpl_content}>
					<Container fluidLarge={false}>
						<section className={styles.genres_root_tmpl_section}>
							{pageType === 'all' ? (
								<Tabs
									items={tabItems}
									prepend={<div className={styles.genres_root_tmpl_info}>Filter by genre</div>}
									headerClassName={styles.genres_root_tmpl_tabheader}
								/>
							) : (
								<>
									<div className={styles.genres_root_tmpl_info}>Filter by genre</div>
									<GenreCollection
										collection={collection}
										type={pageType === 'tv' ? 'tv' : 'movie'}
									/>
								</>
							)}
						</section>
					</Container>
				</main>
			</div>
		</>
	);
};

/**
 * Default Props.
 */
GenresRootTmpl.defaultProps = {
	pageType: 'all',
	breadcrumbs: [],
	data: {},
};

/**
 * Prop Types.
 */
GenresRootTmpl.propTypes = {
	pageType: PropTypes.oneOf(['all', 'tv', 'movie']),
	breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.shape({}),
};

export default GenresRootTmpl;
