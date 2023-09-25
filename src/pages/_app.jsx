import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Rubik } from 'next/font/google';

import { DefaultSeo } from 'next-seo';

import { Layout } from '@components/layout';
import { MediaPlayerProvider } from '@context/mediaPlayerContext';
import { WatchlistProvider } from '@context/watchlistContext';

import { createCanonicalUrl } from '@utils';

/** Default Seo Config. */
import { config } from '@config/next-seo';

/** Root Styles */
import '@styles/tailwindcss/core.scss';
import '@styles/global.scss';

/** Font Configuration. */
const rubik = Rubik({
	subsets: ['latin'],
	fallback: ['sans-serif'],
	variable: '--font-rubik',
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700'],
});

/** Dynamic Imports. */
const RouteProgress = dynamic(() => import('@components/feedback/RouteProgress'));
const Notification = dynamic(() => import('@components/feedback/Notification'));

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
		<WatchlistProvider>
			<MediaPlayerProvider>
				<RouteProgress />
				<Notification />
				<DefaultSeo {...defaultSeoConf} />
				<div className={`${rubik.variable} ${rubik.className} h-full`}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</div>
			</MediaPlayerProvider>
		</WatchlistProvider>
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
