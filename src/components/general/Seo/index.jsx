import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import createCanonicalUrl from '@utils/createCanonicalUrl';

/**
 * Render the Seo component.
 *
 * @return {Element} The SocialHandles component.
 */
const Seo = ({
	title,
	metaDesc,
	opengraphTitle,
	opengraphImages,
	opengraphSiteName,
	metaRobotsNoindex,
	metaRobotsNofollow,
	opengraphDescription,
}) => {
	/** Create canonical URL. */
	const router = useRouter();
	const canonicalUrl = createCanonicalUrl(router.asPath);

	/** Seo Config. */
	const conf = {
		title,
		description: metaDesc,
		canonical: canonicalUrl,
		nofollow: metaRobotsNofollow,
		noindex: metaRobotsNoindex,
		openGraph: {
			url: canonicalUrl,
			title: opengraphTitle,
			images: opengraphImages,
			siteName: opengraphSiteName,
			description: opengraphDescription,
		},
	};

	return <NextSeo {...conf} />;
};

/**
 * Default Props.
 */
Seo.defaultProps = {
	title: '',
	metaDesc: '',
	opengraphTitle: '',
	opengraphImages: [],
	opengraphSiteName: '',
	opengraphDescription: '',
	metaRobotsNoindex: false,
	metaRobotsNofollow: false,
};

/**
 * Prop Types.
 */
Seo.propTypes = {
	title: PropTypes.string,
	metaDesc: PropTypes.string,
	opengraphTitle: PropTypes.string,
	opengraphSiteName: PropTypes.string,
	opengraphDescription: PropTypes.string,
	metaRobotsNoindex: PropTypes.bool,
	metaRobotsNofollow: PropTypes.bool,
	opengraphImages: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			width: PropTypes.number,
			height: PropTypes.number,
			alt: PropTypes.string,
			type: PropTypes.string,
		})
	),
};

export default Seo;
