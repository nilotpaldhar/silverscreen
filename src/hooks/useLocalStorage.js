import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_PREFIX } from '@constants';

const useLocalStorage = (key, initialValue) => {
	const prefixedKey = `${LOCAL_STORAGE_PREFIX}-${key}`;

	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') return initialValue;

		try {
			const item = window.localStorage.getItem(prefixedKey);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	useEffect(() => {
		const setValue = (value) => {
			window.localStorage.setItem(prefixedKey, JSON.stringify(value));
		};
		if (storedValue) setValue(storedValue);
	}, [storedValue, prefixedKey]);

	return [storedValue, setStoredValue];
};

export default useLocalStorage;
