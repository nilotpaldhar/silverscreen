import PropTypes from 'prop-types';
import Image from '@components/general/Image';

import defaultImage from '@public/images/placeholders/empty.svg';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Empty component.
 *
 * @return {Element} The Empty component.
 */
const Empty = ({
	title,
	description,
	imgSrc,
	imgProps,
	children,
	className,
	classNames,
	...props
}) => (
	<div className={cx(styles.empty, className)} {...props}>
		<div className={cx(styles.empty_img_wrapper, classNames.imageWrapper)}>
			<Image src={imgSrc} className={classNames.image} {...imgProps} />
		</div>
		<div className={cx(styles.empty_content_wrapper, classNames.contentWrapper)}>
			<div className={cx(styles.empty_title, classNames.title)}>{title}</div>
			{description && (
				<div className={cx(styles.empty_desc, classNames.description)}>{description}</div>
			)}
			{children && <div className={cx(styles.empty_content, classNames.content)}>{children}</div>}
		</div>
	</div>
);

/**
 * Default Props.
 */
Empty.defaultProps = {
	title: 'No data found',
	description: '',
	imgSrc: defaultImage,
	imgProps: {
		alt: 'empty',
	},
	children: '',
	className: '',
	classNames: {
		imageWrapper: '',
		image: '',
		contentWrapper: '',
		title: '',
		description: '',
		content: '',
	},
};

/**
 * Prop Types.
 */
Empty.propTypes = {
	title: PropTypes.node,
	description: PropTypes.node,
	imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	imgProps: PropTypes.shape({}),
	children: PropTypes.node,
	className: PropTypes.string,
	classNames: PropTypes.shape({
		imageWrapper: PropTypes.string,
		image: PropTypes.string,
		contentWrapper: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		content: PropTypes.string,
	}),
};

export default Empty;
