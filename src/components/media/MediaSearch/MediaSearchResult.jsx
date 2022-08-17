import { useRouter } from 'next/router';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';
import { TruncateString } from '@components/general';
import { Loading } from '@icons';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import MediaSearchItem from './MediaSearchItem';
import styles from './styles.module.scss';

/**
 * Render the MediaSearchResult component.
 *
 * @return {Element} The MediaSearchResult component.
 */
const MediaSearchResult = ({
	open,
	error,
	loading,
	onReset,
	searchTerm,
	collection,
	getItemProps,
	highlightedIndex,
}) => {
	const router = useRouter();

	/** Transiltion Config. */
	const transitionConf = {
		as: Fragment,
		show: open,
		enter: 'transition duration-300',
		enterFrom: 'opacity-0',
		enterTo: 'opacity-100',
		leave: 'transition duration-200 ease-in-out',
		leaveFrom: 'opacity-100',
		leaveTo: 'opacity-0',
	};

	/** Navigate To Search Page. */
	const handleClick = () => {
		router.push({ pathname: '/search', query: { term: searchTerm } });
		onReset();
	};

	return (
		<Transition {...transitionConf}>
			<div className={styles.media_search_result}>
				<div className={styles.content}>
					{open && loading ? (
						<div className={styles.loading}>
							<Loading />
						</div>
					) : (
						<>
							{open && !isEmpty(collection) && (
								<ul className={styles.menu}>
									{collection?.slice(0, 3)?.map((media, index) => (
										<li
											className={cx(styles.menu_item, {
												[styles.selected]: highlightedIndex === index,
											})}
											{...getItemProps({ key: media?.id, index, item: media })}
										>
											<MediaSearchItem data={media} />
										</li>
									))}
								</ul>
							)}
							{open && isEmpty(error) && isEmpty(collection) && !isEmpty(searchTerm) && (
								<div className={styles.no_result}>Oops! No results found...</div>
							)}
							{open && !loading && !isEmpty(error) && (
								<div className={styles.no_result}>{error}</div>
							)}
							<div className={styles.footer}>
								<button type="button" disabled={isEmpty(searchTerm)} onClick={handleClick}>
									{isEmpty(searchTerm) ? (
										<span>Enter a search term...</span>
									) : (
										<>
											<span>See all results for</span>
											<span className={styles.term}>
												<TruncateString text={searchTerm} maxLength={20} />
											</span>
										</>
									)}
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</Transition>
	);
};

/**
 * Default Props.
 */
MediaSearchResult.defaultProps = {
	error: null,
	open: false,
	searchTerm: '',
	loading: false,
	collection: [],
	onReset: () => {},
	highlightedIndex: null,
	getItemProps: () => {},
};

/**
 * Prop Types.
 */
MediaSearchResult.propTypes = {
	open: PropTypes.bool,
	loading: PropTypes.bool,
	onReset: PropTypes.func,
	searchTerm: PropTypes.string,
	getItemProps: PropTypes.func,
	collection: PropTypes.arrayOf(PropTypes.shape({})),
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	highlightedIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(null)]),
};

export default MediaSearchResult;
