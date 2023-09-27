import isEmpty from 'lodash/isEmpty';

/**
 * Opens a link in a new tab.
 *
 * @param {string} url A valid URL string.
 *
 */
const openInNewTab = (url) => {
	if (typeof window === 'undefined' || isEmpty(url)) return;
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
};

export default openInNewTab;
