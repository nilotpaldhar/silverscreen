import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') return initialValue;

		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	useEffect(() => {
		const setValue = (value) => {
			window.localStorage.setItem(key, JSON.stringify(value));
		};
		if (storedValue) setValue(storedValue);
	}, [storedValue, key]);

	return [storedValue, setStoredValue];
};

export default useLocalStorage;
