import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the MediaBlockHeader component.
 *
 * @return {Element} The MediaBlockHeader component.
 */
const MediaBlockHeader = ({ className, children, ...props }) => (
	<h3 className={cx(styles.media_block_header, className)} {...props}>
		{children}
	</h3>
);

/**
 * Default Props.
 */
MediaBlockHeader.defaultProps = {
	className: '',
	children: '',
};

/**
 * Prop Types.
 */
MediaBlockHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default MediaBlockHeader;
