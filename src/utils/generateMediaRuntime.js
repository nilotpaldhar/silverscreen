import { intervalToDuration } from 'date-fns';

/**
 * Generates media(movie/tv) runtime.
 *
 * @param {number} runtimeMins Media Runtime in Minutes.
 *
 * @returns Media Runtime(hours-minutes).
 */
const generateMediaRuntime = (runtimeMins = 0) => {
	let runtime = '';
	const { hours, minutes } = intervalToDuration({ start: 0, end: 60000 * runtimeMins }) || {};
	if (hours > 0) runtime += `${hours} hr`;
	if (minutes > 0) runtime += ` ${minutes} mins`;
	return runtime ? runtime?.trim() : null;
};

export default generateMediaRuntime;
