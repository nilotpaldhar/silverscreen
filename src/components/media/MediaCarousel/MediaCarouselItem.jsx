import PropTypes from 'prop-types';
import { BlurImage, Button, TruncateString } from '@components/general';
import { useRouter } from 'next/router';
import { MediaMeta } from '@components/media';
import { Play } from '@icons';
import styles from './styles.module.scss';

/**
 * Render the MediaCarouselItem component.
 *
 * @return {Element} The MediaCarouselItem component.
 */
const MediaCarouselItem = ({ data }) => {
	const router = useRouter();
	const hrefPrefix = data?.type === 'tv' ? 'tv' : 'movie';

	/** Handle Click. */
	const handleClick = () => {
		router.push(`/${hrefPrefix}/${data?.uid}`);
	};

	/** Backdrop Config. */
	const backdropConf = {
		src: data?.backdrop,
		alt: data?.title,
		width: 1280,
		height: 720,
	};

	/** Media Meta Config. */
	const metaConf = {
		runtime: null,
		rating: data?.rating?.toFixed(1),
		language: data?.language?.englishName,
		releaseDate: data?.releaseDate?.dateString,
		hideShare: true,
	};

	/** Button Config. */
	const btnConf = {
		link: true,
		href: `/${hrefPrefix}/${data?.uid}`,
		className: styles.media_carousel_item_btn,
		icon: <Play />,
	};

	return (
		<div className={styles.media_carousel_item} role="presentation" onClick={handleClick}>
			<div className={styles.media_carousel_item_content}>
				<h1 className={styles.media_carousel_item_title}>{data?.title}</h1>
				<MediaMeta {...metaConf} />
				<p className={styles.media_carousel_item_desc}>
					<TruncateString text={data?.overview} maxLength={180} />
				</p>
				<Button {...btnConf}>Watch Trailer</Button>
			</div>
			<div className={styles.media_carousel_item_backdrop}>
				<BlurImage {...backdropConf} />
			</div>
		</div>
	);
};

/**
 * Default Props.
 */
MediaCarouselItem.defaultProps = {
	data: {},
};

/**
 * Prop Types.
 */
MediaCarouselItem.propTypes = {
	data: PropTypes.shape({
		uid: PropTypes.string,
		type: PropTypes.string,
		title: PropTypes.string,
		overview: PropTypes.string,
		backdrop: PropTypes.string,
		rating: PropTypes.number,
		language: PropTypes.shape({
			englishName: PropTypes.string,
		}),
		releaseDate: PropTypes.shape({
			dateString: PropTypes.string,
		}),
	}),
};

export default MediaCarouselItem;
