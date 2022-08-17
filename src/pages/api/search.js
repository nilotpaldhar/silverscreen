import { isNull } from 'lodash';
import { searchMedia } from '@libs/tmdb';

/**
 * Media Search Handler.
 */
const handler = async (req, res) => {
	const { term = '', page = 1 } = req?.query || {};

	/** Default error message. */
	const defaultMesg = 'Failed to fetch resource.';

	/** Validate request method. */
	if (req?.method !== 'POST') {
		res.status(500).json({ message: defaultMesg, success: false });
	}

	/** Fetch search results. */
	const results = await searchMedia(term, page);

	if (isNull(results)) {
		res.status(500).json({ message: defaultMesg, success: false });
	}

	res.status(200).json(results);
};

export default handler;
