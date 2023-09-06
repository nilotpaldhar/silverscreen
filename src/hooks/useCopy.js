import { useState, useRef, useEffect, useCallback } from 'react';
import copyTextToClipboard from '@utils/copyTextToClipboard';

/**
 * Copies text to clipboard.
 */
const useCopy = (str) => {
	const copyableString = useRef(str);
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(async () => {
		const copiedString = await copyTextToClipboard(copyableString.current);
		setCopied(copiedString);
	}, [copyableString]);

	useEffect(() => {
		copyableString.current = str;
	}, [str]);

	return [handleCopy, copied, setCopied];
};

export default useCopy;
