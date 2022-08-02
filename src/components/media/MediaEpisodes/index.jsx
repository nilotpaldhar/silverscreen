import PropTypes from 'prop-types';
import MediaEpisode from './MediaEpisode';
import styles from './styles.module.scss';

/**
 * Render the MediaEpisodes component.
 *
 * @return {Element} The MediaEpisodes component.
 */
const MediaEpisodes = ({ episodes }) => (
	<div className={styles.media_episodes}>
		<ul>
			{episodes?.map((episode) => (
				<li key={episode?.id}>
					<MediaEpisode data={episode} />
				</li>
			))}
		</ul>
	</div>
);

/**
 * Default Props.
 */
MediaEpisodes.defaultProps = {
	episodes: [],
};

/**
 * Prop Types.
 */
MediaEpisodes.propTypes = {
	episodes: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaEpisodes;
