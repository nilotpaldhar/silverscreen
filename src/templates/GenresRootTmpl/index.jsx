import PropTypes from 'prop-types';
import { Container, Tabs, Seo } from '@components/general';
import { Breadcrumb } from '@components/layout';
import { GenreCollection } from '@components/genre';
import styles from './styles.module.scss';

/**
 * Render the GenresRootTmpl component.
 *
 * @return {Element} The GenresRootTmpl component.
 */
const GenresRootTmpl = ({ pageType, data }) => {
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

	/** Get page heading. */
	const getPageHeading = (type = 'all') => {
		let heading = '';
		switch (type) {
			case 'movie': {
				heading = 'Movie Genres';
				break;
			}
			case 'tv': {
				heading = 'TV Show Genres';
				break;
			}
			default: {
				heading = 'Genres';
				break;
			}
		}
		return heading;
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
				<Breadcrumb heading={getPageHeading(pageType)} />
				<main className={styles.genres_root_tmpl_content}>
					<Container fluidLarge={false}>
						<section className={styles.genres_root_tmpl_section}>
							{pageType === 'all' ? (
								<Tabs
									items={tabItems}
									prepend={
										<div className={styles.genres_root_tmpl_info}>
											Filter movies or tv shows by a genre
										</div>
									}
									headerClassName={styles.genres_root_tmpl_tabheader}
								/>
							) : (
								<>
									<div className={styles.genres_root_tmpl_info}>
										Filter {pageType === 'tv' ? 'tv shows' : 'movies'} by a genre
									</div>
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
	data: {},
};

/**
 * Prop Types.
 */
GenresRootTmpl.propTypes = {
	pageType: PropTypes.oneOf(['all', 'tv', 'movie']),
	data: PropTypes.shape({}),
};

export default GenresRootTmpl;
