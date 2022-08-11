import {
	formatNumber,
	getMediaImgUrl,
	getMediaTrailer,
	generateMediaUid,
	filterMediaVideos,
	generateMediaLang,
	generateMediaRuntime,
	formatMediaListProps,
	generateMediaReleaseDate,
} from '@utils';
import slugify from 'slugify';
import { isEmpty, isNumber } from 'lodash';

/** Get Genres. */
const getGenres = (genres = []) =>
	genres?.map((genre) => {
		const slug = `${slugify(genre?.name, { lower: true })}`;
		const uid = generateMediaUid(genre?.id, genre?.name);
		return { ...genre, slug, uid };
	});

/** Get Rating. */
const getRating = (data) => {
	const voteAvg = data?.vote_average;
	const totalVote = data?.vote_count;
	if (!isNumber(voteAvg) || !isNumber(totalVote)) {
		return null;
	}
	return `${voteAvg.toFixed(1)} (${formatNumber(totalVote)})`;
};

/** Get TV Shows Seasons. */
const getTVSeasons = (tvSeasons = []) => {
	const collection = tvSeasons
		?.filter((s) => s?.episode_count > 0)
		.map((s) => formatMediaListProps('tvSeason', s));
	const count = collection?.length ?? 0;
	const label = count > 1 ? 'SEASONS' : 'SEASON';
	return { count, label, collection };
};

/** Filters crew members. */
const filterCrew = (crewMember, department = '', job = '') => {
	const crewDept = crewMember?.department?.toLowerCase();
	const crewJob = crewMember?.job?.toLowerCase();
	return crewDept === department && crewJob === job;
};

/** Get Creators/Directors. */
const getCreators = (type, data) => {
	if (type === 'tv') {
		return data?.created_by?.map((c) => ({ id: c?.id, name: c?.name })) ?? [];
	}
	const directors = data?.credits?.crew?.filter((c) => filterCrew(c, 'directing', 'director'));
	return directors?.map((c) => ({ id: c?.id, name: c?.name })) ?? [];
};

/** Get Writers. */
const getWriters = (crew = []) => {
	const writers = crew?.filter((w) => filterCrew(w, 'writing', 'writer'));
	return writers?.map((w) => ({ id: w?.id, name: w?.name })) ?? [];
};

/** Get Top Cast/Actors. */
const getTopCast = (cast = []) => {
	const casts = cast?.filter((c) => c?.known_for_department.toLowerCase() === 'acting');
	return casts?.map((c) => ({
		id: c?.id,
		name: c?.name,
		character: c?.character,
	}));
};

/** Get Recommendated Media */
const getRecommendatedMedia = (recommendations = []) =>
	recommendations?.map((r) => ({
		id: r?.id,
		uid: generateMediaUid(r?.id, r?.name || r?.title),
		title: r?.name || r?.title,
		backdrop: getMediaImgUrl(r?.backdrop_path, 'w300') ?? '/images/placeholders/backdrop.jpg',
	}));

/**
 * Normalise media props.
 *
 * @param {object} data Media Data.
 * @param {string} type Media Type.
 *
 * @returns Normalise media data.
 */
const normaliseMediaProps = (type = 'movie', data = null) => {
	if (isEmpty(data)) return null;

	/** Get Title. */
	const title = type === 'tv' ? data?.name : data?.title;

	return {
		id: data?.id,
		uid: generateMediaUid(data?.id, title),
		title,
		tagline: data?.tagline,
		overview: data?.overview,
		genres: getGenres(data?.genres),
		language: generateMediaLang(data?.original_language),
		runtime: generateMediaRuntime(type === 'tv' ? data?.episode_run_time[0] : data?.runtime),
		rating: getRating(data),
		releaseDate: generateMediaReleaseDate(
			type === 'tv' ? data?.first_air_date : data?.release_date
		),
		seasons: getTVSeasons(data?.seasons),
		[type === 'tv' ? 'creators' : 'directors']: getCreators(type, data),
		writers: getWriters(data?.credits?.crew),
		topCasts: getTopCast(data?.credits?.cast),
		backdrop: getMediaImgUrl(data?.backdrop_path, 'w1280') ?? '/images/placeholders/backdrop.jpg',
		poster: getMediaImgUrl(data?.poster_path, 'w342') ?? '/images/placeholders/poster.jpg',
		trailer: getMediaTrailer(data?.videos?.results),
		videos: filterMediaVideos(data?.videos?.results),
		recommendations: getRecommendatedMedia(data?.recommendations?.results),
	};
};

export default normaliseMediaProps;
