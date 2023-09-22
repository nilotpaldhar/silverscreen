import { tmdbClient } from '@config/tmdb';
import formatMediaListProps from '@utils/formatMediaListProps';

/**
 * Get media(movie/tv) collection.
 *
 * @param {string} type Media Type.
 * @param {array} mediaIds Media IDs.
 *
 * @return {array} Media collection.
 */
const getMediaCollection = async (mediaIds = [], type = 'movie') => {
	const mediaType = type === 'tv' ? 'tv' : 'movie';
	const language = 'language=en-US';

	/** Fetch media collection. */
	try {
		const resArr = await Promise.allSettled(
			mediaIds.map((id) => tmdbClient.get(`/${mediaType}/${id}?${language}`))
		);

		const collection = resArr
			?.filter((res) => res.status === 'fulfilled')
			?.map(({ value: { data } = {} }) => ({ ...data, genre_ids: data?.genres?.map((g) => g?.id) }))
			?.map((media) => formatMediaListProps(mediaType, media));

		return collection;
	} catch (error) {
		return null;
	}
};

export default getMediaCollection;
