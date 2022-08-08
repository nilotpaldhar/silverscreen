import { SliderDebounce } from '@components/inputs';
import { useRouteParams } from '@hooks';
import { toNumber } from 'lodash';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersRating component.
 *
 * @return {Element} The MediaFiltersRating component.
 */
const MediaFiltersRating = () => {
	const { query, replaceMultiple, removesMultiple } = useRouteParams();

	/** Get default slider value. */
	const getDefaultValue = (queryParams, defaultMin = 0, defaultMax = 10) => {
		const minRating = toNumber(queryParams.minRating) || defaultMin;
		const maxRating = toNumber(queryParams.maxRating) || defaultMax;
		return [minRating, maxRating];
	};

	/** Handle Filter Rating. */
	const handleFilterRating = (ratings = [0, 10]) => {
		const [minRating, maxRating] = ratings;
		const replaceParams = [
			{
				key: 'minRating',
				value: minRating,
			},
			{
				key: 'maxRating',
				value: maxRating,
			},
		];
		replaceMultiple(replaceParams);
	};

	/** Handle Reset Rating */
	const handleResetRating = () => {
		removesMultiple(['minRating', 'maxRating']);
	};

	/** Slider Config. */
	const sliderConf = {
		step: 0.1,
		min: 0,
		max: 10,
		defaultValue: getDefaultValue(query),
		onChange: handleFilterRating,
	};

	return (
		<div className={styles.media_filters_rating}>
			<MediaFiltersTitle title="Rating" onReset={handleResetRating} />
			<SliderDebounce {...sliderConf} />
		</div>
	);
};

export default MediaFiltersRating;
