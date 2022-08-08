import { useState, Fragment } from 'react';
import { useRouteParams } from '@hooks';
import cx from 'classnames';
import { Combobox } from '@headlessui/react';
import languages from '@public/languages.json';
import MediaFiltersTitle from '../MediaFiltersTitle';
import styles from './styles.module.scss';

/**
 * Render the MediaFiltersLanguage component.
 *
 * @return {Element} The MediaFiltersLanguage component.
 */
const MediaFiltersLanguage = () => {
	const { query, replace, remove } = useRouteParams();

	/** Map Languages. */
	const langs = languages?.map((lang) => ({
		isoCode: lang?.iso_639_1,
		value: lang?.english_name?.toLowerCase(),
		label: lang?.english_name,
	}));

	/** Select Active Language. */
	const selectActiveLang = () => {
		if (!query?.language) return langs[0];
		return langs?.filter((l) => l?.isoCode === query?.language)[0];
	};

	/** Filter Languages. */
	const filterLangs = (term = '', langCollection = []) => {
		if (term === '') return langCollection;
		return langCollection.filter(({ value }) => value?.includes(term?.toLowerCase()));
	};

	/** State for active language & search term. */
	const [activeLang, setActiveLang] = useState(selectActiveLang()?.label);
	const [searchTerm, setSearchTerm] = useState('');

	/** Filtered Languages. */
	const filteredLangs = filterLangs(searchTerm, langs);

	/** Handle Search Input Change. */
	const handleInputChange = (_evt) => {
		setSearchTerm(_evt?.target?.value);
	};

	/** Handle Filter Language. */
	const handleFilterLang = (iso) => {
		const lang = langs?.find((l) => l?.isoCode === iso);
		setActiveLang(lang?.label);

		/** Add Language To Query Params. */
		if (lang?.isoCode === 'xx') {
			remove('language');
		} else {
			replace('language', lang?.isoCode);
		}
	};

	/** Handle Reset Language */
	const handleResetLang = () => {
		remove('language');
		setActiveLang(langs[0]?.label);
	};

	return (
		<div className={styles.media_filters_language}>
			<MediaFiltersTitle title="Language" onReset={handleResetLang} />
			<Combobox
				as="div"
				className={styles.search_wrapper}
				value={activeLang}
				onChange={handleFilterLang}
			>
				<Combobox.Input onChange={handleInputChange} className={styles.search_input} />
				<Combobox.Options className={styles.search_options}>
					{filteredLangs.length === 0 && searchTerm !== '' ? (
						<li className={styles.empty}>Nothing found</li>
					) : (
						filteredLangs.map(({ isoCode, label }) => (
							<Combobox.Option key={isoCode} value={isoCode} as={Fragment}>
								{({ active }) => <li className={cx({ [styles.active]: active })}>{label}</li>}
							</Combobox.Option>
						))
					)}
				</Combobox.Options>
			</Combobox>
		</div>
	);
};

export default MediaFiltersLanguage;
