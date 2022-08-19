import PropTypes from 'prop-types';
import { Container, Image } from '@components/general';
import cx from 'classnames';
import illustration from '@public/images/illustrations/404.png';
import ErrorPageButton from './Button';
import ErrorPageText from './Text';
import ErrorPageHeading from './Heading';
import styles from './styles.module.scss';

/**
 * Render the ErrorPageTmpl component.
 *
 * @return {Element} The ErrorPageTmpl component.
 */
const ErrorPageTmpl = ({ is404, children }) => {
	/** Image Config. */
	const imgConf = {
		src: illustration,
		placeholder: 'blur',
		alt: '404 Illustration',
		className: styles.error_page_tmpl_img,
	};

	return (
		<div className={cx(styles.error_page_tmpl, { [styles.is404]: is404 })}>
			<Container fluidLarge={false}>
				<div className="justify-center row">
					<div className="col-12 md:col-10 lg:col-8 xl:col-7">
						{is404 && <Image {...imgConf} />}
						<main className={styles.error_page_tmpl_content}>{children}</main>
					</div>
				</div>
			</Container>
		</div>
	);
};

/**
 * Default Props.
 */
ErrorPageTmpl.defaultProps = {
	is404: false,
	children: '',
};

/**
 * Prop Types.
 */
ErrorPageTmpl.propTypes = {
	is404: PropTypes.bool,
	children: PropTypes.node,
};

/**
 * Sub Components..
 */
ErrorPageTmpl.Heading = ErrorPageHeading;
ErrorPageTmpl.Text = ErrorPageText;
ErrorPageTmpl.Button = ErrorPageButton;

export default ErrorPageTmpl;
