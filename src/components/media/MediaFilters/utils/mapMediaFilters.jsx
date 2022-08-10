import MediaFiltersGenres from '../MediaFiltersGenres';
import MediaFiltersRating from '../MediaFiltersRating';
import MediaFiltersRelease from '../MediaFiltersRelease';
import MediaFiltersLanguage from '../MediaFiltersLanguage';
import MediaFiltersCertification from '../MediaFiltersCertification';

/**
 * Maps media filter components.
 *
 * @param {string} name Filter name.
 *
 * @return {Element} Filter component.
 */
const mapMediaFilters = (name = '') => {
	const MediaFiltersMap = {
		release: MediaFiltersRelease,
		genres: MediaFiltersGenres,
		language: MediaFiltersLanguage,
		rating: MediaFiltersRating,
		certification: MediaFiltersCertification,
	};

	if (name in MediaFiltersMap) {
		return MediaFiltersMap[name];
	}

	return null;
};

export default mapMediaFilters;
