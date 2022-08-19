import { ErrorPageTmpl } from '@templates';
import { ArrowLeft } from '@icons';

/**
 * Render  the Error404Page component.
 *
 * @return {Element} The Error404Page component.
 */
const Error404Page = () => (
	<ErrorPageTmpl is404>
		<ErrorPageTmpl.Heading>Oops! Page not found</ErrorPageTmpl.Heading>
		<ErrorPageTmpl.Text>
			The page you’re looking for doesn’t exist. Please check your URL for spellings or
			capitalizations. If you’re having trouble locating your destination, try to click the link
			below to visit our Homepage
		</ErrorPageTmpl.Text>
		<ErrorPageTmpl.Button link href="/" icon={<ArrowLeft />}>
			Back To Home
		</ErrorPageTmpl.Button>
	</ErrorPageTmpl>
);

export default Error404Page;
