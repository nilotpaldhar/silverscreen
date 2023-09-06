import PropTypes from 'prop-types';

import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'next-share';
import Popovers from '@components/feedback/Popovers';

import ShareIcon from '@icons/general/Share';
import FacebookIcon from '@icons/social/Facebook';
import TwitterIcon from '@icons/social/Twitter';
import Emailcon from '@icons/general/Email';
import LinkIcon from '@icons/general/Link';

import useCopy from '@hooks/useCopy';
import styles from './styles.module.scss';

/**
 * Render the MediaShare component.
 *
 * @return {Element} The MediaShare component.
 */
const MediaShare = ({ url, title, ...props }) => {
	const [copy, isCopied, setIsCopied] = useCopy(url);

	/** Copy media url. */
	const copyUrl = () => {
		copy();
		setTimeout(() => setIsCopied(false), 3000);
	};

	return (
		<div {...props}>
			<Popovers
				label={
					<div className={styles.media_share_trigger}>
						<ShareIcon />
						<span>Share</span>
					</div>
				}
				placement="right"
				fallbackPlacements={['left', 'bottom']}
				showIcon={false}
			>
				<div className="px-2">
					<div className={styles.media_share_item}>
						<FacebookShareButton url={url} quote={title} className="xxx">
							<FacebookIcon />
							<span>Facebook</span>
						</FacebookShareButton>
					</div>

					<div className={styles.media_share_item}>
						<TwitterShareButton url={url} title={title}>
							<TwitterIcon />
							<span>Twitter</span>
						</TwitterShareButton>
					</div>

					<div className={styles.media_share_item}>
						<EmailShareButton type="button" url={url} subject={title} body={`${title}: `}>
							<Emailcon />
							<span>Email</span>
						</EmailShareButton>
					</div>

					<div className={styles.media_share_item}>
						<button type="button" onClick={copyUrl}>
							<LinkIcon />
							<span>{isCopied ? 'Copied!' : 'Share Link'}</span>
						</button>
					</div>
				</div>
			</Popovers>
		</div>
	);
};

/**
 * Default Props.
 */
MediaShare.defaultProps = {};

/**
 * Prop Types.
 */
MediaShare.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default MediaShare;
