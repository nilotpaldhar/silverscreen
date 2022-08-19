import { ErrorPageTmpl } from '@templates';

/**
 * Render  the Error500Page component.
 *
 * @return {Element} The Error500Page component.
 */
const Error500Page = () => (
	<ErrorPageTmpl>
		<ErrorPageTmpl.Heading>Internal Server Error</ErrorPageTmpl.Heading>
		<ErrorPageTmpl.Text>
			Unfortunately we are having trouble loading the page you are looking for. Please come back in
			a while.
		</ErrorPageTmpl.Text>
	</ErrorPageTmpl>
);

export default Error500Page;
