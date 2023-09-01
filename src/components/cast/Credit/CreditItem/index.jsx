import PropTypes from 'prop-types';

import Link from '@components/general/Link';
import DotsHorizontalIcon from '@icons/general/DotsHorizontal';
import ArrowNarrowRightIcon from '@icons/general/ArrowNarrowRight';

import cx from 'classnames';
import styles from '../styles.module.scss';

/**
 * Render the CreditItem component.
 *
 * @return {Element} The CreditItem component.
 */
const CreditItem = ({ data, department, className, ...props }) => {
	const href = data?.type === 'tv' ? `/tv/${data?.uid}` : `/movie/${data?.uid}`;
	const role = department === 'acting' ? data?.character : data?.job;

	return (
		<li className={cx(styles.credit_item, className)} {...props}>
			<div className={styles.credit_item_release}>
				{data?.releaseYear ? (
					<span className="block text-xs md:text-base font-normal">{data?.releaseYear}</span>
				) : (
					<DotsHorizontalIcon />
				)}
			</div>
			<div className={styles.credit_item_arrow}>
				<ArrowNarrowRightIcon />
			</div>
			<div className={styles.credit_item_content}>
				<h3 className={styles.credit_item_content_title}>
					<Link href={href}>{data?.title}</Link>
				</h3>
				{role && (
					<div className={styles.credit_item_content_divider}>
						{department === 'acting' ? 'as' : '-'}
					</div>
				)}
				{role && (
					<div className={styles.credit_item_content_dept}>
						{department === 'acting' ? data?.character : data?.job}
					</div>
				)}
			</div>
		</li>
	);
};

/**
 * Default Props.
 */
CreditItem.defaultProps = {
	data: {},
	department: 'acting',
	className: '',
};

/**
 * Prop Types.
 */
CreditItem.propTypes = {
	data: PropTypes.shape({
		type: PropTypes.oneOf(['tv', 'movie']),
		title: PropTypes.string,
		uid: PropTypes.string,
		character: PropTypes.string,
		job: PropTypes.string,
		releaseYear: PropTypes.number,
	}),
	department: PropTypes.oneOf(['acting', 'other']),
	className: PropTypes.string,
};

export default CreditItem;
