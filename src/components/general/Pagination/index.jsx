import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { VisuallyHidden } from '@components/general';
import { ChevronLeft, ChevronRight, DotsHorizontal } from '@icons';
import { useRouteParams } from '@hooks';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Pagination component.
 *
 * @return {Element} The Pagination component.
 */
const Pagination = ({ pageCount, initialPage, key, className, ...props }) => {
	const { replace } = useRouteParams();

	/** Break Label. */
	const breakLabel = <DotsHorizontal />;

	/** Previous Label. */
	const prevLabel = (
		<>
			<ChevronLeft />
			<VisuallyHidden>Previous</VisuallyHidden>
		</>
	);

	/** Next Label. */
	const nextLabel = (
		<>
			<ChevronRight />
			<VisuallyHidden>Next</VisuallyHidden>
		</>
	);

	/**
	 * Handle pagination.
	 */
	const handlePagination = (_evt) => {
		const pageNo = (_evt?.selected || 0) + 1;
		replace(key, pageNo);
	};

	return (
		<ReactPaginate
			className={cx(styles.pagination, className)}
			initialPage={initialPage - 1}
			pageCount={pageCount}
			pageRangeDisplayed={2}
			onPageChange={handlePagination}
			disableInitialCallback
			activeLinkClassName={styles.active}
			disabledLinkClassName={styles.disabled}
			breakClassName={styles.break}
			breakLabel={breakLabel}
			previousLabel={prevLabel}
			nextLabel={nextLabel}
			{...props}
		/>
	);
};

/**
 * Default Props.
 */
Pagination.defaultProps = {
	initialPage: 1,
	key: 'page',
	className: '',
};

/**
 * Prop Types.
 */
Pagination.propTypes = {
	pageCount: PropTypes.number.isRequired,
	initialPage: PropTypes.number,
	key: PropTypes.string,
	className: PropTypes.string,
};

export default Pagination;
