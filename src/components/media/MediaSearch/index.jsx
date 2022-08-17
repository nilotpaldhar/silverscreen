import { useRouter } from 'next/router';
import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import axios from 'axios';
import cx from 'classnames';
import { debounce, isEmpty, isFunction } from 'lodash';
import MediaSearchForm from './MediaSearchForm';
import MediaSearchResult from './MediaSearchResult';
import styles from './styles.module.scss';

/**
 * Render the MediaSearch component.
 *
 * @return {Element} The MediaSearch component.
 */
const MediaSearch = ({ borderLess, showResetBtn, onReset }) => {
	const searchbarId = useId();
	const router = useRouter();
	const [collection, setCollection] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	/** Reset Downshift and Component State. */
	const resetCompState = (downshiftReset, callback) => {
		/** Reset Component State. */
		setCollection([]);
		setSearchTerm('');
		setLoading(false);

		/** Reset Downshift State. */
		if (downshiftReset && isFunction(downshiftReset)) {
			downshiftReset();
		}

		/** Callback. */
		if (callback && isFunction(callback)) {
			callback();
		}
	};

	/** Search Media. */
	const searchMedia = async (term) => {
		try {
			const res = await axios.post(`/api/search?term=${term}`);
			setCollection(res?.data?.collection?.all);
			setLoading(false);
		} catch (err) {
			setCollection([]);
			setLoading(false);
			setError('Oops! Something went wrong. Please try agian...');
		}
	};

	/** Handle Input Change. */
	const handleInputChange = debounce((_evt) => {
		const term = _evt?.target?.value;

		/** Fetch media (if not empty). */
		if (!isEmpty(term)) {
			setError(null);
			setLoading(true);
			searchMedia(term);
			setSearchTerm(term);
			return;
		}

		/** Reset State. */
		resetCompState();
	}, 500);

	/** Hendle Downshift Change. */
	const handleDownshiftChange = (media, { clearSelection }) => {
		if (!isEmpty(media)) {
			router.push(`/${media?.type === 'tv' ? 'tv' : 'movie'}/${media?.uid}`);
			clearSelection();
			resetCompState();
		}
	};

	/** Downshift Config. */
	const downshiftConf = {
		id: searchbarId,
		onChange: handleDownshiftChange,
		onOuterClick: ({ reset }) => resetCompState(reset),
		itemToString: (media) => (media ? media?.title : ''),
	};

	return (
		<div
			className={cx(styles.media_search, {
				[styles.borderLess]: borderLess,
				[styles.show_reset_btn]: showResetBtn,
			})}
		>
			<Downshift {...downshiftConf}>
				{({
					reset,
					isOpen,
					getMenuProps,
					getItemProps,
					getLabelProps,
					getInputProps,
					highlightedIndex,
				}) => (
					<div className={styles.media_search_wrapper}>
						<MediaSearchForm
							open={isOpen}
							searchTerm={searchTerm}
							getLabelProps={getLabelProps}
							getInputProps={getInputProps}
							onInputChange={handleInputChange}
							onReset={() => resetCompState(reset, () => onReset())}
						/>
						<div {...getMenuProps()}>
							<MediaSearchResult
								open={isOpen}
								error={error}
								loading={loading}
								searchTerm={searchTerm}
								collection={collection}
								getItemProps={getItemProps}
								highlightedIndex={highlightedIndex}
								onReset={() => resetCompState(reset)}
							/>
						</div>
					</div>
				)}
			</Downshift>
		</div>
	);
};

/**
 * Default Props.
 */
MediaSearch.defaultProps = {
	borderLess: false,
	onReset: () => {},
	showResetBtn: false,
};

/**
 * Prop Types.
 */
MediaSearch.propTypes = {
	onReset: PropTypes.func,
	borderLess: PropTypes.bool,
	showResetBtn: PropTypes.bool,
};

export default MediaSearch;
