import slugify from 'slugify';

/** Get genre backdrop. */
const getGenreBackdrop = (type, id) => {
	const genreType = type === 'tv' ? 'tv' : 'movie';
	return `/images/genres/${genreType}/${id}.jpg`;
};

/**
 * Normalise genres collection.
 *
 * @param {object} data Media Data.
 * @param {string} type Media Type.
 *
 * @returns Normalised genres collection data.
 */
const normaliseGenresCollection = (type = 'movie', data = []) => {
	const collection = data?.map((genre) => ({
		id: genre?.id,
		name: genre?.name,
		slug: `${slugify(genre?.name, { lower: true })}`,
		backdrop: getGenreBackdrop(type, genre?.id),
	}));

	return {
		collection,
		meta: { totalResults: collection?.length },
	};
};

export default normaliseGenresCollection;
