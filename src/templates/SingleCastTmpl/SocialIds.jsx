import PropTypes from 'prop-types';
import { SOCIAL_MEDIA_URLS } from '@constants';

import Link from '@components/general/Link';
import VisuallyHidden from '@components/general/VisuallyHidden';

import getSocialIcons from '@utils/getSocialIcons';
import styles from './styles.module.scss';

/**
 * Render the v component.
 *
 * @return {Element} The v component.
 */
const SocialIds = ({ ids }) => (
	<div className={styles.single_cast_tmpl_social_ids}>
		{Object.entries(ids).map(([name, id]) => {
			const Icon = getSocialIcons(name);
			const rootUrl = SOCIAL_MEDIA_URLS[name] ?? null;
			const href = rootUrl ? `${rootUrl}/${id}` : null;

			return id && href && Icon ? (
				<Link key={name} href={href} newWindow>
					<Icon />
					<VisuallyHidden>{name}</VisuallyHidden>
				</Link>
			) : null;
		})}
	</div>
);

/**
 * Default Props.
 */
SocialIds.defaultProps = {
	ids: {},
};

/**
 * Prop Types.
 */
SocialIds.propTypes = {
	ids: PropTypes.shape({
		facebook: PropTypes.string,
		instagram: PropTypes.string,
		twitter: PropTypes.string,
		youtube: PropTypes.string,
		tiktok: PropTypes.string,
	}),
};

export default SocialIds;
