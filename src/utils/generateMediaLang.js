import { isEmpty } from 'lodash';
import languages from '@public/languages.json';

/**
 * Generates media(movie/tv-show) language.
 *
 * @param {string} code Media Language Code.
 *
 * @returns Media Language Object.
 */
const generateMediaLang = (code = null) => {
	if (isEmpty(code)) return null;

	/** Filter language based on "ISO" code. */
	const language = languages?.filter(
		(lang) => lang?.iso_639_1?.toLowerCase() === code?.toLowerCase()
	)[0];

	return isEmpty(language)
		? null
		: {
				name: language?.name,
				englishName: language?.english_name,
				iso: language?.iso_639_1,
		  };
};

export default generateMediaLang;
