import PropTypes from 'prop-types';

import Link from '@components/general/Link';
import Image from '@components/general/Image';

import removeSlashes from '@utils/removeSlashes';
import openInNewTab from '@utils/openInNewTab';
import tmdbLogo from '@public/images/logos/tmdb-logo.svg';

import styles from './styles.module.scss';

/**
 * Render the FooterCredits component.
 *
 * @return {Element} The FooterCredits component.
 */
const FooterCredits = ({ sitename }) => {
	const year = new Date().getFullYear();
	const tmdbHref = removeSlashes(process.env.NEXT_PUBLIC_TMDB_WEB_URL);

	/** Website link. */
	const siteLink = <Link href="/">{sitename}</Link>;

	/** TMDB link with logo. */
	const tmdbFullLink = (
		<button type="button" className={styles.tmdb_link} onClick={() => openInNewTab(tmdbHref)}>
			<span>The Movie Database</span>
			(<Image src={tmdbLogo} alt="tmdb" width={60} height={8} />)
		</button>
	);

	/** TMDB link(short). */
	const tmdbShortLink = (
		<button type="button" onClick={() => openInNewTab(tmdbHref)}>
			TMDB
		</button>
	);

	return (
		<div className={styles.footer_credits}>
			&copy; {year} {siteLink}. All film-related metadata used in {siteLink}, including actor,
			director and studio names, rating, release dates, trailers and poster art is supplied by
			{tmdbFullLink}.{siteLink} uses the {tmdbShortLink} API but is not endorsed or certified by
			{tmdbShortLink}. To add missing films or correct inaccuracies for existing films, please use
			{tmdbShortLink} interface.
		</div>
	);
};

/**
 * Default Props.
 */
FooterCredits.defaultProps = {
	sitename: process.env.NEXT_PUBLIC_SITE_NAME,
};

/**
 * Prop Types.
 */
FooterCredits.propTypes = {
	sitename: PropTypes.string,
};

export default FooterCredits;
