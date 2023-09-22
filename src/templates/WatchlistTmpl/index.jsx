import PropTypes from 'prop-types';

import Tabs from '@components/general/Tabs';
import Empty from '@components/feedback/Empty';
import Heading from '@components/general/Heading';
import Container from '@components/general/Container';
import Breadcrumb from '@components/layout/Breadcrumb';
import MediaCollection from '@components/media/MediaCollection';

import styles from './styles.module.scss';

/**
 * Render the WatchlistTmpl component.
 *
 * @return {Element} The WatchlistTmpl component.
 */
const WatchlistTmpl = ({ empty, loading, error, collection }) => {
	const renderContent = (content, type) => {
		if (loading)
			return (
				<div>
					<div className={styles.watchlist_tmpl_loader}>
						{[...Array(10).keys()].map((idx) => (
							<span key={idx} className={styles.watchlist_tmpl_loader_item} />
						))}
					</div>
				</div>
			);

		if (empty || content?.length === 0)
			return (
				<Empty
					className="py-28"
					title="Empty Watchlist!"
					description={`You haven't added any ${
						type === 'tv' ? 'TV shows' : 'movies'
					} to your watchlist.`}
				/>
			);

		return <MediaCollection type={type} collection={content} />;
	};

	return (
		<div className={styles.watchlist_tmpl}>
			<Breadcrumb links={[{ label: 'Watchlist', href: null }]} />
			<main className={styles.watchlist_tmpl_content}>
				<Container fluidLarge={false}>
					{error ? (
						<Empty
							className="py-28"
							title={<div className="capitalize">{error}</div>}
							description=""
						/>
					) : (
						<Tabs
							items={[
								{
									label: 'Movies',
									content: renderContent(collection?.movies, 'movie'),
								},
								{
									label: 'TV Shows',
									content: renderContent(collection?.tv, 'tv'),
								},
							]}
							prepend={<Heading>My Watchlist</Heading>}
							headerClassName="flex justify-between items-center sm:justify-start sm:gap-5"
						/>
					)}
				</Container>
			</main>
		</div>
	);
};

/**
 * Default Props.
 */
WatchlistTmpl.defaultProps = {
	empty: false,
	loading: false,
	error: null,
	collection: { movies: [], tv: [] },
};

/**
 * Prop Types.
 */
WatchlistTmpl.propTypes = {
	empty: PropTypes.bool,
	loading: PropTypes.bool,
	error: PropTypes.string,
	collection: PropTypes.shape({
		movies: PropTypes.arrayOf(PropTypes.shape({})),
		tv: PropTypes.arrayOf(PropTypes.shape({})),
	}),
};

export default WatchlistTmpl;
