import { useState } from 'react';
import { Slider } from '@components/inputs';
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
	const defaultReleaseFrom = 1900;
	const defaultReleaseUntil = typeof Date !== 'undefined' && new Date().getFullYear();

	/** Get default slider value. */
	const getDefaultValue = (queryParams, defaultMin = 1900, defaultMax = 2000) => {
		const from = toNumber(queryParams.releaseYearFrom);
		const until = toNumber(queryParams.releaseYearUntil);
		return [
			isValidDate(`${from}`) ? from : defaultMin,
			isValidDate(`${until}`) ? until : defaultMax,
		];
	};

	/** Slider state. */
	const [value, setValue] = useState(
		getDefaultValue(query, defaultReleaseFrom, defaultReleaseUntil)
	);

	/** Handle Filter Release Year. */
	const handleFilterRelease = (releaseYears) => {
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
		setValue([defaultReleaseFrom, defaultReleaseUntil]);
		removesMultiple(['releaseYearFrom', 'releaseYearUntil']);
	};

	/** Slider Config. */
	const sliderConf = {
		value,
		step: 1,
		min: defaultReleaseFrom,
		max: defaultReleaseUntil,
		onAfterChange: handleFilterRelease,
		onChange: (val) => setValue(val),
	};

	return (
		<div className={styles.media_filters_release}>
			<MediaFiltersTitle title="Release Year" onReset={handleResetRelease} />
			<Slider {...sliderConf} />
		</div>
	);
};

export default MediaFiltersRelease;
