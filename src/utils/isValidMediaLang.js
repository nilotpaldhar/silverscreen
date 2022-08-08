import { isEmpty } from 'lodash';
import languages from '@public/languages.json';

/**
 * Checks if valid media language.
 *
 * @param {string} langCode Media Language Code.
 *
 * @returns Is Valid language.
 */
const isValidMediaLang = (langCode = '') => {
	if (isEmpty(langCode)) return false;
	const filteredLang = languages?.filter((l) => l?.iso_639_1 === langCode);
	return filteredLang?.length > 0;
};

export default isValidMediaLang;
