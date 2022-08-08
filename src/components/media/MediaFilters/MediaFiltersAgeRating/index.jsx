import { useRouteParams } from '@hooks';
import { CheckMark } from '@icons';
import cx from 'classnames';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersAgeRating component.
 *
 * @return {Element} The MediaFiltersAgeRating component.
 */
const MediaFiltersAgeRating = () => {
	const { query, toggle, remove } = useRouteParams();

	/** Age Rating Buttons. */
	const ageRatingBtns = [
		{
			value: 'u',
			label: 'U',
		},
		{
			value: 'ua',
			label: 'UA',
		},
		{
			value: 'a',
			label: 'A',
		},
	];

	/** Check active certificates. */
	const isActive = (val) => {
		if (!query?.certification || !val) return false;
		const certArr = query?.certification?.split(',') ?? [];
		return certArr?.includes(val);
	};

	/** Handle Filter Age Rating */
	const handleFilterAgeRating = (_evt) => {
		const val = _evt?.currentTarget?.value;
		toggle('certification', val);
	};

	/** Handle Reset Age Rating */
	const handleResetAgeRating = () => {
		remove('certification');
	};

	return (
		<div className={styles.media_filters_age_rating}>
			<MediaFiltersTitle title="Age rating" onReset={handleResetAgeRating} />
			<ul>
				{ageRatingBtns?.map((btn) => (
					<li key={btn?.value}>
						<button
							type="button"
							value={btn?.value}
							onClick={handleFilterAgeRating}
							className={cx(styles.media_filters_age_rating_btn, {
								[styles.active]: isActive(btn?.value),
							})}
						>
							<CheckMark />
							<span>{btn?.label}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MediaFiltersAgeRating;
