import { SliderDebounce } from '@components/inputs';
import { useRouteParams } from '@hooks';
import { toNumber } from 'lodash';
import { isValidDate } from '@utils';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersRelease component.
 *
 * @return {Element} The MediaFiltersRelease component.
 */
const MediaFiltersRelease = () => {
	const { query, replaceMultiple, removesMultiple } = useRouteParams();
	const minYear = 1900;
	const currYear = typeof Date !== 'undefined' && new Date().getFullYear();

	/** Get default slider value. */
	const getDefaultValue = (queryParams, defaultMin = 1900, defaultMax = 2000) => {
		const from = toNumber(queryParams.releaseYearFrom);
		const until = toNumber(queryParams.releaseYearUntil);
		return [
			isValidDate(`${from}`) ? from : defaultMin,
			isValidDate(`${until}`) ? until : defaultMax,
		];
	};

	/** Handle Filter Release Year. */
	const handleFilterRelease = (releaseYears = [1900, 2022]) => {
		const [releaseYearFrom, releaseYearUntil] = releaseYears;
		const replaceParams = [
			{
				key: 'releaseYearFrom',
				value: releaseYearFrom,
			},
			{
				key: 'releaseYearUntil',
				value: releaseYearUntil,
			},
		];
		replaceMultiple(replaceParams);
	};

	/** Handle Reset Release Year */
	const handleResetRelease = () => {
		removesMultiple(['releaseYearFrom', 'releaseYearUntil']);
	};

	/** Slider Config. */
	const sliderConf = {
		step: 1,
		min: minYear,
		max: currYear,
		onChange: handleFilterRelease,
		defaultValue: getDefaultValue(query, minYear, currYear),
	};

	return (
		<div className={styles.media_filters_release}>
			<MediaFiltersTitle title="Release Year" onReset={handleResetRelease} />
			<SliderDebounce {...sliderConf} />
		</div>
	);
};

export default MediaFiltersRelease;
