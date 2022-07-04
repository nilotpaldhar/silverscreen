import NextProgressbar from 'nextjs-progressbar';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

/**
 * Render the RouteProgress component.
 *
 * @return {Element} The RouteProgress component.
 */
const RouteProgress = () => {
	const color = fullConfig?.theme?.colors?.primary[500] ?? '#FFFFFF';
	return <NextProgressbar color={color} options={{ showSpinner: false }} />;
};

export default RouteProgress;
