import { isNull } from 'lodash';
import mapMediaGenresById from '@utils/mapMediaGenresById';
import getMediaImgUrl from '@utils/getMediaImgUrl';
import generateMediaUid from '@utils/generateMediaUid';
import generateMediaLang from '@utils/generateMediaLang';
import generateMediaReleaseDate from '@utils/generateMediaReleaseDate';

/**
 * Formats media object.
 *
 * @param {string} type Media Type
 * @param {object} data Media Data/Props.
 *
 * @returns Formatted Media Object.
 */
const formatMediaListProps = (type = 'movie', data = null) => {
	if (isNull(data)) {
		return null;
	}

	/** Get media title. */
	const title = type === 'tvSeason' || type === 'tv' ? data?.name : data?.title;

	if (type === 'tvSeason') {
		return {
			title,
			id: data?.id,
			overview: data?.overview,
			season: data?.season_number,
			episodes: data?.episode_count,
			releaseDate: generateMediaReleaseDate(data?.air_date),
			poster: getMediaImgUrl(data?.poster_path, 'w342') ?? '/images/placeholders/poster.jpg',
		};
	}

	return {
		title,
		id: data?.id,
		overview: data?.overview,
		rating: data?.vote_average,
		uid: generateMediaUid(data?.id, title),
		genres: mapMediaGenresById(type, data?.genre_ids),
		language: generateMediaLang(data?.original_language),
		poster: getMediaImgUrl(data?.poster_path, 'w342') ?? '/images/placeholders/poster.jpg',
		backdrop: getMediaImgUrl(data?.backdrop_path, 'w1280') ?? '/images/placeholders/backdrop.jpg',
		releaseDate: generateMediaReleaseDate(
			type === 'tv' ? data?.first_air_date : data?.release_date
		),
	};
};

export default formatMediaListProps;
