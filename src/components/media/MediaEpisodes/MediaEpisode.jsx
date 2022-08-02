import PropTypes from 'prop-types';
import { Disclosure } from '@headlessui/react';
import { ChevronUp, ChevronDown } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaEpisode component.
 *
 * @return {Element} The MediaEpisode component.
 */
const MediaEpisode = ({ data }) => {
	const { label, name, overview } = data;

	return (
		<Disclosure as="div" className={styles.media_episode}>
			{({ open }) => (
				<>
					<Disclosure.Button className={styles.media_episode_btn}>
						<span className={styles.label}>{label}&nbsp;&ndash;&nbsp;</span>
						<span className={styles.name}>{name}</span>
						{open ? <ChevronUp /> : <ChevronDown />}
					</Disclosure.Button>
					{overview && (
						<Disclosure.Panel className={styles.media_episode_overview}>
							<p>{overview}</p>
						</Disclosure.Panel>
					)}
				</>
			)}
		</Disclosure>
	);
};

/**
 * Default Props.
 */
MediaEpisode.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaEpisode.propTypes = {
	data: PropTypes.shape({
		label: PropTypes.string,
		name: PropTypes.string,
		overview: PropTypes.string,
	}),
};

export default MediaEpisode;
