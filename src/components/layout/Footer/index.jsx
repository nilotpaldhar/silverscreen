import { Container, SocialHandles } from '@components/general';
import FooterCredits from './FooterCredits';
import FooterMenu from './FooterMenu';
import styles from './styles.module.scss';

/**
 * Render the Footer component.
 *
 * @return {Element} The Footer component.
 */
const Footer = () => (
	<footer className={styles.footer}>
		<Container>
			<div className={styles.footer_body}>
				<div className="flex-1">
					<FooterMenu />
					<FooterCredits />
				</div>
				<div className={styles.footer_social}>
					<h4>Connect With Us</h4>
					<SocialHandles />
				</div>
			</div>
		</Container>
	</footer>
);

export default Footer;
