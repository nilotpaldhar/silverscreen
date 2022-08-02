import { isEmpty, toNumber, isNaN } from 'lodash';

/**
 * Parse media(movie/tv) uid.
 *
 * @param {string} uid Unique Identifier.
 * @returns parsed uid.
 */
const parseMediaUid = (uid = '') => {
	if (isEmpty(uid)) {
		return null;
	}

	const uidArr = uid?.split('-');
	const id = toNumber(uidArr?.pop());
	const slug = uidArr?.join('-');

	if (isNaN(id) || isEmpty(slug)) {
		return { id: null, slug: null };
	}

	return { id, slug };
};

export default parseMediaUid;
