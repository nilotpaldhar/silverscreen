import { isEmpty } from 'lodash';
import { format } from 'date-fns';

/**
 * Generates media release date.
 *
 * @param {string} date Media Release Date.
 *
 * @returns Media Release dateString and year.
 */
const generateMediaReleaseDate = (date = null) => {
	if (isEmpty(date)) return null;
	const dateObj = new Date(date);
	const dateString = dateObj ? format(new Date(dateObj), 'MMM d, y') : null;
	const year = dateObj?.getFullYear() ?? null;
	return { dateString, year };
};

export default generateMediaReleaseDate;
