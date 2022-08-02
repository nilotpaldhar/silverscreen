import slugify from 'slugify';

/**
 * Generates media(movie/tv) uid.
 *
 * @param {number} id Media ID.
 * @param {string} name Media Name.
 * @returns uid.
 */
const generateMediaUid = (id, name = '') => {
	if (id && name) {
		const slug = slugify(name?.toLowerCase(), { strict: true });
		return `${slug}-${id}`;
	}

	return null;
};

export default generateMediaUid;
