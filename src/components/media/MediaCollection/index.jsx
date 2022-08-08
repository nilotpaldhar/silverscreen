import PropTypes from 'prop-types';
import { MediaCard } from '@components/media';
import styles from './styles.module.scss';

/**
 * Render the MediaCollection component.
 *
 * @return {Element} The MediaCollection component.
 */
const MediaCollection = ({ type, collection }) => {
	/** Media Href Prefix. */
	const hrefPrefix = type === 'tv' ? 'tv' : 'movie';

	return (
		<div className={styles.media_collection}>
			<div className={styles.media_collection_row}>
				{collection?.map((item) => (
					<div key={item?.id} className={styles.media_collection_col}>
						<MediaCard type={type} hrefPrefix={hrefPrefix} data={item} />
					</div>
				))}
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
MediaCollection.defaultProps = {
	type: 'movie',
	collection: [],
};

/**
 * Prop Types.
 */
MediaCollection.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	collection: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MediaCollection;
