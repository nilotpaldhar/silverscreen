import PropTypes from 'prop-types';
import { Seo } from '@components/general';
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
		trailer: type === 'tvSeason' && season?.trailer ? season?.trailer : media?.trailer,
	};

	/** Check if videos & recommendations is not empty. */
	const showMediaTab = !(isEmpty(media?.videos) && isEmpty(media?.recommendations));

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
				{showMediaTab && (
					<section className={styles.single_media_tmpl_tabs}>
						<MediaTab type={type} media={media} />
					</section>
				)}
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
