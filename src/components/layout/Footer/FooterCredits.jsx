import Link from '@components/general/Link';
import PropTypes from 'prop-types';
import tmdbLogo from '@public/tmdb-logo.svg';
import { Image } from '@components/general';
import styles from './styles.module.scss';

/**
 * Render the FooterCredits component.
 *
 * @return {Element} The FooterCredits component.
 */
const FooterCredits = ({ sitename }) => {
	const year = new Date().getFullYear();
	const tmdbHref = 'https://www.themoviedb.org';

	/** Website link. */
	const siteLink = <Link href="/">{sitename}</Link>;

	/** TMDB link with logo. */
	const tmdbFullLink = (
		<a className={styles.tmdb_link} href={tmdbHref} target="_blank" rel="noopener noreferrer">
			<span>The Movie Database</span>
			(<Image src={tmdbLogo} alt="tmdb" width={60} height={8} />)
		</a>
	);

	/** TMDB link(short). */
	const tmdbShortLink = (
		<a href={tmdbHref} target="_blank" rel="noopener noreferrer">
			TMDB
		</a>
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
