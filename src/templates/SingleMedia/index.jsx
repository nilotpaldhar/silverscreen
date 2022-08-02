import PropTypes from 'prop-types';
import { MediaHeader, MediaDetails, MediaTab } from '@components/media';
import { isEmpty } from 'lodash';
import styles from './styles.module.scss';

/**
 * Render the SingleMediaTmpl component.
 *
 * @return {Element} The SingleMediaTmpl component.
 */
const SingleMediaTmpl = ({ type, media, season }) => {
	/** Media Header Config. */
	const mediaHeaderConf = {
		title: media?.title,
		backdrop: media?.backdrop,
		trailer: media?.trailer,
	};

	/** Check if videos & recommendations is not empty. */
	const showMediaTab = !(isEmpty(media?.videos) && isEmpty(media?.recommendations));

	return (
		<div className={styles.single_media_tmpl}>
			<MediaHeader {...mediaHeaderConf} />
			<MediaDetails type={type} media={media} season={season} />
			{showMediaTab && (
				<section className={styles.single_media_tmpl_tabs}>
					<MediaTab type={type} media={media} />
				</section>
			)}
		</div>
	);
};

/**
 * Default Props.
 */
SingleMediaTmpl.defaultProps = {
	type: 'movie',
	media: {},
	season: {},
};

/**
 * Prop Types.
 */
SingleMediaTmpl.propTypes = {
	type: PropTypes.oneOf(['tv', 'tvSeason', 'movie']),
	media: PropTypes.shape({
		title: PropTypes.string,
		backdrop: PropTypes.string,
		trailer: PropTypes.shape({}),
		videos: PropTypes.arrayOf(PropTypes.shape({})),
		recommendations: PropTypes.arrayOf(PropTypes.shape({})),
	}),
	season: PropTypes.shape({}),
};

export default SingleMediaTmpl;
