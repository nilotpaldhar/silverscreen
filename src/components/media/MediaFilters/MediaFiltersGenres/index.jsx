import PropTypes from 'prop-types';
import { useRouteParams } from '@hooks';
import { CheckMark } from '@icons';
import { MEDIA_GENRES } from '@constants';
import cx from 'classnames';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersGenres component.
 *
 * @return {Element} The MediaFiltersGenres component.
 */
const MediaFiltersGenres = ({ type }) => {
	const { query, toggle, remove } = useRouteParams();

	/** Genres Buttons. */
	const genresBtns = MEDIA_GENRES[type]?.map((g) => ({
		id: g?.id,
		value: g?.name?.toLowerCase(),
		label: g?.name,
	}));

	/** Check Active Genres. */
	const isActive = (val) => {
		if (!query?.genres || !val) return false;
		const genresArr = query?.genres?.split(',') ?? [];
		return genresArr?.includes(val);
	};

	/** Handle Filter Genres. */
	const handleFilterGenres = (_evt) => {
		const val = _evt?.currentTarget?.value;
		toggle('genres', val);
	};

	/** Handle Reset Genres */
	const handleResetGenres = () => {
		remove('genres');
	};

	return (
		<div className={styles.media_filters_genres}>
			<MediaFiltersTitle title="Genres" onReset={handleResetGenres} />
			<ul>
				{genresBtns?.map(({ id, value, label }) => (
					<li key={id}>
						<button
							type="button"
							value={value}
							onClick={handleFilterGenres}
							className={cx(styles.media_filters_genres_btn, {
								[styles.active]: isActive(value),
							})}
						>
							<CheckMark />
							<span>{label}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

/**
 * Default Props.
 */
MediaFiltersGenres.defaultProps = {
	type: 'movie',
};

/**
 * Prop Types.
 */
MediaFiltersGenres.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
};

export default MediaFiltersGenres;
