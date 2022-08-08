import { isEmpty } from 'lodash';
import { MEDIA_GROUP_KEYS } from '@constants';

/**
 * Checks if valid media group key.
 *
 * @param {string} type Media Type.
 * @param {string} groupKey Media Group Key.
 *
 * @returns Is Valid Group Key.
 */
const isValidMediaGroup = (type = 'movie', groupKey = '') => {
	if (isEmpty(groupKey)) return false;
	return MEDIA_GROUP_KEYS[type]?.includes(groupKey);
};

export default isValidMediaGroup;
