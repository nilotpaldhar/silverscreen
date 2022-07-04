import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { VisuallyHidden } from '@components/general';
import { ChevronLeft, ChevronRight, DotsHorizontal } from '@icons';
import cx from 'classnames';
import { removeSlashes } from '@utils';
import styles from './styles.module.scss';

/**
 * Render the Pagination component.
 *
 * @return {Element} The Pagination component.
 */
const Pagination = ({ pageCount, initialPage, routePrefix, className, ...props }) => {
	const router = useRouter();

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
	const handlePagination = (evt) => {
		const pageNo = (evt?.selected || 0) + 1;
		const route = routePrefix ? `/${removeSlashes(routePrefix)}/${pageNo}` : `/${pageNo}`;
		router.push(route);
	};

	return (
		<ReactPaginate
			className={cx(styles.pagination, className)}
			initialPage={initialPage - 1}
			pageCount={pageCount}
			pageRangeDisplayed={5}
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
	routePrefix: null,
	className: '',
};

/**
 * Prop Types.
 */
Pagination.propTypes = {
	pageCount: PropTypes.number.isRequired,
	initialPage: PropTypes.number,
	routePrefix: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]),
	className: PropTypes.string,
};

export default Pagination;
