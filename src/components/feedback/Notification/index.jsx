import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';

/**
 * Render the Notification component.
 *
 * @return {Element} The Notification component.
 */
const Notification = ({ position, gutter, duration }) => {
	const options = {
		position,
		gutter,
		toastOptions: {
			duration,
			className: 'text-sm font-sans',
			style: {
				borderRadius: 0,
				lineHeight: 1.625,
				padding: '12px 16px',
				backgroundColor: '#090B15',
				color: 'inherit',
				boxShadow: 'none',
			},
			success: {
				iconTheme: {
					primary: '#16A34A',
					secondary: '#D1D5DB',
				},
			},
			error: {
				iconTheme: {
					primary: '#B91C1C',
					secondary: '#D1D5DB',
				},
			},
		},
	};

	return <Toaster {...options} />;
};

/**
 * Default Props.
 */
Notification.defaultProps = {
	position: 'bottom-left',
	gutter: 12,
	duration: 6000,
};

/**
 * Prop Types.
 */
Notification.propTypes = {
	position: PropTypes.oneOf([
		'bottom-center',
		'bottom-left',
		'bottom-right',
		'top-center',
		'top-left',
		'top-right',
	]),
	gutter: PropTypes.number,
	duration: PropTypes.number,
};

export default Notification;
