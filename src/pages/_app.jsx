import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { MediaPlayerProvider } from '@context';
import { Layout } from '@components/layout';
import { createCanonicalUrl } from '@utils';

/** Default Seo Config. */
import { config } from '@config/next-seo';

/** Root Styles */
import '@styles/tailwindcss/core.scss';
import '@styles/global.scss';

/** Dynamic Imports. */
const RouteProgress = dynamic(() => import('@components/feedback/RouteProgress'));

/**
 * Render the App component.
 *
 * @return {Element} The App component.
 */
const App = ({ Component, pageProps }) => {
	const { asPath } = useRouter();
	const canonicalUrl = createCanonicalUrl(asPath);

	/** Default SEO Config. */
	const defaultSeoConf = {
		...config,
		canonical: canonicalUrl,
		openGraph: {
			...config.openGraph,
			url: canonicalUrl,
		},
	};

	return (
		<MediaPlayerProvider>
			<RouteProgress />
			<DefaultSeo {...defaultSeoConf} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MediaPlayerProvider>
	);
};

/**
 * Prop Types.
 */
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default App;
