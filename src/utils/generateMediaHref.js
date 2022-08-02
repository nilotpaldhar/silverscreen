import generateMediaUid from '@utils/generateMediaUid';
import removeSlashes from '@utils/removeSlashes';

/**
 * Generates media(movie/tv-show/tv-season) href.
 *
 * @param {string} mediaType Media Type.
 * @param {number} id Media ID.
 * @param {string} name Media Name.
 * @param {number} season Media Season Number.
 * @param {string} hrefPrefix Media HREF Prefix.
 *
 * @returns Media HREF.
 */
const generateMediaHref = (mediaType, id, name, season = null, hrefPrefix = null) => {
	/** Href Prefix. */
	const prefix = removeSlashes(hrefPrefix);

	/** Generate Media Uid. */
	const uid = generateMediaUid(id, name);

	if (!uid) return null;

	if (mediaType === 'tvSeason') {
		return prefix ? `/${prefix}/season-${season}` : `/season-${season}`;
	}

	return prefix ? `/${prefix}/${uid}` : `/${uid}`;
};

export default generateMediaHref;
