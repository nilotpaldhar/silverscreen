import PropTypes from 'prop-types';

import Seo from '@components/general/Seo';
import MediaHeader from '@components/media/MediaHeader';
import MediaDetails from '@components/media/MediaDetails';

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
		trailer: type === 'tvSeason' && season?.trailer ? season?.trailer : media?.trailer,
	};

	/** Get page title for SEO. */
	const getPageTitle = (mediaType, title, releaseYear, sessionNo) => {
		/** For "TV". */
		if (mediaType === 'tv') {
			return `${title} (TV Series${' ' + releaseYear ?? ''})`;
		}

		/** For "TV Season". */
		if (mediaType === 'tvSeason') {
			return `${title} Season ${sessionNo} (TV Series${' ' + releaseYear ?? ''})`;
		}

		/** For "Movie". */
		return `${title} (Movie${' ' + releaseYear ?? ''})`;
	};
	const seoTitle = getPageTitle(type, media?.title, media?.releaseDate?.year, season?.sessionNo);

	/** Seo Config. */
	const seoConf = {
		title: seoTitle,
		metaDesc: media?.overview,
		opengraphTitle: seoTitle,
		opengraphImages: [
			{
				url: media.backdrop,
				width: 1280,
				height: 720,
				alt: media?.title,
				type: 'image/jpg',
			},
		],
		opengraphDescription: media?.overview,
	};

	return (
		<>
			<Seo {...seoConf} />
			<div className={styles.single_media_tmpl}>
				<MediaHeader {...mediaHeaderConf} />
				<MediaDetails type={type} media={media} season={season} />
			</div>
		</>
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
		overview: PropTypes.string,
		backdrop: PropTypes.string,
		trailer: PropTypes.shape({}),
		releaseDate: PropTypes.shape({
			year: PropTypes.number,
		}),
		videos: PropTypes.arrayOf(PropTypes.shape({})),
		recommendations: PropTypes.arrayOf(PropTypes.shape({})),
	}),
	season: PropTypes.shape({
		sessionNo: PropTypes.number,
		trailer: PropTypes.shape({}),
	}),
};

export default SingleMediaTmpl;
