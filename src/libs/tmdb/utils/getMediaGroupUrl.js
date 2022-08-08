import { MEDIA_GROUP_FILTER_KEYS } from '@constants';
import { format, addDays, addYears } from 'date-fns';
import { isEmpty, isString, toNumber, isNaN, isNull } from 'lodash';
import { mapMediaGenresByName, isValidMediaLang, isValidMediaGroup, isValidDate } from '@utils';

/**
 * Checks if query params has specific key with value.
 *
 * @param {object} queryParams Query Parameters.
 *
 * @returns Has specific key.
 */
export const hasQueryParams = (queryParams = null) => {
	if (isNull(queryParams)) return false;
	let hasParams = false;

	MEDIA_GROUP_FILTER_KEYS.every((key) => {
		if (!isEmpty(queryParams[key])) {
			hasParams = true;
			return false;
		}
		return true;
	});

	return hasParams;
};

/**
 * Creates query params (as object or string).
 *
 * @param {string} type Media Type.
 * @param {object} defaultParams Default Parameters.
 * @param {string} as Object/String.
 *
 * @returns Query string or object.
 */
export const createQueryParams = (type, defaultParams = {}, groupKey = '', as = 'object') => {
	const {
		sort,
		certification,
		genres,
		language,
		minRating,
		maxRating,
		releaseYearFrom,
		releaseYearUntil,
	} = defaultParams;

	/** Default release year. */
	const defaultReleaseYearFrom = format(new Date(1900, 1, 1), 'yyyy');
	const defaultReleaseYearUntil = format(addYears(new Date(), 1), 'yyyy');
	const today = format(new Date(), 'yyyy-MM-dd');
	const nextWeek = format(addDays(new Date(), 7), 'yyyy-MM-dd');

	/** Query parameters. */
	const queryParams = {
		certification_country: 'IN',
		'release_date.gte': defaultReleaseYearFrom,
		'release_date.lte': defaultReleaseYearUntil,
		'air_date.gte': defaultReleaseYearFrom,
		'air_date.lte': defaultReleaseYearUntil,
		sort_by: '',
		certification: '',
		with_genres: '',
		with_original_language: '',
	};

	/** Add group key. */
	if (!isEmpty(groupKey)) {
		switch (groupKey) {
			case 'airing_today': {
				queryParams['air_date.gte'] = today;
				queryParams['air_date.lte'] = today;
				break;
			}
			case 'top_rated': {
				queryParams['vote_count.gte'] = 150;
				break;
			}
			case 'on_the_air': {
				queryParams['air_date.gte'] = today;
				queryParams['air_date.lte'] = nextWeek;
				break;
			}
			default:
		}
	}

	/** Add release year filter. */
	if (isValidDate(releaseYearFrom) && isValidDate(releaseYearUntil)) {
		queryParams['release_date.gte'] = releaseYearFrom;
		queryParams['release_date.lte'] = releaseYearUntil;
		queryParams['air_date.gte'] = releaseYearFrom;
		queryParams['air_date.lte'] = releaseYearUntil;
	}

	/** Add genres filter. */
	if (!isEmpty(genres) && isString(genres)) {
		const genreNames = genres?.split(',');
		const genreIds = mapMediaGenresByName(type, genreNames);
		queryParams.with_genres = genreIds?.join(',');
	}

	/** Add language filter. */
	if (!isEmpty(language) && isString(language)) {
		queryParams.with_original_language = isValidMediaLang(language) ? language : '';
	}

	/** Add rating filter. */
	if (!isEmpty(minRating) && !isEmpty(maxRating)) {
		const minRatingNum = toNumber(minRating);
		const maxRatingNum = toNumber(maxRating);

		if (isNaN(minRatingNum) || isNaN(maxRatingNum)) {
			queryParams['vote_average.gte'] = '';
			queryParams['vote_average.lte'] = '';
		} else {
			queryParams['vote_average.gte'] = `${minRatingNum}`;
			queryParams['vote_average.lte'] = `${maxRatingNum}`;
		}
	}

	/** Add cetification filter. */
	if (!isEmpty(certification) && isString(certification)) {
		const certificationMod = certification.toUpperCase().split(',').join('|');
		queryParams.certification = certificationMod;
	}

	/** Add sorting options. */
	if (sort) {
		switch (defaultParams?.sort) {
			case 'popularity': {
				queryParams.sort_by = 'popularity.desc';
				break;
			}
			case 'release': {
				queryParams.sort_by = 'release_date.desc';
				break;
			}
			case 'rating': {
				queryParams.sort_by = 'vote_average.desc';
				break;
			}
			case 'title': {
				queryParams.sort_by = 'original_title.asc';
				break;
			}
			default: {
				queryParams.sort_by = '';
			}
		}
	}

	/** Convert to query string. */
	if (as === 'string' && typeof URLSearchParams !== 'undefined') {
		const params = new URLSearchParams(queryParams);

		/** Remove empty params. */
		const keysToDel = [];
		params.forEach((value, key) => isEmpty(value) && keysToDel.push(key));
		keysToDel.forEach((key) => params.delete(key));

		return params.toString();
	}

	return queryParams;
};

/**
 * Ger request url for media group.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 * @param {string*} lang Media Language.
 * @param {object} queryParams Query Parameters.
 *
 * @returns Request URL.
 */
const getMediaGroupUrl = (type, groupKey, lang = 'en-US', queryParams = { page: 1 }) => {
	const mediaType = type === 'tv' ? 'tv' : 'movie';
	const page = `page=${queryParams?.page ?? 1}`;
	const language = `language=${lang}`;

	/** Check if valid media group. */
	if (!isValidMediaGroup(type, groupKey)) {
		return null;
	}

	if (hasQueryParams(queryParams)) {
		const queryStr = createQueryParams(type, queryParams, groupKey, 'string');
		return `/discover/${mediaType}?${page}&${language}&${queryStr}`;
	}

	return `/${mediaType}/${groupKey}?${page}&${language}`;
};

export default getMediaGroupUrl;
