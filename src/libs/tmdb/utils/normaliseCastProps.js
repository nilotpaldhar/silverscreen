import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import take from 'lodash/take';
import differenceInYears from 'date-fns/differenceInYears';

import { LIST_OF_DEPARTMENTS } from '@constants';
import getMediaImgUrl from '@utils/getMediaImgUrl';
import generateMediaUid from '@utils/generateMediaUid';
import removeDuplicatesObj from '@utils/removeDuplicatesObj';
import formatMediaListProps from '@utils/formatMediaListProps';
import generateMediaReleaseDate from '@utils/generateMediaReleaseDate';

/**
 * Get gender as string.
 *
 * 0 -> not-specified
 * 1 -> female
 * 2 -> male
 * default = non-binary
 */
const getGenderAsStr = (gender = null) => {
	if (gender === 0) return 'not-specified';
	if (gender === 1) return 'female';
	if (gender === 2) return 'male';
	return 'non-binary';
};

/** Get age from birthday. */
const getAge = (birthday = null) => {
	if (isEmpty(birthday)) return 'unknown';
	return differenceInYears(new Date(), new Date(birthday));
};

/** Maps social IDs. */
const mapSocialIds = (ids = {}) => ({
	facebook: ids?.facebook_id || null,
	instagram: ids?.instagram_id || null,
	twitter: ids?.twitter_id || null,
	youtube: ids?.youtube_id || null,
	tiktok: ids?.tiktok_id || null,
});

/** Maps cast credits. */
const mapCredit = (c) => {
	const mediaType = c?.media_type;
	const title = mediaType === 'tv' ? c?.name : c?.title;
	const releaseDate = generateMediaReleaseDate(
		mediaType === 'tv' ? c?.first_air_date : c?.release_date
	);

	return {
		title,
		id: c?.id,
		type: mediaType,
		job: c?.job ?? null,
		character: c?.character ?? '',
		voteAvg: c?.vote_average ?? 0,
		voteCount: c?.vote_count ?? 0,
		popularity: c?.popularity ?? 0,
		uid: generateMediaUid(c?.id, title),
		releaseYear: releaseDate ? releaseDate?.year : null,
	};
};

/** Filter cast credits by department. */
const filterCreditsByDept = (credits = []) => {
	const collection = {};
	LIST_OF_DEPARTMENTS.forEach((dept) => {
		const key = Object.keys(dept)[0];
		const value = Object.values(dept)[0];

		const filterFn = (c) => {
			const deptLower = c?.department?.toLowerCase();
			return deptLower === value;
		};

		const filteredCredits = credits?.filter(filterFn)?.map(mapCredit);
		const top20Credits = take(
			orderBy(filteredCredits, ['voteCount', 'voteAvg'], ['desc', 'desc']),
			20
		);
		collection[key] = orderBy(top20Credits, 'releaseYear', ['desc']);
	});
	return collection;
};

/** Filter most popular movies and tv shows of an actor. */
const filterPopularMedia = (collection = [], limit = 10) => {
	const popularMovies = [];
	const popularTvShows = [];

	const sortedCollection = orderBy(collection, ['vote_count', 'vote_average'], ['desc', 'desc']);

	sortedCollection.forEach((media) => {
		if (media?.media_type === 'tv') {
			popularTvShows.push(formatMediaListProps('tv', media));
		} else {
			popularMovies.push(formatMediaListProps('movie', media));
		}
	});

	return {
		tv: take(removeDuplicatesObj(popularTvShows), limit),
		movies: take(removeDuplicatesObj(popularMovies), limit),
	};
};

/**
 * Normalise cast props.
 *
 * @param {object} data Cast Data.
 *
 * @returns Normalise cast data.
 */
const normaliseCastProps = (data = null) => {
	if (isEmpty(data)) return null;

	const placeholderPath = '/images/placeholders/avatar.jpg';
	const popularMediaList = filterPopularMedia(data?.combined_credits?.cast);
	const actingCreditsSorted = orderBy(
		data?.combined_credits?.cast?.map(mapCredit),
		['voteCount', 'voteAvg'],
		['desc', 'desc']
	);

	return {
		id: data?.id,
		name: data?.name,
		birthday: data?.birthday,
		deathday: data?.deathday,
		aka: data?.also_known_as,
		age: getAge(data?.birthday),
		popularity: data?.popularity,
		placeOfBirth: data?.place_of_birth,
		gender: getGenderAsStr(data?.gender),
		socialIds: mapSocialIds(data?.external_ids),
		knownForDepartment: data?.known_for_department,
		avatar: getMediaImgUrl(data?.profile_path, 'h632') || placeholderPath,
		biography: data?.biography ? data?.biography?.replace(/\n/g, '<br />') : '',
		popular: {
			movies: popularMediaList?.movies,
			tv: popularMediaList?.tv,
		},
		knownFor: {
			acting: orderBy(take(actingCreditsSorted, 30), 'releaseYear', ['desc']),
			...filterCreditsByDept(data?.combined_credits?.crew),
		},
	};
};

export default normaliseCastProps;
