import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the MediaBlockBody component.
 *
 * @return {Element} The MediaBlockBody component.
 */
const MediaBlockBody = ({ className, children, ...props }) => (
	<div className={cx(styles.media_block_body, className)} {...props}>
		{children}
	</div>
);

/**
 * Default Props.
 */
MediaBlockBody.defaultProps = {
	className: '',
	children: '',
};

/**
 * Prop Types.
 */
MediaBlockBody.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default MediaBlockBody;
