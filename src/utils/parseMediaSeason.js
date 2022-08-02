import { isEmpty, isNaN, toNumber } from 'lodash';

/**
 * Parse media season number.
 *
 * @param {string} season Media Season
 *
 * @returns {number} Season Number.
 */
const parseMediaSeason = (season = '') => {
	if (isEmpty(season)) {
		return null;
	}
	const seasonNum = toNumber(season?.split('-')?.at(-1));
	if (isNaN(seasonNum)) return null;
	return seasonNum;
};

export default parseMediaSeason;
