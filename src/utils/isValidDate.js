/* eslint-disable import/no-duplicates */
import { isEmpty } from 'lodash';
import { parse, isValid } from 'date-fns';
import { enGB } from 'date-fns/locale';

/**
 * Checks if valid date string.
 *
 * @param {string} date Date String.
 *
 * @returns Is valid date string.
 */
const isValidDate = (date = null, format = 'y') => {
	if (isEmpty(date) || typeof date === 'undefined') {
		return false;
	}
	const parsedDate = parse(date, format, new Date(), { locale: enGB });
	return isValid(parsedDate);
};

export default isValidDate;
