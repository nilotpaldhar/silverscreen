import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import ArrowDown from '@icons/general/ArrowDown';
import MediaEpisode from './MediaEpisode';

import styles from './styles.module.scss';

/**
 * Render the MediaEpisodes component.
 *
 * @return {Element} The MediaEpisodes component.
 */
const MediaEpisodes = ({ episodes, steps }) => {
	const episodesLength = episodes?.length ?? 0;
	const defaultEpisodesToShow = episodesLength > steps ? steps : episodesLength;

	const [episodesToShow, setEpisodesToShow] = useState(defaultEpisodesToShow);
	const [showMore, setShowMore] = useState(episodesLength > steps);

	/** Check show more state. */
	useEffect(() => {
		setShowMore(episodesLength > episodesToShow);
	}, [episodesToShow, episodesLength, steps]);

	/** Handle show more. */
	const handleShowMore = () => {
		setEpisodesToShow((prevVal) => {
			const nextVal = prevVal + steps;
			return episodesLength <= nextVal ? episodesLength : nextVal;
		});
	};

	return (
		<div className={styles.media_episodes}>
			<ul>
				{episodes?.slice(0, episodesToShow)?.map((episode) => (
					<li key={episode?.id}>
						<MediaEpisode data={episode} />
					</li>
				))}
			</ul>
			{showMore && (
				<div className={styles.load_more_wrapper}>
					<button type="button" onClick={handleShowMore} className={styles.load_more_btn}>
						<ArrowDown />
						<span>Load More</span>
					</button>
				</div>
			)}
		</div>
	);
};

/**
 * Default Props.
 */
MediaEpisodes.defaultProps = {
	episodes: [],
	steps: 5,
};

/**
 * Prop Types.
 */
MediaEpisodes.propTypes = {
	episodes: PropTypes.arrayOf(PropTypes.shape({})),
	steps: PropTypes.number,
};

export default MediaEpisodes;
