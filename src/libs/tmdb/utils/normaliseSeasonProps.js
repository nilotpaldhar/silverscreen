import { isEmpty } from 'lodash';
import {
	generateMediaReleaseDate,
	generateMediaRuntime,
	filterMediaVideos,
	getMediaTrailer,
	getMediaImgUrl,
} from '@utils';

/** Get season episodes. */
const getSeasonEpisodes = (episodes = []) => {
	const collection = episodes?.map((episode) => ({
		id: episode?.id,
		name: episode?.name,
		label: `S${episode?.season_number} E${episode?.episode_number}`,
		overview: episode?.overview,
		airDate: generateMediaReleaseDate(episode?.air_date),
		runtime: generateMediaRuntime(episode?.runtime),
	}));
	const count = collection?.length ?? 0;
	const label = count > 1 ? 'EPISODES' : 'EPISODE';
	return { collection, count, label };
};

/**
 * Normalise season props.
 *
 * @param {object} data Media Data.
 *
 * @returns Normalised season data.
 */
const normaliseSeasonProps = (data = null) => {
	if (isEmpty(data)) return null;

	return {
		id: data?.id,
		title: data?.name,
		overview: data?.overview,
		sessionNo: data?.season_number,
		poster: getMediaImgUrl(data?.poster_path, 'w342') ?? '/poster-placeholder.jpg',
		episodes: getSeasonEpisodes(data?.episodes),
		releaseDate: generateMediaReleaseDate(data?.air_date),
		trailer: getMediaTrailer(data?.videos?.results),
		videos: filterMediaVideos(data?.videos?.results),
	};
};

export default normaliseSeasonProps;
