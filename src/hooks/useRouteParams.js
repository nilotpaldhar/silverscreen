import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';

/**
 * Route Params Hook.
 */
const useRouteParams = () => {
	const router = useRouter();
	const pathname = router?.pathname;
	const query = router?.query;

	/**
	 * Add route params.
	 *
	 * @param {string} key Route Param Key.
	 * @param {string} value Route Param Value.
	 */
	const add = (key, value) => {
		if (typeof URLSearchParams !== 'undefined') {
			const params = new URLSearchParams(query);

			/** Remove duplicate values. */
			const appendVal = query[key]
				? Array.from(new Set([query[key], value].join(',').split(','))).join(',')
				: value;

			params.set(key, appendVal);
			const updateQuery = Object.fromEntries(params);
			router.push({ pathname, query: updateQuery });
		}
	};

	/**
	 * Add route params.
	 *
	 * @param {string} key Route Param Key.
	 * @param {string} value Route Param Value.
	 */
	const toggle = (key, value) => {
		if (typeof URLSearchParams !== 'undefined') {
			const valArr = query[key] ? query[key]?.split(',') : [];

			/** Add param, if is not set yet. */
			if (!query[key] || !valArr?.includes(value)) {
				add(key, value);
				return;
			}

			/** Otherwise, remove param. */
			const params = new URLSearchParams(query);
			const appendVal = valArr?.filter((v) => v !== value)?.join(',');
			params.set(key, appendVal);
			const updateQuery = Object.fromEntries(params);
			router.push({ pathname, query: updateQuery });
		}
	};

	/**
	 * Replace route params.
	 *
	 * @param {string} key Route Param Key.
	 * @param {string} value Route Param Value.
	 */
	const replace = (key, value) => {
		router.push({ pathname, query: { ...query, [key]: value } });
	};

	/**
	 * Replace multiple route params.
	 *
	 * @param {string} key Route Param Key.
	 * @param {string} value Route Param Value.
	 */
	const replaceMultiple = (keysAndValues = []) => {
		if (!isEmpty(keysAndValues) && typeof URLSearchParams !== 'undefined') {
			const params = new URLSearchParams(query);
			keysAndValues?.forEach(({ key, value }) => {
				params.append(key, value);
			});
			const updateQuery = Object.fromEntries(params);
			router.push({ pathname, query: updateQuery });
		}
	};

	/**
	 * Remove route params.
	 *
	 * @param {string} key Route Param Key.
	 */
	const remove = (key) => {
		if (query[key] && typeof URLSearchParams !== 'undefined') {
			const params = new URLSearchParams(query);
			params.delete(key);
			const updateQuery = Object.fromEntries(params);
			router.push({ pathname, query: updateQuery });
		}
	};

	/**
	 * Remove multiple route params.
	 *
	 * @param {array} keys Route Param Keys.
	 */
	const removesMultiple = (keys = []) => {
		if (!isEmpty(keys) && typeof URLSearchParams !== 'undefined') {
			const params = new URLSearchParams(query);
			keys.forEach((key) => {
				params.delete(key);
			});
			const updateQuery = Object.fromEntries(params);
			router.push({ pathname, query: updateQuery });
		}
	};

	return { query, add, toggle, replace, replaceMultiple, remove, removesMultiple };
};

export default useRouteParams;
