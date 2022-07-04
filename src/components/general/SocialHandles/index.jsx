import PropTypes from 'prop-types';
import { Link, VisuallyHidden } from '@components/general';
import { getSocialIcons } from '@utils';
import styles from './styles.module.scss';

/**
 * Render the SocialHandles component.
 *
 * @return {Element} The SocialHandles component.
 */
const SocialHandles = ({ handles, ...props }) => (
	<div className={styles.social_handles} {...props}>
		{Object.entries(handles).map(([name, url]) => {
			const Icon = getSocialIcons(name);
			return Icon ? (
				<Link key={name} href={url} newWindow>
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
SocialHandles.defaultProps = {
	handles: {
		facebook: '/#',
		instagram: '/#',
		twitter: '/#',
		youtube: '/#',
	},
};

/**
 * Prop Types.
 */
SocialHandles.propTypes = {
	handles: PropTypes.shape({}),
};

export default SocialHandles;
