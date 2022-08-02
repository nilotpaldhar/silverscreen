import PropTypes from 'prop-types';
import cx from 'classnames';
import MediaBlockHeader from './MediaBlockHeader';
import MediaBlockBody from './MediaBlockBody';
import styles from './styles.module.scss';

/**
 * Render the MediaBlock component.
 *
 * @return {Element} The MediaBlock component.
 */
const MediaBlock = ({ align, className, children, ...props }) => {
	const classNames = cx(styles.media_block, className, {
		[styles.vertical]: align === 'vertical',
		[styles.horizontal]: align === 'horizontal',
	});

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	);
};

/**
 * Default Props.
 */
MediaBlock.defaultProps = {
	align: 'vertical',
	className: '',
	children: '',
};

/**
 * Prop Types.
 */
MediaBlock.propTypes = {
	align: PropTypes.oneOf(['vertical', 'horizontal']),
	className: PropTypes.string,
	children: PropTypes.node,
};

/** MediaInfo Sub-Components. */
MediaBlock.Header = MediaBlockHeader;
MediaBlock.Body = MediaBlockBody;

export default MediaBlock;
