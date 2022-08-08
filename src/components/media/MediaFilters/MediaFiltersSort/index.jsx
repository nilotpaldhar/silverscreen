import cx from 'classnames';
import { Popovers } from '@components/feedback';
import { useRouteParams } from '@hooks';
import { chain } from 'lodash';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersSort component.
 *
 * @return {Element} The MediaFiltersSort component.
 */
const MediaFiltersSort = () => {
	const { query, replace, remove } = useRouteParams();

	/** Sort Buttons. */
	const sortBtns = [
		{
			value: 'popularity',
			label: 'Popularity',
		},
		{
			value: 'release',
			label: 'Release Date',
		},
		{
			value: 'rating',
			label: 'Rating',
		},
		{
			value: 'title',
			label: 'Title (A-Z)',
		},
	];

	/** Get label for popovers. */
	const getLabel = (queryParam, sortArr = []) => {
		const defaultLabel = 'Select Sort';

		/** Return default label, if query params empty. */
		if (!queryParam) {
			return defaultLabel;
		}

		const sortLabels = chain(sortArr).keyBy('value').mapValues('label').value();
		return sortLabels[queryParam] ?? defaultLabel;
	};

	/** Check Active Sort. */
	const isActive = (val) => {
		if (!query?.sort || !val) return false;
		return query?.sort === val;
	};

	/** Handle Sort. */
	const handleSort = (_evt) => {
		const val = _evt?.target?.value;
		replace('sort', val);
	};

	/** Handle Sort Reset. */
	const handleSortReset = () => {
		remove('sort');
	};

	return (
		<div className={styles.media_filters_sort}>
			<span className={styles.media_filters_sort_heading}>Sort By</span>
			<Popovers label={getLabel(query?.sort, sortBtns)}>
				<div className={styles.media_filters_sort_content}>
					<div className={styles.media_filters_sort_header}>
						<MediaFiltersTitle title="Sort" onReset={handleSortReset} />
					</div>
					<ul className={styles.media_filters_sort_body}>
						{sortBtns.map((sortBtn) => (
							<li key={sortBtn?.value}>
								<button
									type="button"
									className={cx(styles.media_filters_sort_btn, {
										[styles.active]: isActive(sortBtn?.value),
									})}
									value={sortBtn?.value}
									onClick={handleSort}
								>
									{sortBtn?.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			</Popovers>
		</div>
	);
};

export default MediaFiltersSort;
