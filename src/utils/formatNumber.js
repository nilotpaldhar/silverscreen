import { isNumber } from 'lodash';

/**
 * Converts long number into abbreviated string.
 *
 * @param {number} num
 * @param {string} format
 *
 * @returns Formatted Number.
 */
const formatNumber = (num = 0, format = 'en-US') => {
	if (typeof Intl === 'undefined' || !isNumber(num)) {
		return null;
	}

	/** Intl Options. */
	const options = {
		notation: 'compact',
		maximumFractionDigits: 1,
	};

	return Intl.NumberFormat(format, options).format(num);
};

export default formatNumber;
