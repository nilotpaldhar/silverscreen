import { removeTrailingSlash } from '@utils';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

/** Get Tailwind Theme Color. */
const fullConfig = resolveConfig(tailwindConfig);
const themeColor = fullConfig?.theme?.colors?.primary[500] ?? '#FFFFFF';

/** Get default options from ENV. */
const sitename = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Your Site Name';
const siteurl = removeTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL) ?? 'https://localhost:3000';
const twitterUserName = process.env.NEXT_PUBLIC_TWITTER_HANDLE;
const twitterCardType = process.env.NEXT_PUBLIC_TWITTER_CARD_TYPE ?? 'summary';

/** Site Title. */
const siteTitle = `${sitename} - Search Engine for Movies and TV Shows`;

/** Site Description. */
const siteDescription = `Find out new movies and tv series online with ${sitename}, the search engine for movies and tv series`;

export const config = {
	defaultTitle: siteTitle,
	titleTemplate: `%s - ${sitename}`,
	description: siteDescription,
	canonical: siteurl,
	noindex: false,
	nofollow: false,
	openGraph: {
		type: 'website',
		title: siteTitle,
		description: siteDescription,
		site_name: sitename,
		url: siteurl,
		images: [
			{
				url: `${siteurl}/images/logos/og-site-logo.png`,
				width: 1200,
				height: 630,
				type: 'image/png',
				alt: `${sitename} Logo`,
			},
		],
	},
	twitter: {
		handle: twitterUserName,
		site: twitterUserName,
		cardType: twitterCardType,
	},
	additionalMetaTags: [
		{
			property: 'msapplication-TileColor',
			content: themeColor,
		},
		{
			property: 'theme-color',
			content: themeColor,
		},
	],
	additionalLinkTags: [
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: `${siteurl}/images/favicon/apple-touch-icon.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: `${siteurl}/images/favicon/favicon-32x32.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: `${siteurl}/images/favicon/favicon-16x16.png`,
		},
		{
			rel: 'mask-icon',
			color: themeColor,
			href: `${siteurl}/images/favicon/safari-pinned-tab.svg`,
		},
	],
};

export default config;
